function showSubItems(categoryId) {
    // 첫 번째 박스에서 선택된 서브 목록 가져오기
    const subItems = document.querySelector(`#${categoryId}`).querySelectorAll('.sub_item');

    // 두 번째 박스의 리스트 초기화
    const secondBox = document.querySelector('#second_box');
    secondBox.innerHTML = ''; // 기존 내용을 초기화

    // 총 10칸으로 나누기 위한 빈 배열 생성
    const totalCells = 10; // 가로 5칸 x 세로 2칸 = 총 10칸
    const gridItems = Array.from(subItems).map(item => item.innerHTML); // 서브 아이템 내용 가져오기

    // 빈칸을 채우기 위해 남은 칸 수 계산
    const emptyCellsCount = totalCells - gridItems.length;

    for (let i = 0; i < emptyCellsCount; i++) {
        gridItems.push(''); // 빈칸 추가
    }

    // 그리드 레이아웃으로 아이템 배치
    gridItems.forEach(content => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = content; // 내용 추가 (빈칸은 비워둠)

        secondBox.appendChild(gridItem);
    });

    // 세 번째 박스 내용 업데이트
    const thirdBoxContent = getThirdBoxContent(categoryId);

    const thirdBox = document.querySelector('#third_cat_list');
    thirdBox.innerHTML = thirdBoxContent;
}

