// 전역 변수로 음성 인식 상태 관리
let isListening = false;
let audioContext = null;
let mediaStreamSource = null;
let processor = null;
let lastAudioTime = Date.now();
let autoStopTimer;
let silenceTimeout = null; // 3초 무음 감지를 위한 타이머
let searchInput = null; // 검색 입력 필드를 위한 전역 변수

// 전역 변수로 현재 재생 중인 오디오 객체 관리
let currentAudio = null;
let isUserSpeaking = false; // 사용자가 말하고 있는지 추적
let pendingCommand = null; // 대기 중인 명령어 저장

let silenceTimer = null;
const SILENCE_TIMEOUT = 3000; // 3초

let isGeminiResponding = false; // Gemini 응답 중인지 추적하는 변수 추가

// 음성 인식 초기화 함수
function initVoiceRecognition() {
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    searchInput = document.querySelector('.header-search input.input');
    
    // 검색 입력 필드가 없으면 생성
    if (!searchInput) {
        console.log('검색 입력 필드를 찾을 수 없습니다. 새로 생성합니다.');
        const headerSearch = document.querySelector('.header-search');
        if (headerSearch) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'input';
            input.placeholder = '검색어를 입력하세요';
            headerSearch.appendChild(input);
            searchInput = input;
        }
    }
    
    // 이전 페이지에서 음성 인식 상태 확인
    const wasListening = sessionStorage.getItem('voiceRecognitionActive') === 'true';
    
    // 음성 인식 버튼 클릭 이벤트 리스너 추가
    if (voiceSearchBtn) {
        voiceSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!isListening) {
                startListening();
            } else {
                stopListening();
            }
        });
    }

    // 이전 페이지에서 음성 인식 중이었다면 자동으로 시작
    if (wasListening) {
        setTimeout(() => {
            startListening();
        }, 1000);
    }
}

// URL 파라미터 처리
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id'),
        name: decodeURIComponent(params.get('name')),
        price: params.get('price'),
        image: params.get('image'),
        category: params.get('category')
    };
}

// 음성 인식 시작
async function startListening() {
    if (!isListening) {
        isListening = true;
        try {
            // 마이크 접근 권한 요청 알림이 이미 표시되었는지 확인
            const hasShownAlert = localStorage.getItem('hasShownMicAlert');
            if (!hasShownAlert) {
                alert('마이크 접근 권한이 필요합니다. 권한을 허용해주세요.');
                localStorage.setItem('hasShownMicAlert', 'true');
            }
            
            // 마이크 권한 상태 확인
            const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
            
            if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        sampleRate: 48000,
                        channelCount: 1
                    }
                });
                
                if (!stream) {
                    throw new Error('마이크 스트림을 가져올 수 없습니다.');
                }
                
                setupAudioProcessing(stream);
            } else {
                throw new Error('마이크 접근이 거부되었습니다. 브라우저 설정에서 마이크 권한을 허용해주세요.');
            }
        } catch (error) {
            console.error('마이크 접근 오류:', error);
            alert('마이크 접근에 실패했습니다. 다음을 확인해주세요:\n1. 마이크가 연결되어 있는지\n2. 브라우저 설정에서 마이크 권한이 허용되어 있는지\n3. 다른 앱이 마이크를 사용 중이지 않은지');
        }
    }
}

function setupAudioProcessing(stream) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)({
        sampleRate: 48000
    });
    
    if (!audioContext) {
        throw new Error('오디오 컨텍스트를 생성할 수 없습니다.');
    }

    mediaStreamSource = audioContext.createMediaStreamSource(stream);
    processor = audioContext.createScriptProcessor(2048, 1, 1);
    
    if (!processor) {
        throw new Error('오디오 프로세서를 생성할 수 없습니다.');
    }
    
    processor.onaudioprocess = (e) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            const inputData = e.inputBuffer.getChannelData(0);
            const audioData = convertFloat32ToInt16(inputData);
            
            // 음성 감지 임계값 조정
            if (audioData.some(sample => Math.abs(sample) > 50)) {
                lastAudioTime = Date.now();
                
                // 음성이 감지되면 타이머들 리셋
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                }
                if (autoStopTimer) {
                    clearInterval(autoStopTimer);
                }
            }

            try {
                const audioArray = new Uint8Array(audioData.buffer);
                const base64Audio = btoa(String.fromCharCode.apply(null, audioArray));
                
                ws.send(JSON.stringify({
                    type: 'audio',
                    audio: base64Audio
                }));
                
            } catch (error) {
                console.error('오디오 데이터 전송 오류:', error);
            }
        }
    };

    mediaStreamSource.connect(processor);
    processor.connect(audioContext.destination);

    console.log('오디오 처리 시작됨');
    startWebSocket();
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    if (voiceSearchBtn) {
        voiceSearchBtn.classList.add('listening');
    }
    sessionStorage.setItem('voiceRecognitionActive', 'true');

    // 4초 무음 감지 타이머 설정
    silenceTimeout = setTimeout(() => {
        if (!isGeminiResponding && ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'silence' }));
        }
    }, 4000);

    // 1분 무음 감지 타이머 설정
    autoStopTimer = setInterval(() => {
        if (!isGeminiResponding && Date.now() - lastAudioTime > 60000 && ws && ws.readyState === WebSocket.OPEN) {
            stopListening('1분 동안 음성이 감지되지 않아 종료합니다.');
            setTimeout(() => {
                location.reload();
            }, 1500);
        }
    }, 1000);
}

function startWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.hostname}:3001`;
    
    const ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
        console.log('WebSocket connected to:', wsUrl);
        ws.send(JSON.stringify({ type: 'start' }));
    };

    ws.onmessage = async (event) => {
        try {
            const data = JSON.parse(event.data);

            if (data.type === 'interim') {
                console.log('Interim transcript:', data.transcript);
                if (searchInput) {
                    searchInput.value = data.transcript;
                } else {
                    console.log('검색 입력 필드를 찾을 수 없습니다. 음성 인식 결과:', data.transcript);
                }
                
                // 중간 결과가 수신되면 타이머 리셋
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                }
                silenceTimeout = setTimeout(() => {
                    if (!isGeminiResponding && data.transcript) {
                        handleVoiceCommand(data.transcript.toLowerCase());
                    }
                }, 4000);
            } else if (data.type === 'result') {
                console.log('Final transcript:', data.transcript);
                if (searchInput) {
                    searchInput.value = data.transcript;
                } else {
                    console.log('검색 입력 필드를 찾을 수 없습니다. 음성 인식 결과:', data.transcript);
                }
                
                const text = data.transcript.toLowerCase();
                
                // 오디오 데이터가 있으면 직접 재생
                if (data.audio) {
                    console.log('오디오 데이터 수신됨, 길이:', data.audio.length);
                    try {
                        isGeminiResponding = true; // Gemini 응답 시작
                        const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
                        audio.onerror = (e) => {
                            console.error('오디오 재생 오류:', e);
                            isGeminiResponding = false; // 오류 발생 시 응답 종료
                        };
                        await audio.play();
                        console.log('오디오 재생 성공');
                        
                        // 오디오 재생이 완료된 후 4초 타이머 시작
                        audio.onended = () => {
                            console.log('오디오 재생 완료, 4초 타이머 시작');
                            isGeminiResponding = false; // Gemini 응답 종료
                            if (silenceTimeout) {
                                clearTimeout(silenceTimeout);
                            }
                            silenceTimeout = setTimeout(() => {
                                if (!isGeminiResponding) {
                                    stopListening('4초 동안 음성이 감지되지 않아 종료합니다.');
                                }
                            }, 4000);
                        };
                    } catch (error) {
                        console.error('오디오 재생 오류:', error);
                        isGeminiResponding = false; // 오류 발생 시 응답 종료
                    }
                } else {
                    console.log('오디오 데이터가 없습니다.');
                    // 오디오 데이터가 없는 경우에도 4초 타이머 시작
                    if (silenceTimeout) {
                        clearTimeout(silenceTimeout);
                    }
                    silenceTimeout = setTimeout(() => {
                        if (!isGeminiResponding) {
                            stopListening('4초 동안 음성이 감지되지 않아 종료합니다.');
                        }
                    }, 4000);
                }
                
                // 명령어 처리
                handleVoiceCommand(text);
            }
        } catch (error) {
            console.error('WebSocket message processing error:', error);
            isGeminiResponding = false; // 오류 발생 시 응답 종료
        }
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('WebSocket closed');
    };
}

// 음성 명령어 처리 함수
function handleVoiceCommand(text) {
    text = text.toLowerCase();
    console.log('처리할 명령어:', text);

    // AI 응답 중에는 무음 감지 타이머를 일시 중지
    if (silenceTimeout) {
        clearTimeout(silenceTimeout);
    }


    // [음성 명령어로 상세검색 체크박스 체크]
    if (text.includes('보여 줘') || text.includes('체크해 줘') || text.includes('선택해 줘')) {
        if (window.checkFilterByVoice) {
            window.checkFilterByVoice(text);
            // 체크박스 체크 후 필터링 적용
            const selectedFilters = {};
            document.querySelectorAll('#detail-search-form input[type="checkbox"]:checked').forEach(cb => {
                const optionName = cb.name;
                if (!selectedFilters[optionName]) {
                    selectedFilters[optionName] = [];
                }
                selectedFilters[optionName].push(cb.value);
            });
            renderProducts(currentCategory, selectedFilters, currentSort);
        }
    }

    // 음성 인식 종료 명령어
    if (text.includes('음성인식') && (text.includes('꺼') || text.includes('종료') || text.includes('중지'))) {
        if (isListening) {
            isListening = false;
            recognition.stop();
            if (silenceTimer) {
                clearTimeout(silenceTimer);
            }
            console.log('음성 인식 종료됨');
        }
        return;
    }

    // 전체 카테고리 관련 명령어
    if (text.includes('전체') && text.includes('카테고리')) {
        const categoryMenu = document.getElementById('categoryMenu');
        if (categoryMenu) {
            categoryMenu.click();
        } else {
            window.location.href = 'store.html';
        }
    }

    // 장바구니 관련 명령어
    if (text.includes('장바구니')) {
        if (text.includes('확인') || text.includes('보여 줘') || text.includes('열어 줘')) {
            console.log('장바구니 페이지로 이동');
            window.location.href = 'cart.html';
        } else if (text.includes('담아') || text.includes('추가')) {
            const productName = text.replace(/장바구니|담아|추가|해줘|주세요/g, '').trim();
            
            if (productName) {
                // 모든 카테고리의 상품을 검색
                const allProducts = {
                    ...vgaProducts,
                    ...cpuProducts,
                    ...motherboardProducts,
                    ...ramProducts,
                    ...coolerProducts,
                    ...ssdProducts,
                    ...hddProducts,
                    ...powerProducts
                };

                // 상품명으로 검색
                const foundProduct = Object.entries(allProducts).find(([_, product]) => 
                    product.name.toLowerCase().includes(productName.toLowerCase())
                );

                if (foundProduct) {
                    const [productId, product] = foundProduct;
                    // cart.js의 addToCart 함수 호출
                    if (typeof addToCart === 'function') {
                        addToCart(
                            productId,
                            product.name,
                            product.price,
                            product.image,
                            1
                        );
                        const utterance = new SpeechSynthesisUtterance(`${product.name}을(를) 장바구니에 담았습니다.`);
                        utterance.lang = 'ko-KR';
                        speechSynthesis.speak(utterance);
                    }
                } else {
                    const utterance = new SpeechSynthesisUtterance('해당 상품을 찾을 수 없습니다. 정확한 상품명을 말씀해 주세요.');
                    utterance.lang = 'ko-KR';
                    speechSynthesis.speak(utterance);
                }
            }
        }
    }

    // 카테고리 이동 명령어
    if (text.includes('카테고리')) {
        if (text.includes('cpu')) {
            window.location.href = 'store.html?cat=cpu';
        } else if (text.includes('그래픽카드') || text.includes('vga')) {
            window.location.href = 'store.html?cat=vga';
        } else if (text.includes('메인보드')) {
            window.location.href = 'store.html?cat=motherboard';
        } else if (text.includes('램') || text.includes('ram')) {
            window.location.href = 'store.html?cat=ram';
        } else if (text.includes('쿨러')) {
            window.location.href = 'store.html?cat=cooler';
        } else if (text.includes('ssd')) {
            window.location.href = 'store.html?cat=ssd';
        } else if (text.includes('hdd')) {
            window.location.href = 'store.html?cat=hdd';
        } else if (text.includes('파워')) {
            window.location.href = 'store.html?cat=power';
        }
    }

    // 스크롤 관련 명령어
    if (text.includes('스크롤') || text.includes('이동') || text.includes('내려 줘')) {
        if (text.includes('위로')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (text.includes('아래로') || text.includes('내려 줘')) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else if (text.includes('그래픽카드')) {
            const section = document.getElementById('vga-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else if (text.includes('cpu')) {
            const section = document.getElementById('cpu-section');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 상품 검색
    if (text.includes('검색') || text.includes('찾아줘')) {
        const searchQuery = text.replace(/검색|찾아줘/g, '').trim();
        if (searchQuery) {
            window.location.href = `store.html?search=${encodeURIComponent(searchQuery)}`;
        }
    }

    // 이전 페이지로 이동하는 명령어
    if (text.includes('이전') || text.includes('뒤로')) {
        if (text.includes('페이지') || text.includes('가') || text.includes('가줘')) {
            console.log('이전 페이지로 이동');
            window.history.back();
        }
    }
}

function stopListening(message = '음성 인식을 종료합니다.') {
    if (isListening) {
        if (autoStopTimer) {
            clearInterval(autoStopTimer);
            autoStopTimer = null;
        }
        
        if (silenceTimeout) {
            clearTimeout(silenceTimeout);
            silenceTimeout = null;
        }

        if (ws) {
            ws.send(JSON.stringify({ type: 'stop' }));
            ws.close();
        }
        
        if (processor) {
            processor.disconnect();
            mediaStreamSource.disconnect();
            audioContext.close();
        }

        isListening = false;
        const voiceSearchBtn = document.getElementById('voice-search-btn');
        if (voiceSearchBtn) {
            voiceSearchBtn.classList.remove('listening');
        }
        sessionStorage.removeItem('voiceRecognitionActive');
        
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'ko-KR';
        speechSynthesis.speak(utterance);
    }
}

function convertFloat32ToInt16(float32Array) {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
        const s = Math.max(-1, Math.min(1, float32Array[i]));
        int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
    }
    return int16Array;
}

// 페이지를 떠날 때 WebSocket 연결 정리
window.addEventListener('beforeunload', () => {
    if (isListening) {
        if (ws) {
            ws.close();
        }
    }
});

// 페이지 로드 시 음성 인식 초기화
document.addEventListener('DOMContentLoaded', function() {
    initVoiceRecognition();
});

// initVoiceRecognition 함수를 전역 스코프에 노출
window.initVoiceRecognition = initVoiceRecognition;




