// 페이지 로드 시 기본 활성화 상태 설정
document.addEventListener('DOMContentLoaded', function () {
    // URL 파라미터에서 cat 값 추출
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('cat') || 'cpu'; // 기본값 cpu

    // 해당 카테고리 항목 선택
    const defaultCategory = document.querySelector(`[data-category="${initialCategory}"]`);
    if (defaultCategory) {
        defaultCategory.classList.add('active');
        showSubItems(initialCategory);
        // Initially render products to the page and also print to console
        renderProducts(initialCategory); // Render to page
        printCategoryProducts(initialCategory); // Print to console
    } else {
        console.error('존재하지 않는 카테고리:', initialCategory);
    }

    // Add the change listener for checkboxes on DOMContentLoaded
    const detailSearchForm = document.getElementById('detail-search-form');
    if (detailSearchForm) {
        detailSearchForm.addEventListener('change', function() {
            updateConsoleWithFilters();
        });
    }
});

// 선택 카테고리 상품만 콘솔에 표로 출력하는 함수
let lastSentProductsJSON = '';
function printCategoryProducts(categoryId, filters = {}) {
    if (window.categoryMap && window.categoryMap[categoryId]) {
        let productsObj = window.categoryMap[categoryId];
        let productList = Object.values(productsObj);

        // Apply filters if provided
        if (Object.keys(filters).length > 0) {
            const allFilterValues = Object.values(filters).flat().map(v => v.toLowerCase());

            productList = productList.filter(product => {
                const productInfo = [
                    product.name,
                    ...(product.desc || []) // Ensure desc is an array or default to empty
                ].join(' ').toLowerCase();

                return allFilterValues.every(filterValue =>
                    productInfo.includes(filterValue) || // Check if filter value is in product name or description
                   (product.chipset && product.chipset.toLowerCase().includes(filterValue)) || // Also check chipset for VGA/CPU
                   (product.category && product.category.toLowerCase().includes(filterValue))
                );
            });
        }

        // Update the global variable with the filtered list
        currentDisplayedProducts = productList.map(product => ({
             이름: product.name,
             가격: product.price,
             카테고리: product.category || categoryId // Include category in the object sent to server
        }));
        window.currentDisplayedProducts = currentDisplayedProducts;
        window.currentCategory = categoryId;

        // 중복 전송 방지: 이전에 보낸 값과 다를 때만 전송
        const currentProductsJSON = JSON.stringify(currentDisplayedProducts);
        if (window.sendProductStateToVoiceWS && currentProductsJSON !== lastSentProductsJSON) {
            window.sendProductStateToVoiceWS();
            lastSentProductsJSON = currentProductsJSON;
        }

        console.clear();
        console.log(`Filtered Product List for Category: ${categoryId}`);
        console.table(currentDisplayedProducts);

    } else {
        console.warn('해당 카테고리 상품이 없습니다:', categoryId);
        currentDisplayedProducts = []; // Clear the list if category is not found
        window.currentDisplayedProducts = currentDisplayedProducts;
        window.currentCategory = categoryId;
        // 중복 전송 방지: 이전에 보낸 값과 다를 때만 전송
        const currentProductsJSON = JSON.stringify(currentDisplayedProducts);
        if (window.sendProductStateToVoiceWS && currentProductsJSON !== lastSentProductsJSON) {
            window.sendProductStateToVoiceWS();
            lastSentProductsJSON = currentProductsJSON;
        }
    }
}

function showSubItems(categoryId) {
    const secondBox = document.querySelector('#second_box');
    if (secondBox) secondBox.innerHTML = '';

    // 예시: gridItems (실제 데이터로 채워야 함)
    const gridItems = [];
    for (let i = 0; i < 10; i++) gridItems.push('');

    gridItems.forEach(content => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = content;

        gridItem.addEventListener('click', function () {
            if (this.innerHTML.trim() === '') return;
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                return;
            }
            document.querySelectorAll('.grid-item').forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });

        if (secondBox) secondBox.appendChild(gridItem);
    });

    const thirdBoxContent = getThirdBoxContent(categoryId);
    const thirdBox = document.querySelector('#third_cat_list');
    if (thirdBox) thirdBox.innerHTML = thirdBoxContent;
}