// 세 번째 박스 내용 생성 함수
// 세 번째 박스 내용 생성 함수
function getThirdBoxContent(categoryId) {
    switch (categoryId) {
        case 'cpu': // CPU 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="intel"><label for="intel"> 인텔</label><br>
                        <input type="checkbox" id="amd"><label for="amd"> AMD</label>
                    </td>
                </tr>
                <!-- CPU 시리즈 -->
                <tr>
                    <th>CPU 시리즈</th>
                    <td>
                        <input type="checkbox" id="series1"><label for="series1"> 코어울트라 시리즈2</label><br>
                        <input type="checkbox" id="series2"><label for="series2"> 코어 14세대</label><br>
                        <input type="checkbox" id="series3"><label for="series3"> 코어 13세대</label><br>
                        <input type="checkbox" id="series4"><label for="series4"> 제온W</label>
                    </td>
                </tr>
                <!-- CPU 종류 -->
                <tr>
                    <th>CPU 종류</th>
                    <td>
                        <input type="checkbox" id="type1"><label for="type1"> 코어 울트라9</label><br>
                        <input type="checkbox" id="type2"><label for="type2"> 라이젠9</label>
                    </td>
                </tr>
                <!-- 코어 수 -->
                <tr>
                    <th>코어 수</th>
                    <td>
                        <input type="checkbox" id="core24"><label for="core24"> 24코어</label><br>
                        <input type="checkbox" id="core16"><label for="core16"> 16코어</label>
                    </td>
                </tr>
                <!-- 스레드 수 -->
                <tr>
                    <th>스레드 수</th>
                    <td>
                        <input type="checkbox" id="thread32"><label for="thread32"> 32스레드</label><br>
                        <input type="checkbox" id="thread16"><label for "thread16 "> 16스레드 </lablel></td >
                </tr >
                                <!-- 내장 그래픽 -->
                <tr>
                    <th>내장 그래픽</th>
                    <td>
                        <input type="checkbox" id="graphics1"><label for="graphics1"> 탑재</label><br>
                        <input type="checkbox" id="graphics2"><label for="graphics2"> 미탑재</label>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
    case 'motherboard': // 메인보드 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="gigabyte"><label for="gigabyte"> GIGABYTE</label><br>
                        <input type="checkbox" id="asus"><label for="asus"> ASUS</label><br>
                        <input type="checkbox" id="msi"><label for="msi"> MSI</label><br>
                        <input type="checkbox" id="asrock"><label for="asrock"> ASRock</label><br>
                        <input type="checkbox" id="msi2"><label for="msi2"> MSI</label>
                    </td>
                </tr>
                <!-- CPU 소켓 -->
                <tr>
                    <th>CPU 소켓</th>
                    <td>
                        <input type="checkbox" id="amd-am5"><label for="amd-am5"> AMD(소켓AM5)</label><br>
                        <input type="checkbox" id="amd-am4"><label for="amd-am4"> AMD(소켓AM4)</label><br>
                        <input type="checkbox" id="intel-1851"><label for="intel-1851"> 인텔(소켓1851)</label><br>
                        <input type="checkbox" id="intel-1700"><label for="intel-1700"> 인텔(소켓1700)</label>
                    </td>
                </tr>
                <!-- 세부 칩셋 -->
                <tr>
                    <th>세부 칩셋</th>
                    <td>
                        <input type="checkbox" id="amd-x870e"><label for="amd-x870e"> AMD X870E</label><br>
                        <input type="checkbox" id="amd-x870"><label for="amd-x870"> AMD X870</label><br>
                        <input type="checkbox" id="intel-z790"><label for="intel-z790"> 인텔 Z790</label><br>
                        <input type="checkbox" id="intel-b760"><label for "intel-b760 "> 인텔 B760 </lablel></td >
                </tr >
                                <!-- 메모리 종류 -->
                <tr>
                    <th>메모리 종류</th>
                    <td>
                        <input type="checkbox" id="ddr5"><label for="ddr5"> DDR5</label><br>
                        <input type="checkbox" id="ddr4"><label for="ddr4"> DDR4</label><br>
                        <input type="checkbox" id="lpddr5"><label for="lpddr5"> LPDDR5</label><br>
                        <input type="checkbox" id="ddr3"><label for="ddr3"> DDR3</label>
                    </td>
                </tr>
                <!-- 메모리 슬롯 -->
                <tr>
                    <th>메모리 슬롯</th>
                    <td>
                        <input type="checkbox" id="slot-5"><label for="slot-5"> 5개 이상</label><br>
                        <input type="checkbox" id="slot-4"><label for="slot-4"> 4개</label><br>
                        <input type="checkbox" id="slot-2"><label for="slot-2"> 2개</label><br>
                        <input type="checkbox" id="slot-1"><label for="slot-1"> 1개</label>
                    </td>
                </tr>
                <!-- M.2 슬롯 수 -->
                <tr>
                    <th>M.2 슬롯 수</th>
                    <td>
                        <input type="checkbox" id="m2-6"><label for="m2-6"> 6개 이상</label><br>
                        <input type="checkbox" id="m2-5"><label for="m2-5"> 5개</label><br>
                        <input type="checkbox" id="m2-4"><label for="m2-4"> 4개</label><br>
                        <input type="checkbox" id="m2-3"><label for="m2-3"> 3개</label><br>
                        <input type="checkbox" id="m2-2"><label for "m2-2 "> 2개 </lablel></td >
                </tr >
                                <!-- 무선랜 종류 -->
                <tr>
                    <th>무선랜 종류</th>
                    <td>
                        <input type="checkbox" id="wifi"><label for="wifi"> 무선랜(Wi-Fi)</label><br>
                        <input type="checkbox" id="bluetooth"><label for="bluetooth"> 블루투스</label><br>
                        <input type="checkbox" id="key-e"><label for="key-e"> M.2 Key-E(모듈별매)</label>
                    </td>
                </tr>
                <!-- 특징 -->
                <tr>
                    <th>특징</th>
                    <td>
                        <input type="checkbox" id="sps"><label for="sps"> SPS(DrMOS)</label><br>
                        <input type="checkbox" id="drmos"><label for="drmos"> DrMOS 전원부 방열판</label><br>
                        <input type="checkbox" id="m2-hsink"><label for="m2-hsink"> M.2 히트싱크</label><br>
                        <input type="checkbox" id="io-shield"><label for="io-shield"> 일체형 IO 실드</label>
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
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="samsung"><label for="samsung"> 삼성전자</label><br>
                        <input type="checkbox" id="essencore"><label for="essencore"> ESSENCORE</label><br>
                        <input type="checkbox" id="teamgroup"><label for="teamgroup"> TeamGroup</label><br>
                        <input type="checkbox" id="micron"><label for="micron"> 마이크론</label><br>
                        <input type="checkbox" id="gskill"><label for="gskill"> G.SKILL</label><br>
                        <input type="checkbox" id="skhynix"><label for="skhynix"> SK하이닉스</label><br>
                        <input type="checkbox" id="patriot"><label for="patriot"> PATRIOT</label><br>
                        <input type="checkbox" id="adata"><label for="adata"> ADATA</label><br>
                        <input type="checkbox" id="corsair"><label for="corsair"> CORSAIR</label><br>
                        <input type="checkbox" id="geil"><label for="geil"> GeIL</label>
                    </td>
                </tr>
                <!-- 사용 장치 -->
                <tr>
                    <th>사용 장치</th>
                    <td>
                        <input type="checkbox" id="desktop"><label for="desktop"> 데스크탑용</label><br>
                        <input type="checkbox" id="laptop"><label for="laptop"> 노트북용</label><br>
                        <input type="checkbox" id="server"><label for="server"> 서버용</label>
                    </td>
                </tr>
                <!-- 제품 분류 -->
                <tr>
                    <th>제품 분류</th>
                    <td>
                        <input type="checkbox" id="ddr5"><label for="ddr5"> DDR5</label><br>
                        <input type="checkbox" id="ddr4"><label for "ddr4 "> DDR4 </lablel ><br >
                        <input type="checkbox" id="ddr3"><label for="ddr3"> DDR3</label><br>
                        <input type="checkbox" id="ddr2"><label for="ddr2"> DDR2</label>
                    </td>
                </tr>
                <!-- 메모리 용량 -->
                <tr>
                    <th>메모리 용량</th>
                    <td>
                        <input type="checkbox" id="64gb"><label for="64gb"> 64GB</label><br>
                        <input type="checkbox" id="48gb"><label for="48gb"> 48GB</label><br>
                        <input type="checkbox" id="32gb"><label for="32gb"> 32GB</label><br>
                        <input type="checkbox" id="16gb"><label for="16gb"> 16GB</label><br>
                        <input type="checkbox" id="8gb"><label for="8gb"> 8GB</label>
                    </td>
                </tr>
                <!-- 램 개수 -->
                <tr>
                    <th>램 개수</th>
                    <td>
                        <input type="checkbox" id="ram-1"><label for="ram-1"> 1개</label><br>
                        <input type="checkbox" id="ram-2"><label for="ram-2"> 2개</label><br>
                        <input type="checkbox" id="ram-4"><label for="ram-4"> 4개</label><br>
                        <input type="checkbox" id="ram-8"><label for "ram-8 "> 8개 </lablel ></td >
                </tr >
                                <!-- 동작 클럭 -->
                <tr>
                    <th>동작 클럭(대역폭)</th>
                    <td>
                        <input type="checkbox" id="6400mhz"><label for="6400mhz"> 6400MHz (PC5-51200)</label><br>
                        <input type="checkbox" id="6000mhz"><label for="6000mhz"> 6000MHz (PC5-48000)</label><br>
                        <input type="checkbox" id="5600mhz"><label for="5600mhz"> 5600MHz (PC5-44800)</label><br>
                        <input type="checkbox" id="3600mhz"><label for="3600mhz"> 3600MHz (PC4-28800)</label><br>
                        <input type="checkbox" id="3200mhz"><label for="3200mhz"> 3200MHz (PC4-25600)</label>
                    </td>
                </tr>
                <!-- 램 타이밍 -->
                <tr>
                    <th>램 타이밍</th>
                    <td>
                        <input type="checkbox" id="cl6"><label for="cl6"> CL6</label><br>
                        <input type="checkbox" id="cl7"><label for="cl7"> CL7</label><br>
                        <input type="checkbox" id="cl9"><label for="cl9"> CL9</label><br>
                        <input type="checkbox" id="cl10"><label for "cl10 "> CL10 </lablel ><br >
                        <input type "checkbox "id ="cl11 "> CL11<br/>
                    </td >
                </tr >
                <!-- 히트싱크 -->
                <tr>
                    <th>히트싱크</th>
                    <td>
                        <input type="checkbox" id="heatsink-included"><label for="heatsink-included"> 방열판</label><br>
                        <input type="checkbox" id="heatsink-not-included"><label for="heatsink-not-included"> 미포함</label>
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
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="gigabyte"><label for="gigabyte"> GIGABYTE</label><br>
                        <input type="checkbox" id="msi"><label for="msi"> MSI</label><br>
                        <input type="checkbox" id="emtek"><label for="emtek"> 이엠텍</label><br>
                        <input type="checkbox" id="galaxy"><label for="galaxy"> 갤럭시</label><br>
                        <input type="checkbox" id="asus"><label for="asus"> ASUS</label><br>
                        <input type="checkbox" id="zotac"><label for="zotac"> ZOTAC</label><br>
                        <input type="checkbox" id="sapphire"><label for="sapphire"> SAPPHIRE</label><br>
                        <input type="checkbox" id="palit"><label for="palit"> PALIT</label><br>
                        <input type="checkbox" id="manli"><label for="manli"> MANLI</label><br>
                        <input type="checkbox" id="colorful"><label for="colorful"> COLORFUL</label>
                    </td>
                </tr>
                <!-- NVIDIA 칩셋 -->
                <tr>
                    <th>NVIDIA 칩셋</th>
                    <td>
                        <input type="checkbox" id="rtx5090"><label for="rtx5090"> RTX 5090</label><br>
                        <input type="checkbox" id="rtx5080"><label for "rtx5080 "> RTX 5080 </lablel ><br >
                        <input type "checkbox "id ="rtx5070ti "> RTX 5070 Ti<br/>
                        <input type "checkbox "id ="rtx5070 "> RTX 5070<br/>
                        <input type="checkbox" id="rtx4060ti"><label for="rtx4060ti"> RTX 4060 Ti</label>
                    </td>
                </tr>
                <!-- AMD 칩셋 -->
                <tr>
                    <th>AMD 칩셋</th>
                    <td>
                        <input type="checkbox" id="rx9070xt"><label for="rx9070xt"> RX 9070 XT</label><br>
                        <input type="checkbox" id="rx9070"><label for="rx9070"> RX 9070</label><br>
                        <input type="checkbox" id="rx7800xt"><label for="rx7800xt"> RX 7800 XT</label><br>
                        <input type="checkbox" id="rx7700xt"><label for="rx7700xt"> RX 7700 XT</label><br>
                        <input type="checkbox" id="rx7600"><label for="rx7600"> RX 7600</label>
                    </td>
                </tr>
                <!-- 인텔 칩셋 -->
                <tr>
                    <th>인텔 칩셋</th>
                    <td>
                        <input type="checkbox" id="arc-b580"><label for="arc-b580"> ARC B580</label><br>
                        <input type="checkbox" id="arc-b570"><label for="arc-b570"> ARC B570</label><br>
                        <input type="checkbox" id="arc-a770"><label for "arc-a770 "> ARC A770 </lablel ><br >
                        <input type "checkbox "id ="arc-a750 "> ARC A750<br/>
                        <input type "checkbox "id ="arc-a380 "> ARC A380<br/>
                    </td >
                </tr >
                                <!-- 인터페이스 -->
                <tr>
                    <th>인터페이스</th>
                    <td>
                        <input type="checkbox" id="pcie5"><label for="pcie5"> PCIe5.0</label><br>
                        <input type="checkbox" id="pcie5x16"><label for="pcie5x16"> PCIe5.0x16</label><br>
                        <input type="checkbox" id="pcie4x16"><label for="pcie4x16"> PCIe4.0x16</label><br>
                        <input type="checkbox" id="pcie4x8"><label for="pcie4x8"> PCIe4.0x16(at x8)</label><br>
                        <input type="checkbox" id="pcie4x4"><label for="pcie4x4"> PCIe4.0x16(at x4)</label>
                    </td>
                </tr>
                <!-- 메모리 용량 -->
                <tr>
                    <th>메모리 용량</th>
                    <td>
                        <input type="checkbox" id="24gb"><label for="24gb"> 24GB</label><br>
                        <input type="checkbox" id="16gb"><label for="16gb"> 16GB</label><br>
                        <input type="checkbox" id="12gb"><label for "12gb "> 12GB </lablel ><br >
                        <input type "checkbox "id ="8gb "> 8GB<br/>
                        <input type "checkbox "id ="6gb "> 6GB<br/>
                    </td >
                </tr >
                                <!-- 출력단자 -->
                <tr>
                    <th>출력단자</th>
                    <td>
                        <input type="checkbox" id="hdmi2.1"><label for="hdmi2.1"> HDMI2.1</label><br>
                        <input type="checkbox" id="hdmi2.0"><label for="hdmi2.0"> HDMI2.0</label><br>
                        <input type="checkbox" id="hdmi"><label for="hdmi"> HDMI</label><br>
                        <input type="checkbox" id="dp2.1"><label for="dp2.1"> DP2.1</label><br>
                        <input type="checkbox" id="dp2.0"><label for="dp2.0"> DP2.0</label>
                    </td>
                </tr>
                <!-- 권장 파워 -->
                <tr>
                    <th>권장 파워</th>
                    <td>
                        <input type="checkbox" id="power450w"><label for="power450w"> 450W 이상</label><br>
                        <input type="checkbox" id="power550w"><label for="power550w"> 550W 이상</label><br>
                        <input type="checkbox" id="power650w"><label for="power650w"> 650W 이상</label><br>
                        <input type="checkbox" id="power750w"><label for "power750w "> 750W 이상 </lablel ><br >
                        <input type "checkbox "id ="power850w "> 850W 이상<br/>
                    </td >
                </tr >
                                <!-- 팬 개수 -->
                <tr>
                    <th>팬 개수</th>
                    <td>
                        <input type="checkbox" id="fan-4"><label for="fan-4"> 4팬</label><br>
                        <input type="checkbox" id="fan-3"><label for="fan-3"> 3팬</label><br>
                        <input type="checkbox" id="fan-2"><label for="fan-2"> 2팬</label><br>
                        <input type="checkbox" id="fan-1"><label for="fan-1"> 1팬</label><br>
                        <input type="checkbox" id="blower-fan"><label for="blower-fan"> 블로워팬</label>
                    </td>
                </tr>
                <!-- 가로(길이) -->
                <tr>
                    <th>가로(길이)</th>
                    <td>
                        <input type="checkbox" id="length-360"><label for="length-360"> 360~</label><br>
                        <input type="checkbox" id="length-350"><label for="length-350"> 350~359</label><br>
                        <input type="checkbox" id="length-340"><label for="length-340"> 340~349</label><br>
                        <input type="checkbox" id="length-330"><label for "length-330 "> 330~339 </lablel ><br >
                        <input type "checkbox "id ="length-320 "> 320~329<br/>
                    </td >
                </tr >
            </tbody >
        </table >
    `;

    case 'ssd': // SSD 카테고리
    return `
        <table class="vertical-table">
            <tbody>
                <!-- 제조사별 -->
                <tr>
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="samsung"><label for="samsung"> 삼성전자</label><br>
                        <input type="checkbox" id="skhynix"><label for="skhynix"> SK하이닉스</label><br>
                        <input type="checkbox" id="wd"><label for="wd"> Western Digital</label><br>
                        <input type="checkbox" id="micron"><label for="micron"> 마이크론</label><br>
                        <input type="checkbox" id="solidigm"><label for="solidigm"> 솔리다임</label><br>
                        <input type="checkbox" id="essencore"><label for="essencore"> ESSENCORE</label><br>
                        <input type="checkbox" id="kioxia"><label for="kioxia"> 키오시아</label><br>
                        <input type="checkbox" id="corsair"><label for="corsair"> CORSAIR</label><br>
                        <input type="checkbox" id="seagate"><label for="seagate"> Seagate</label><br>
                        <input type="checkbox" id="adata"><label for="adata"> ADATA</label>
                    </td>
                </tr>
                <!-- 폼팩터 -->
                <tr>
                    <th>폼팩터</th>
                    <td>
                        <input type="checkbox" id="m2-2280"><label for="m2-2280"> M.2 (2280)</label><br>
                        <input type="checkbox" id="form-2.5"><label for "form-2.5 "> 6.4cm(2.5형) </lablel ><br >
                        <input type "checkbox "id ="m2-2230 "> M.2 (2230)<br/>
                        <input type "checkbox "id ="m2-2242 "> M.2 (2242)<br/>
                        <input type "checkbox "id ="msata "> Mini SATA(mSATA)<br/>
                    </td >
                </tr >
                                <!-- 인터페이스 -->
                <tr>
                    <th>인터페이스</th>
                    <td>
                        <input type="checkbox" id="pcie5x4"><label for="pcie5x4"> PCIe5.0x4 (128GT/s)</label><br>
                        <input type="checkbox" id="pcie4x4"><label for="pcie4x4"> PCIe4.0x4 (64GT/s)</label><br>
                        <input type="checkbox" id="pcie3x4"><label for="pcie3x4"> PCIe3.0x4 (32GT/s)</label><br>
                        <input type="checkbox" id="sata3"><label for="sata3"> SATA3 (6Gb/s)</label>
                    </td>
                </tr>
                <!-- 용량 -->
                <tr>
                    <th>용량</th>
                    <td>
                        <input type="checkbox" id="capacity-4tb"><label for="capacity-4tb"> 4TB~3TB</label><br>
                        <input type="checkbox" id="capacity-2tb"><label for="capacity-2tb"> 2TB~1.1TB</label><br>
                        <input type="checkbox" id="capacity-1tb"><label for "capacity-1tb "> 1TB~600GB </lablel ><br >
                        <input type "checkbox "id ="capacity-525gb "> 525GB~270GB<br/>
                        <input type "checkbox "id ="capacity-256gb "> 256GB~130GB<br/>
                    </td >
                </tr >
                                <!-- 메모리 타입 -->
                <tr>
                    <th>메모리 타입</th>
                    <td>
                        <input type="checkbox" id="tlc-toggle"><label for="tlc-toggle"> TLC(토글)</label><br>
                        <input type="checkbox" id="tlc-other"><label for="tlc-other"> TLC(기타)</label><br>
                        <input type="checkbox" id="qlc"><label for="qlc"> QLC</label><br>
                        <input type="checkbox" id="mlc-other"><label for="mlc-other"> MLC(기타)</label>
                    </td>
                </tr>
                <!-- RAM 탑재 -->
                <tr>
                    <th>RAM 탑재</th>
                    <td>
                        <input type="checkbox" id="dram"><label for="dram"> DRAM 탑재</label>
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
                    <th>제조사별</th>
                    <td>
                        <input type="checkbox" id="seagate"><label for="seagate"> Seagate</label><br>
                        <input type="checkbox" id="wd"><label for="wd"> Western Digital</label><br>
                        <input type="checkbox" id="toshiba"><label for="toshiba"> 도시바</label><br>
                        <input type="checkbox" id="synology"><label for="synology"> Synology</label><br>
                        <input type="checkbox" id="sebap"><label for="sebap"> Sebap</label>
                    </td>
                </tr>
                <!-- 디스크 용량 -->
                <tr>
                    <th>디스크 용량</th>
                    <td>
                        <input type="checkbox" id="24tb"><label for="24tb"> 24TB</label><br>
                        <input type="checkbox" id="20tb"><label for="20tb"> 20TB</label><br>
                        <input type="checkbox" id="18tb"><label for "18tb "> 18TB </lablel ><br >
                        <input type "checkbox "id ="16tb "> 16TB<br/>
                        <input type "checkbox "id ="14tb "> 14TB<br/>
                        <input type "checkbox "id ="12tb "> 12TB<br/>
                        <input type "checkbox "id ="8tb "> 8TB<br/>
                        <input type "checkbox "id ="4tb "> 4TB<br/>
                        <input type "checkbox "id ="3tb "> 3TB<br/>
                        <input type "checkbox "id ="2tb "> 2TB<br/>
                    </td >
                </tr >
                                <!-- 회전수 -->
                <tr>
                    <th>회전수</th>
                    <td>
                        <input type="checkbox" id="rpm-15000"><label for="rpm-15000"> 15,000RPM</label><br>
                        <input type="checkbox" id="rpm-10000"><label for="rpm-10000"> 10,000RPM</label><br>
                        <input type="checkbox" id="rpm-7200"><label for="rpm-7200"> 7,200RPM</label><br>
                        <input type="checkbox" id="rpm-5900"><label for="rpm-5900"> 5,900RPM</label><br>
                        <input type="checkbox" id="rpm-5640"><label for="rpm-5640"> 5,640RPM</label>
                    </td>
                </tr>
                <!-- 버퍼 용량 -->
                <tr>
                    <th>버퍼 용량</th>
                    <td>
                        <input type="checkbox" id="buffer-512mb"><label for="buffer-512mb"> 메모리 512MB</label><br>
                        <input type="checkbox" id="buffer-256mb"><label for="buffer-256mb"> 메모리 256MB</label><br>
                        <input type="checkbox" id="buffer-128mb"><label for "buffer-128mb "> 메모리 128MB </lablel ><br >
                        <input type "checkbox "id ="buffer-64mb "> 메모리 64MB<br/>
                        <input type "checkbox "id ="buffer-32mb "> 메모리 32MB<br/>
                    </td >
                </tr >
                <!-- 기록방식 -->
                <tr >
                    <th >기록방식<td >
                        <input type = "checkbox "id ="cmr "> CMR(PMR)<br/>
                        <input type = "checkbox "id ="smr "> SMR(PMR)<br/>
                        <input type = "checkbox "id ="verify "> 확인요망(PMR)<br/>
                        <input type = "checkbox "id ="tgmr "> TGMR<br/>
                    </td >
                </tr >
            </tbody >
        </table >
    `;





    }
}
    
