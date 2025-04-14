// 전역 변수로 음성 인식 상태 관리
let isListening = false;
let ws = null;
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
                
                // 음성이 감지되면 3초 타이머 리셋
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                }
                // 초기 음성 인식 시작 시에는 3초 타이머를 설정하지 않음
                // 음성 인식 결과가 오고 오디오 재생이 완료된 후에 타이머가 설정됨
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
    isListening = true;
    const voiceSearchBtn = document.getElementById('voice-search-btn');
    if (voiceSearchBtn) {
        voiceSearchBtn.classList.add('listening');
    }
    sessionStorage.setItem('voiceRecognitionActive', 'true');

    // 초기 3초 무음 감지 타이머는 제거
    // 대신 음성 인식 결과가 오고 오디오 재생이 완료된 후에 타이머가 설정됨

    autoStopTimer = setInterval(() => {
        if (Date.now() - lastAudioTime > 60000) {
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
    
    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
        console.log('WebSocket connected to:', wsUrl);
        ws.send(JSON.stringify({ type: 'start' }));
    };

    ws.onmessage = async (event) => {
        try {
            const data = JSON.parse(event.data);

            if (data.type === 'interim') {
                console.log('Interim transcript:', data.transcript);
                // searchInput이 정의되어 있는지 확인
                if (searchInput) {
                    searchInput.value = data.transcript;
                } else {
                    console.log('검색 입력 필드를 찾을 수 없습니다. 음성 인식 결과:', data.transcript);
                }
                
                // 중간 결과가 수신되면 3초 타이머 리셋
                if (silenceTimeout) {
                    clearTimeout(silenceTimeout);
                }
                silenceTimeout = setTimeout(() => {
                    // 3초 동안 새로운 중간 결과가 없으면 음성 인식 종료
                    stopListening('3초 동안 음성이 감지되지 않아 종료합니다.');
                }, 3000);
            } else if (data.type === 'result') {
                console.log('Final transcript:', data.transcript);
                // searchInput이 정의되어 있는지 확인
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
                        const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
                        audio.onerror = (e) => {
                            console.error('오디오 재생 오류:', e);
                        };
                        await audio.play();
                        console.log('오디오 재생 성공');
                        
                        // 오디오 재생이 완료된 후 3초 타이머 시작
                        audio.onended = () => {
                            console.log('오디오 재생 완료, 3초 타이머 시작');
                            if (silenceTimeout) {
                                clearTimeout(silenceTimeout);
                            }
                            silenceTimeout = setTimeout(() => {
                                stopListening('3초 동안 음성이 감지되지 않아 종료합니다.');
                            }, 3000);
                        };
                    } catch (error) {
                        console.error('오디오 재생 오류:', error);
                    }
                } else {
                    console.log('오디오 데이터가 없습니다.');
                    // 오디오 데이터가 없는 경우에도 3초 타이머 시작
                    if (silenceTimeout) {
                        clearTimeout(silenceTimeout);
                    }
                    silenceTimeout = setTimeout(() => {
                        stopListening('3초 동안 음성이 감지되지 않아 종료합니다.');
                    }, 3000);
                }
                
                // 명령어 처리 - 오디오 재생이 완료된 후에 실행됨
                handleVoiceCommand(text, data.audio);
            }
        } catch (error) {
            console.error('WebSocket message processing error:', error);
        }
    };

    ws.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('WebSocket closed');
    };
}

async function handleVoiceCommand(text, audioData) {
    const params = getUrlParams();
    
    // 명령어 처리를 위한 함수들
    const commands = {
        // 장바구니 확인 명령어
        checkCart: () => {
            const cartIcon = document.querySelector('.fa-shopping-cart').closest('a');
            if (cartIcon) {
                cartIcon.click();
            }
        },
        
        // 장바구니 추가 명령어
        addToCart: () => {
            const addToCartBtn = document.getElementById('add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.click();
                console.log('장바구니에 추가됨:', params.name);
            }
        },
        
        // 뒤로 가기 명령어
        goBack: () => {
            window.history.back();
        },
        
        // 종료 명령어
        exit: () => {
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    };
    
    // 명령어 실행 함수 (오디오 재생 후 실행)
    const executeCommand = (command) => {
        if (audioData) {
            try {
                const audio = new Audio(`data:audio/mp3;base64,${audioData}`);
                audio.onerror = (e) => {
                    console.error('오디오 재생 오류:', e);
                };
                audio.play().then(() => {
                    // 오디오 재생이 완료된 후 명령어 실행
                    audio.onended = () => {
                        console.log('오디오 재생 완료, 명령어 실행');
                        command();
                    };
                }).catch(error => {
                    console.error('오디오 재생 오류:', error);
                    // 오류 발생 시에도 명령어 실행
                    command();
                });
            } catch (error) {
                console.error('오디오 재생 오류:', error);
                // 오류 발생 시에도 명령어 실행
                command();
            }
        } else {
            // 오디오 데이터가 없는 경우 바로 명령어 실행
            command();
        }
    };
    
    // 장바구니 확인 명령어
    if (text.includes('장바구니') && (text.includes('확인') || text.includes('보여줘') || text.includes('열어줘'))) {
        executeCommand(commands.checkCart);
    } 
    // 장바구니 추가 명령어
    else if (text.includes('장바구니') || text.includes('담아줘') || text.includes('추가해줘')) {
        executeCommand(commands.addToCart);
    } 
    // 뒤로 가기 명령어
    else if (text.includes('뒤로') || text.includes('이전')) {
        executeCommand(commands.goBack);
    } 
    // 종료 명령어
    else if (text.includes('꺼 줘') || text.includes('종료') || text.includes('그만')) {
        executeCommand(commands.exit);
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