// 모든 카테고리 항목에 클릭 이벤트 추가
document.querySelectorAll('#category-list li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('#category-list li').forEach(category => category.classList.remove('active'));
        this.classList.add('active');

        // URL 업데이트
        const categoryId = this.getAttribute('data-category');
        window.history.pushState({}, '', `?cat=${categoryId}`);

        // 해당 카테고리 정보 출력 (필터 없이 초기 호출)
        printCategoryProducts(categoryId);
        showSubItems(categoryId);
         // 상세 검색 필터 상태 업데이트 및 콘솔 출력 (초기화)
         const detailSearchForm = document.getElementById('detail-search-form');
         if (detailSearchForm) {
             detailSearchForm.reset(); // Reset checkboxes on category change
             // No need to explicitly call updateConsoleWithFilters here,
             // as the printCategoryProducts call above handles initial load.
         }
    });
});

// 상세 검색 내용 생성 함수
function getThirdBoxContent(categoryId) {
    switch (categoryId) {
        case 'cpu': // CPU 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th style="width: 150px;">제조사별</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="intel">
                            <label for="intel">인텔</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="amd">
                            <label for="amd">AMD</label>
                        </div>
                    </td>
                </tr>
                <!-- CPU 시리즈 -->
                <tr>
                    <th>CPU 시리즈</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="series1">
                            <label for="series1">코어울트라 시리즈2</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="series2">
                            <label for="series2">코어 14세대</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="series3">
                            <label for="series3">코어 13세대</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="series4">
                            <label for="series4">제온W</label>
                        </div>
                    </td>
                </tr>
                <!-- CPU 종류 -->
                <tr>
                    <th>CPU 종류</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="type1">
                            <label for="type1">코어 울트라9</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="type2">
                            <label for="type2">라이젠9</label>
                        </div>
                    </td>
                </tr>
                <!-- 코어 수 -->
                <tr>
                    <th>코어 수</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="core24">
                            <label for="core24">24코어</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="core16">
                            <label for "core16">16코어</lablel></td >
                        </div >
                    </td >
                </tr >
                <!-- 스레드 수 -->
                <tr >  
                <!-- 스레드 수 -->
<tr>
    <th>스레드 수</th>
    <td style="display: flex; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="thread32">
            <label for="thread32">32스레드</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="thread16">
            <label for="thread16">16스레드</label>
        </div>
    </td>
</tr>

                <!-- 내장 그래픽 -->
                <tr>
                    <th>내장 그래픽</th>
                    <!-- 가로 정렬을 위해 div 사용 -->
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="graphics1"><label for="graphics1"> 탑재</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="graphics2"><label for="graphics2"> 미탑재</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>`;

        case 'motherboard': // 메인보드 카테고리
        return `
            <table class="vertical-table">
                <tbody>
                    <!-- 제조사별 -->
                    <tr>
                        <th style="width: 150px;">제조사별</th>
                        <td style="display: flex; gap: 10px;">
                            <div class="sub_item">
                                <input type="checkbox" id="gigabyte">
                                <label for="gigabyte">GIGABYTE</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="asus">
                                <label for="asus">ASUS</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="msi">
                                <label for="msi">MSI</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="asrock">
                                <label for="asrock">ASRock</label>
                            </div>
                        </td>
                    </tr>
                    <!-- CPU 소켓 -->
                    <tr>
                        <th>CPU 소켓</th>
                        <td style="display: flex; gap: 10px;">
                            <div class="sub_item">
                                <input type="checkbox" id="amd-am5">
                                <label for="amd-am5">AMD(소켓AM5)</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="amd-am4">
                                <label for="amd-am4">AMD(소켓AM4)</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="intel-1851">
                                <label for="intel-1851">인텔(소켓1851)</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="intel-1700">
                                <label for="intel-1700">인텔(소켓1700)</label>
                            </div>
                        </td>
                    </tr>
                    <!-- 세부 칩셋 -->
                    <tr>
                        <th>세부 칩셋</th>
                        <td style="display: flex; gap: 10px;">
                            <div class="sub_item">
                                <input type="checkbox" id="amd-x870e">
                                <label for="amd-x870e">AMD X870E</label>
                            </div>
                            <div class="sub_item">
                                <input type="checkbox" id="amd-x870">
                                <label for "amd-x870 ">AMD X870</lablel></td >
                            </div >
                        </td >
                    </tr >
    
                                <!-- 메모리 종류 -->
                <tr>
                    <th>메모리 종류</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="ddr5">
                            <label for="ddr5">DDR5</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ddr4">
                            <label for="ddr4">DDR4</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="lpddr5">
                            <label for="lpddr5">LPDDR5</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ddr3">
                            <label for="ddr3">DDR3</label>
                        </div>
                    </td>
                </tr>
                <!-- 메모리 슬롯 -->
                <tr>
                    <th>메모리 슬롯</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="slot-5">
                            <label for="slot-5">5개 이상</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="slot-4">
                            <label for="slot-4">4개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="slot-2">
                            <label for="slot-2">2개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="slot-1">
                            <label for="slot-1">1개</label>
                        </div>
                    </td>
                </tr>
                <!-- M.2 슬롯 수 -->
                <tr>
                    <th>M.2 슬롯 수</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="m2-6">
                            <label for="m2-6">6개 이상</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="m2-5">
                            <label for="m2-5">5개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="m2-4">
                            <label for="m2-4">4개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="m2-3">
                            <label for="m2-3">3개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="m2-2">
                            <label for="m2-2">2개</label>
                        </div>
                    </td>
                </tr>
                <!-- 무선랜 종류 -->
                <tr>
                    <th>무선랜 종류</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="wifi">
                            <label for="wifi">무선랜(Wi-Fi)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="bluetooth">
                            <label for="bluetooth">블루투스</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="key-e">
                            <label for="key-e">M.2 Key-E(모듈별매)</label>
                        </div>
                    </td>
                </tr>
                <!-- 특징 -->
                <tr>
                    <th>특징</th>
                    <td style="display: flex; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="sps">
                            <label for="sps">SPS(DrMOS)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="drmos">
                            <label for="drmos">DrMOS 전원부 방열판</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="m2-hsink">
                            <label for="m2-hsink">M.2 히트싱크</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="io-shield">
                            <label for="io-shield">일체형 IO 실드</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    case 'ram': // RAM 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th style="width: 150px;">제조사별</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="samsung">
                            <label for="samsung">삼성전자</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="essencore">
                            <label for="essencore">ESSENCORE</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="teamgroup">
                            <label for="teamgroup">TeamGroup</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="micron">
                            <label for="micron">마이크론</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="gskill">
                            <label for="gskill">G.SKILL</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="skhynix">
                            <label for="skhynix">SK하이닉스</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="patriot">
                            <label for="patriot">PATRIOT</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="adata">
                            <label for="adata">ADATA</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="corsair">
                            <label for="corsair">CORSAIR</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="geil">
                            <label for="geil">GeIL</label>
                        </div>
                    </td>
                </tr>
                <!-- 사용 장치 -->
                <tr>
                    <th>사용 장치</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="desktop">
                            <label for="desktop">데스크탑용</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="laptop">
                            <label for="laptop">노트북용</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="server">
                            <label for="server">서버용</label>
                        </div>
                    </td>
                </tr>

                <!-- 제품 분류 -->
                <tr>
                    <th>제품 분류</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="ddr5">
                            <label for="ddr5">DDR5</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ddr4">
                            <label for="ddr4">DDR4</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ddr3">
                            <label for="ddr3">DDR3</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ddr2">
                            <label for="ddr2">DDR2</label>
                        </div>
                    </td>
                </tr>

                <!-- 메모리 용량 -->
                <tr>
                    <th>메모리 용량</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="64gb">
                            <label for="64gb">64GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="48gb">
                            <label for="48gb">48GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="32gb">
                            <label for="32gb">32GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="16gb">
                            <label for="16gb">16GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="8gb">
                            <label for="8gb">8GB</label>
                        </div>
                    </td>
                </tr>

                <!-- 램 개수 -->
                <tr>
                    <th>램 개수</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="ram-1">
                            <label for="ram-1">1개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ram-2">
                            <label for="ram-2">2개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ram-4">
                            <label for="ram-4">4개</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="ram-8">
                            <label for="ram-8">8개</label>
                        </div>
                    </td>
                </tr>

                <!-- 동작 클럭(대역폭) -->
                <tr>
                    <th>동작 클럭(대역폭)</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="6400mhz">
                            <label for="6400mhz">6400MHz (PC5-51200)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="6000mhz">
                            <label for="6000mhz">6000MHz (PC5-48000)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="5600mhz">
                            <label for="5600mhz">5600MHz (PC5-44800)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="3600mhz">
                            <label for="3600mhz">3600MHz (PC4-28800)</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="3200mhz">
                            <label for="3200mhz">3200MHz (PC4-25600)</label>
                        </div>
                    </td>
                </tr>

                <!-- 램 타이밍 -->
                <tr>
                    <th>램 타이밍</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="cl6">
                            <label for="cl6">CL6</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="cl7">
                            <label for="cl7">CL7</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="cl9">
                            <label for="cl9">CL9</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="cl10">
                            <label for="cl10">CL10</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="cl11">
                            <label for="cl11">CL11</label>
                        </div>
                    </td>
                </tr>

                <!-- 히트싱크 -->
                <tr>
                    <th>히트싱크</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="heatsink-included">
                            <label for="heatsink-included">방열판</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="heatsink-not-included">
                            <label for="heatsink-not-included">미포함</label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    case 'graphics': // 그래픽카드 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th style="width: 150px;">제조사별</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="gigabyte">
                            <label for="gigabyte">GIGABYTE</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="msi">
                            <label for="msi">MSI</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="emtek">
                            <label for="emtek">이엠텍</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="galaxy">
                            <label for="galaxy">갤럭시</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="asus">
                            <label for="asus">ASUS</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="zotac">
                            <label for="zotac">ZOTAC</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="sapphire">
                            <label for="sapphire">SAPPHIRE</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="palit">
                            <label for="palit">PALIT</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="manli">
                            <label for="manli">MANLI</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="colorful">
                            <label for="colorful">COLORFUL</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>NVIDIA 칩셋</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="rtx5090">
                            <label for="rtx5090">RTX 5090</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rtx5080">
                            <label for="rtx5080">RTX 5080</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rtx5070ti">
                            <label for="rtx5070ti">RTX 5070 Ti</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rtx5070">
                            <label for="rtx5070">RTX 5070</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rtx4060ti">
                            <label for="rtx4060ti">RTX 4060 Ti</label>
                        </div>
                    </td>
                </tr>


                <!-- AMD 칩셋 -->
                <tr>
                    <th>AMD 칩셋</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="rx9070xt">
                            <label for="rx9070xt">RX 9070 XT</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rx9070">
                            <label for="rx9070">RX 9070</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rx7800xt">
                            <label for="rx7800xt">RX 7800 XT</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rx7700xt">
                            <label for="rx7700xt">RX 7700 XT</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="rx7600">
                            <label for="rx7600">RX 7600</label>
                        </div>
                    </td>
                </tr>

                <!-- 인텔 칩셋 -->
                <tr>
                    <th>인텔 칩셋</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="arc-b580">
                            <label for="arc-b580">ARC B580</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="arc-b570">
                            <label for="arc-b570">ARC B570</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="arc-a770">
                            <label for="arc-a770">ARC A770</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="arc-a750">
                            <label for="arc-a750">ARC A750</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="arc-a380">
                            <label for="arc-a380">ARC A380</label>
                        </div>
                    </td>
                </tr>

                                <!-- 인터페이스 -->
                                <tr>
                                    <th>인터페이스</th>
                                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        <div class="sub_item">
                                            <input type="checkbox" id="pcie5">
                                            <label for="pcie5">PCIe5.0</label>
                                        </div>
                                        <div class="sub_item">
                                            <input type="checkbox" id="pcie5x16">
                                            <label for="pcie5x16">PCIe5.0x16</label>
                                        </div>
                                        <div class="sub_item">
                                            <input type="checkbox" id="pcie4x16">
                                            <label for="pcie4x16">PCIe4.0x16</label>
                                        </div>
                                        <div class="sub_item">
                                            <input type="checkbox" id="pcie4x8">
                                            <label for="pcie4x8">PCIe4.0x16(at x8)</label>
                                        </div>
                                        <div class="sub_item">
                                            <input type="checkbox" id="pcie4x4">
                                            <label for="pcie4x4">PCIe4.0x16(at x4)</label>
                                        </div>
                                    </td>
                                </tr>

                <!-- 메모리 용량 -->
                <tr>
                    <th>메모리 용량</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="24gb">
                            <label for="24gb">24GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="16gb">
                            <label for="16gb">16GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="12gb">
                            <label for="12gb">12GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="8gb">
                            <label for="8gb">8GB</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="6gb">
                            <label for="6gb">6GB</label>
                        </div>
                    </td>
                </tr>

                                <!-- 출력 단자 -->
                        <tr>
                            <th>출력 단자</th>
                            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <div class="sub_item">
                                    <input type="checkbox" id="hdmi2.1">
                                    <label for="hdmi2.1">HDMI2.1</label>
                                </div>
                                <div class="sub_item">
                                    <input type="checkbox" id="hdmi2.0">
                                    <label for="hdmi2.0">HDMI2.0</label>
                                </div>
                                <div class="sub_item">
                                    <input type="checkbox" id="hdmi">
                                    <label for="hdmi">HDMI</label>
                                </div>
                                <div class="sub_item">
                                    <input type="checkbox" id="dp2.1">
                                    <label for="dp2.1">DP2.1</label>
                                </div>
                                <div class="sub_item">
                                    <input type="checkbox" id="dp2.0">
                                    <label for="dp2.0">DP2.0</label>
                                </div>
                            </td>
                        </tr>

                <!-- 권장 파워 -->
                <tr>
                <th>권장 파워</th>
                <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <div class="sub_item">
                        <input type="checkbox" id="power450w">
                        <label for="power450w">450W 이상</label>
                    </div>
                    <div class="sub_item">
                        <input type="checkbox" id="power550w">
                        <label for="power550w">550W 이상</label>
                    </div>
                    <div class="sub_item">
                        <input type="checkbox" id="power650w">
                        <label for="power650w">650W 이상</label>
                    </div>
                    <div class="sub_item">
                        <input type="checkbox" id="power750w">
                        <label for="power750w">750W 이상</label>
                    </div>
                    <div class="sub_item">
                        <input type="checkbox" id="power850w">
                        <label for="power850w">850W 이상</label>
                    </div>
                </td>
            </tr>

                                <!-- 팬 개수 -->
                                <tr>
                    <th>팬 개수</th>
                    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div class="sub_item">
                            <input type="checkbox" id="fan-4">
                            <label for="fan-4">4팬</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="fan-3">
                            <label for="fan-3">3팬</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="fan-2">
                            <label for="fan-2">2팬</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="fan-1">
                            <label for="fan-1">1팬</label>
                        </div>
                        <div class="sub_item">
                            <input type="checkbox" id="blower-fan">
                            <label for="blower-fan">블로워팬</label>
                        </div>
                    </td>
                </tr>

                <!-- 가로(길이) -->
                <tr>
    <th>가로(길이)</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="length-360">
            <label for="length-360">360~</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="length-350">
            <label for="length-350">350~359</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="length-340">
            <label for="length-340">340~349</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="length-330">
            <label for="length-330">330~339</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="length-320">
            <label for="length-320">320~329</label>
        </div>
    </td>
</tr>

            </tbody >
        </table >
    `;

    case 'ssd': // SSD 카테고리
    return `
        <table class="vertical-table">
    <tbody>
        <!-- 제조사별 -->
        <tr>
            <th style="width: 150px;">제조사별</th>
            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="sub_item">
                    <input type="checkbox" id="samsung">
                    <label for="samsung">삼성전자</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="skhynix">
                    <label for="skhynix">SK하이닉스</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="wd">
                    <label for="wd">Western Digital</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="micron">
                    <label for="micron">마이크론</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="solidigm">
                    <label for="solidigm">솔리다임</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="essencore">
                    <label for="essencore">ESSENCORE</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="kioxia">
                    <label for="kioxia">키오시아</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="corsair">
                    <label for="corsair">CORSAIR</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="seagate">
                    <label for="seagate">Seagate</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="adata">
                    <label for="adata">ADATA</label>
                </div>
            </td>
        </tr>

        <!-- 폼팩터 -->
        <tr>
            <th>폼팩터</th>
            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="sub_item">
                    <input type="checkbox" id="m2-2280">
                    <label for="m2-2280">M.2 (2280)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="form-2.5">
                    <label for="form-2.5">6.4cm(2.5형)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="m2-2230">
                    <label for="m2-2230">M.2 (2230)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="m2-2242">
                    <label for="m2-2242">M.2 (2242)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="msata">
                    <label for="msata">Mini SATA(mSATA)</label>
                </div>
            </td>
        </tr>

        <!-- 인터페이스 -->
        <tr>
            <th>인터페이스</th>
            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="sub_item">
                    <input type="checkbox" id="pcie5x4">
                    <label for="pcie5x4">PCIe5.0x4 (128GT/s)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="pcie4x4">
                    <label for="pcie4x4">PCIe4.0x4 (64GT/s)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="pcie3x4">
                    <label for="pcie3x4">PCIe3.0x4 (32GT/s)</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="sata3">
                    <label for="sata3">SATA3 (6Gb/s)</label>
                </div>
            </td>
        </tr>
                <!-- 용량 -->
                <tr>
    <th>용량</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="capacity-4tb">
            <label for="capacity-4tb">4TB~3TB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="capacity-2tb">
            <label for="capacity-2tb">2TB~1.1TB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="capacity-1tb">
            <label for="capacity-1tb">1TB~600GB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="capacity-525gb">
            <label for="capacity-525gb">525GB~270GB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="capacity-256gb">
            <label for="capacity-256gb">256GB~130GB</label>
        </div>
    </td>
</tr>

                                <!-- 메모리 타입 -->
                <tr>
    <th>메모리 타입</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="tlc-toggle">
            <label for="tlc-toggle">TLC(토글)</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="tlc-other">
            <label for="tlc-other">TLC(기타)</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="qlc">
            <label for="qlc">QLC</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="mlc-other">
            <label for="mlc-other">MLC(기타)</label>
        </div>
    </td>
</tr>

                <!-- RAM 탑재 -->
                <tr>
    <th>RAM 탑재</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="dram">
            <label for="dram">DRAM 탑재</label>
        </div>
    </td>
</tr>

            </tbody>
        </table>
    `;

    case 'hdd': // HDD 카테고리
    return `
        <table class="vertical-table">
    <tbody>
        <!-- 제조사별 -->
        <tr>
            <th style="width: 150px;">제조사별</th>
            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="sub_item">
                    <input type="checkbox" id="seagate">
                    <label for="seagate">Seagate</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="wd">
                    <label for="wd">Western Digital</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="toshiba">
                    <label for="toshiba">도시바</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="synology">
                    <label for="synology">Synology</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="sebap">
                    <label for="sebap">Sebap</label>
                </div>
            </td>
        </tr>

        <!-- 디스크 용량 -->
        <tr>
            <th>디스크 용량</th>
            <td style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="sub_item">
                    <input type="checkbox" id="24tb">
                    <label for="24tb">24TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="20tb">
                    <label for="20tb">20TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="18tb">
                    <label for="18tb">18TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="16tb">
                    <label for="16tb">16TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="14tb">
                    <label for="14tb">14TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="12tb">
                    <label for="12tb">12TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="8tb">
                    <label for="8tb">8TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="4tb">
                    <label for="4tb">4TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="3tb">
                    <label for="3tb">3TB</label>
                </div>
                <div class="sub_item">
                    <input type="checkbox" id="2tb">
                    <label for="2tb">2TB</label>
                </div>
            </td>
        <tr>
    <th>회전수</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="rpm-15000">
            <label for="rpm-15000">15,000RPM</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="rpm-10000">
            <label for="rpm-10000">10,000RPM</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="rpm-7200">
            <label for="rpm-7200">7,200RPM</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="rpm-5900">
            <label for="rpm-5900">5,900RPM</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="rpm-5640">
            <label for="rpm-5640">5,640RPM</label>
        </div>
    </td>
</tr>

                <!-- 버퍼 용량 -->
                <tr>
    <th>버퍼 용량</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="buffer-512mb">
            <label for="buffer-512mb">메모리 512MB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="buffer-256mb">
            <label for="buffer-256mb">메모리 256MB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="buffer-128mb">
            <label for="buffer-128mb">메모리 128MB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="buffer-64mb">
            <label for="buffer-64mb">메모리 64MB</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="buffer-32mb">
            <label for="buffer-32mb">메모리 32MB</label>
        </div>
    </td>
</tr>

                <!-- 기록방식 -->
                <tr>
    <th>기록방식</th>
    <td style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div class="sub_item">
            <input type="checkbox" id="cmr">
            <label for="cmr">CMR(PMR)</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="smr">
            <label for="smr">SMR(PMR)</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="verify">
            <label for="verify">확인요망(PMR)</label>
        </div>
        <div class="sub_item">
            <input type="checkbox" id="tgmr">
            <label for="tgmr">TGMR</label>
        </div>
    </td>
</tr>

            </tbody >
        </table >
    `;
    }
}

// [음성 명령어로 상세검색 체크박스 체크 함수]
function checkFilterByVoice(text) {
    const normalizedText = text.replace(/\s/g, '').toLowerCase();
    let checkboxChecked = false;
    
    document.querySelectorAll('#detail-search-form input[type="checkbox"]').forEach(cb => {
        const label = cb.nextElementSibling;
        if (!label) return;
        const labelText = label.textContent.replace(/\s/g, '').toLowerCase();
        if (normalizedText.includes(labelText)) {
            cb.checked = true;
            checkboxChecked = true;
            // 체크박스 변경 이벤트 발생
            const event = new Event('change', { bubbles: true });
            cb.dispatchEvent(event);
        }
    });

    // 체크박스가 체크되었다면 필터링 적용
    if (checkboxChecked) {
        updateConsoleWithFilters();
    }
}
window.checkFilterByVoice = checkFilterByVoice;

// 전역 변수
let ws = null;

// WebSocket 연결 설정
function initProductWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.hostname}:3001`;
    
    ws = new WebSocket(wsUrl);
    
    ws.onopen = () => {
        console.log('Product WebSocket connected');
        // 초기 제품 상태 전송
        sendProductStateToServer();
    };

    ws.onerror = (error) => {
        console.error('Product WebSocket error:', error);
    };

    ws.onclose = () => {
        console.log('Product WebSocket closed');
    };
}

// 제품 상태를 서버로 전송하는 함수
function sendProductStateToServer() {
    if (ws && ws.readyState === WebSocket.OPEN) {
        const productState = {
            type: 'productState',
            currentProducts: currentDisplayedProducts,
            selectedFilters: getSelectedFilters(),
            currentCategory: currentCategory
        };
        ws.send(JSON.stringify(productState));
    }
}

// 선택된 필터 정보 가져오기 - 체크박스 ID를 기반으로 필터 정보 수집
function getSelectedFilters() {
    const filters = {};
    document.querySelectorAll('#detail-search-form input[type="checkbox"]:checked').forEach(cb => {
        const checkboxId = cb.id;
        const filterValue = cb.nextElementSibling ? cb.nextElementSibling.textContent.trim() : ''; // Get filter value from label text

        // Map checkbox ID to filter category name
        let optionName = '기타'; // Default category name if not mapped

        // 예시 매핑: 실제 상세 검색 체크박스 ID와 getThirdBoxContent 함수의 th 텍스트를 맞춰야 합니다.
        // CPU 카테고리 필터 매핑
        if (['intel', 'amd'].includes(checkboxId)) optionName = '제조사별';
        else if (['series1', 'series2', 'series3', 'series4'].includes(checkboxId)) optionName = 'CPU 시리즈';
        else if (['type1', 'type2'].includes(checkboxId)) optionName = 'CPU 종류';
        else if (['core24', 'core16'].includes(checkboxId)) optionName = '코어 수';
        else if (['thread32', 'thread16'].includes(checkboxId)) optionName = '스레드 수';
        else if (['graphics1', 'graphics2'].includes(checkboxId)) optionName = '내장 그래픽';
        // 메인보드 카테고리 필터 매핑 (추가 필요)
        // RAM 카테고리 필터 매핑 (추가 필요)
        // 그래픽카드 카테고리 필터 매핑 (추가 필요)
        // SSD 카테고리 필터 매핑 (추가 필요)
        // HDD 카테고리 필터 매핑 (추가 필요)


        if (!filters[optionName]) {
            filters[optionName] = [];
        }
        filters[optionName].push(filterValue);
    });
    
    return filters;
}

// renderProducts 함수 수정
function renderProducts(category, filters = {}, sortType = 'popularity') {
    // ... existing renderProducts code ...
    
    // 현재 표시된 제품 목록 저장 및 서버로 전송
    currentDisplayedProducts = productList;
    window.currentDisplayedProducts = currentDisplayedProducts;
    window.currentCategory = category;
    sendProductStateToServer();
    if (window.sendProductStateToVoiceWS) window.sendProductStateToVoiceWS();
    
    // ... rest of renderProducts code ...
}

// 페이지 로드 시 WebSocket 초기화
document.addEventListener('DOMContentLoaded', function() {
    initProductWebSocket();
    
    // 체크박스 변경 이벤트 리스너 추가
    const detailSearchForm = document.getElementById('detail-search-form');
    if (detailSearchForm) {
        detailSearchForm.addEventListener('change', function() {
            sendProductStateToServer();
        });
    }
});

// Add event listener for checkbox changes in detailed search form
document.addEventListener('change', function(event) {
    // Check if the change event occurred on a checkbox within the detail search form
    if (event.target.matches('#detail-search-form input[type="checkbox"]')) {
        // Prevent form submission
        event.preventDefault();
        console.log('체크박스 변경 감지, 필터 업데이트 시도...'); // Debugging line
        updateConsoleWithFilters();
    }
});

// Add submit event listener to prevent form submission if user presses Enter (though less likely with checkboxes)
const detailSearchForm = document.getElementById('detail-search-form');
if (detailSearchForm) {
    detailSearchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('폼 제출 기본 동작 차단됨'); // Debugging line
        // No need to call updateConsoleWithFilters here, as the change event handles it
    });
}

// Function to update the console with filtered products and send to server
function updateConsoleWithFilters() {
    const activeCategoryItem = document.querySelector('#category-list li.active');
    if (activeCategoryItem) {
        const categoryId = activeCategoryItem.getAttribute('data-category');
        const currentFilters = getSelectedFilters();
        window.getSelectedFilters = getSelectedFilters;
        window.currentCategory = categoryId;
        console.log('카테고리:', categoryId, '필터:', currentFilters); // Debugging line
        
        // printCategoryProducts now updates currentDisplayedProducts internally
        printCategoryProducts(categoryId, currentFilters);
        
        // Send the updated product state to the server
        sendProductStateToServer();
        if (window.sendProductStateToVoiceWS) window.sendProductStateToVoiceWS();

    } else {
        console.warn('활성화된 카테고리가 선택되지 않았습니다.'); // Debugging line
    }
}

// Restore the initial page load logic to render products and show console table
document.addEventListener('DOMContentLoaded', function () {
    // URL 파라미터에서 cat 값 추출
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('cat') || 'cpu'; // 기본값 cpu

    // 해당 카테고리 항목 선택
    const defaultCategory = document.querySelector(`[data-category="${initialCategory}"]`);
    if (defaultCategory) {
        defaultCategory.classList.add('active');
        showSubItems(initialCategory);
        
        // Initially render products to the page
        renderProducts(initialCategory); 
        
        // Print initial products to console and update currentDisplayedProducts
        printCategoryProducts(initialCategory); 
        
        // Send initial product state to the server
        sendProductStateToServer();

    } else {
        console.error('존재하지 않는 카테고리:', initialCategory);
        currentDisplayedProducts = []; // Clear on page load if category is invalid
        sendProductStateToServer(); // Send empty state
    }

    // Add the change listener for checkboxes on DOMContentLoaded
    const detailSearchForm = document.getElementById('detail-search-form');
    if (detailSearchForm) {
        detailSearchForm.addEventListener('change', function() {
            updateConsoleWithFilters(); // This now handles sending to server
        });
    }
});

window.getSelectedFilters = getSelectedFilters;
window.currentCategory = typeof currentCategory !== 'undefined' ? currentCategory : undefined;
window.currentDisplayedProducts = typeof currentDisplayedProducts !== 'undefined' ? currentDisplayedProducts : [];

