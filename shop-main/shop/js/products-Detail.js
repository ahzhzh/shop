// 상품 데이터 정의
const products = {
    "a": {
        name: "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB",
        price: "₩1,915,800",
        image: "./img/product00.png",
        specs: [
            { 항목: "모델명", 세부사항: "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB" },
            { 항목: "칩셋", 세부사항: "NVIDIA RTX 4070 Ti SUPER" },
            { 항목: "GPU 제조 공정", 세부사항: "4nm" },
            { 항목: "베이스 클럭", 세부사항: "2340MHz" },
            { 항목: "부스트 클럭", 세부사항: "2640MHz" },
            { 항목: "OC 클럭", 세부사항: "2655MHz" },
            { 항목: "스트림 프로세서", 세부사항: "8448개" },
            { 항목: "인터페이스", 세부사항: "PCIe 4.0 x16" },
            { 항목: "메모리 종류", 세부사항: "GDDR6X" },
            { 항목: "메모리 용량", 세부사항: "16GB" },
            { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP1.4 x3" },
            { 항목: "지원 정보", 세부사항: "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)" },
            { 항목: "사용 전력", 세부사항: "285W" },
            { 항목: "권장 파워 용량", 세부사항: "정격파워 750W 이상" },
            { 항목: "전원 포트", 세부사항: "16핀 (12VHPWR) x1" },
            { 항목: "크기 (길이)", 세부사항: "323mm" },
            { 항목: "두께", 세부사항: "60mm" },
            { 항목: "쿨링 방식 및 팬 개수", 세부사항: "3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, XTREME TUNER 지원" },
            { 항목: "A/S 보증 기간", 세부사항: "3년 무상 보증" }
               ]
    },
    "b": {
        name: "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB",
        price: "₩1,044,000",
        image: "./img/product01.png",
        specs: [
            { 항목: "모델명", 세부사항: "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB" },
            { 항목: "칩셋", 세부사항: "NVIDIA RTX 5070" },
            { 항목: "GPU 제조 공정", 세부사항: "4nm" },
            { 항목: "베이스 클럭", 세부사항: "2325MHz" },
            { 항목: "부스트 클럭", 세부사항: "2512MHz" },
            { 항목: "스트림 프로세서", 세부사항: "6144개" },
            { 항목: "인터페이스", 세부사항: "PCIe 5.0 x16" },
            { 항목: "메모리 종류", 세부사항: "GDDR7" },
            { 항목: "메모리 용량", 세부사항: "12GB" },
            { 항목: "메모리 버스", 세부사항: "192bit" },
            { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP2.1 x3" },
            { 항목: "지원 정보", 세부사항: "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)" },
            { 항목: "권장 파워 용량", 세부사항: "정격파워 650W 이상" },
            { 항목: "전원 포트", 세부사항: "16핀 (12V2x6) x1" },
            { 항목: "크기 (길이)", 세부사항: "329mm" },
            { 항목: "두께", 세부사항: "45mm" },
            { 항목: "쿨링 방식 및 팬 개수", 세부사항: 
                `3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, DrMOS 기술 적용` 
             }, 
             {항복:"A/S 보증기간 ",세분 :"3년보증"}
               ]
    },
    "c": {
    name: "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져",
    price: "₩2,293,200",
    image: "./img/product02.png",
    specs: [
        { 항목: "모델명", 세부사항: "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져" },
        { 항목: "칩셋", 세부사항: "NVIDIA RTX 5080" },
        { 항목: "GPU 제조 공정", 세부사항: "TSMC 4nm" },
        { 항목: "부스트 클럭", 세부사항: "2730MHz" },
        { 항목: "OC 클럭", 세부사항: "2745MHz" },
        { 항목: "스트림 프로세서", 세부사항: "10752개" },
        { 항목: "인터페이스", 세부사항: "PCIe 5.0 x16" },
        { 항목: "메모리 종류", 세부사항: "GDDR7" },
        { 항목: "메모리 용량", 세부사항: "16GB" },
        { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP2.1 x3" },
        { 항목: "지원 정보", 세부사항: "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)" },
        { 항목: "사용 전력", 세부사항: "360W" },
        { 항목: "권장 파워 용량", 세부사항: "정격파워 850W 이상" },
        { 항목: "전원 포트", 세부사항: "16핀 (12V2x6) x1" },
        { 항목: "크기 (길이)", 세부사항: "357mm" },
        { 항목: "두께", 세부사항: "66mm" },
        { 항목: "쿨링 방식 및 팬 개수", 세부사항: 
            `3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함, DrMOS 기술 적용, Dual BIOS 지원, MYSTIC LIGHT 기능 포함`
        },
        { 항목: "A/S 보증 기간", 세부사항: "3년 무상 보증" }
            ]
    },
    "d": {
    name: "갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB",
    price: "₩1,099,900",
    image: "./img/product03.png",
    specs: [
        { 항목: "모델명", 세부사항: "갤럭시 GALAX 지포스 RTX 5070 EX GAMER WHITE OC D7 12GB" },
        { 항목: "칩셋", 세부사항: "NVIDIA RTX 5070" },
        { 항목: "GPU 제조 공정", 세부사항: "4nm" },
        { 항목: "베이스 클럭", 세부사항: "2325MHz" },
        { 항목: "부스트 클럭", 세부사항: "2557MHz" },
        { 항목: "스트림 프로세서", 세부사항: "6144개" },
        { 항목: "인터페이스", 세부사항: "PCIe 5.0 x16" },
        { 항목: "메모리 종류", 세부사항: "GDDR7" },
        { 항목: "메모리 용량", 세부사항: "12GB" },
        { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP2.1 x3" },
        { 항목: "지원 정보", 세부사항: "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)" },
        { 항목: "사용 전력", 세부사항: "250W" },
        { 항목: "권장 파워 용량", 세부사항: "정격파워 650W 이상" },
        { 항목: "전원 포트", 세부사항: "16핀 (12V2x6) x1" },
        { 항목: "크기 (길이)", 세부사항: "322mm" },
        { 항목: "두께", 세부사항: "52mm" },
        { 항목: "쿨링 방식 및 팬 개수", 세부사항:
            `3팬, 제로팬 기술, LED 라이트 탑재, 백플레이트 포함`
        },
        { 항목: "A/S 보증 기간", 세부사항: "3년 무상 보증" }
           ]
    },
    "e": {
    name: "MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4",
    price: "₩1,148,960",
    image: "./img/product04.png",
    specs: [
        { 항목: "모델명", 세부사항: "MSI 지포스 RTX 5070 게이밍 트리오 OC D7 12GB 트라이프로져4" },
        { 항목: "칩셋", 세부사항: "NVIDIA RTX 5070" },
        { 항목: "GPU 제조 공정", 세부사항: "4nm" },
        { 항목: "베이스 클럭", 세부사항: "2325MHz" },
        { 항목: "부스트 클럭", 세부사항: "2610MHz" },
        { 항목: "OC 클럭", 세부사항: "2625MHz" },
        { 항목: "스트림 프로세서", 세부사항: "6144개" },
        { 항목: "인터페이스", 세부사항: "PCIe 5.0 x16" },
        { 항목: "메모리 종류", 세부사항: "GDDR7" },
        { 항목: "메모리 용량", 세부사항: "12GB" },
        { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP2.1 x3" },
        { 항목: "지원 정보", 세부사항: "8K 지원, HDR 지원, HDCP 2.3, 제로팬(0-dB 기술)" },
        { 항목: "사용 전력", 세부사항: "250W" },
        { 항목: "권장 파워 용량", 세부사항: "정격파워 650W 이상" },
        { 항목: "전원 포트", 세부사항: "16핀 (12V2x6) x1" },
        { 항목: "크기 (길이)", 세부사항: "338mm" },
        { 항목: "두께", 세부사항: "50mm" },
        { 항목: "쿨링 방식 및 팬 개수", 세부사항:
            `3팬, 제로팬 기술, 백플레이트 포함, DrMOS 기술 적용, LED 라이트 탑재, MYSTIC LIGHT 기능 포함`
        },
        { 항목: "A/S 보증 기간", 세부사항: "3년 무상 보증" }
           ]
    },
    "f": {
    name: "인텔 코어 울트라7 시리즈2 265K (애로우레이크)",
    price: "₩539,990",
    image: "./img/product05.png",
    specs: [    
        { 항목: "소켓", 세부사항: "LGA 1851" },
        { 항목: "코어 및 스레드", 세부사항: "P코어 8개 + E코어 12개 (총 20스레드)" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "탑재 (인텔 그래픽스 Xe LPG)" },
        { 항목: "제조 공정", 세부사항: "TSMC 3nm" },
        { 항목: "기본 클럭", 세부사항: "3.9GHz" },
        { 항목: "최대 클럭", 세부사항: "5.5GHz" },
        { 항목: "L2 캐시", 세부사항: "36MB" },
        { 항목: "L3 캐시", 세부사항: "30MB" },
        { 항목: "PBP-MTP", 세부사항: "125-250W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0, PCIe 4.0" },
        { 항목: "메모리 속도", 세부사항: "6400MHz" },
        { 항목: "기술 지원", 세부사항: "인텔 XTU, 인텔 딥러닝 부스트" },
        { 항목: "쿨러 포함 여부", 세부사항: "미포함" },
        { 항목: "시네벤치 R23 (싱글)", 세부사항: "2304점" },
        { 항목: "시네벤치 R23 (멀티)", 세부사항: "36309점" },
        { 항목: "출시가", 세부사항: "$394 (VAT 별도)" }
           ]
    },
    "g": {
    name: "AMD 라이젠7-6세대 9700X (그래니트 릿지)",
    price: "₩539,990",
    image: "./img/product06.png",
    specs: [
        { 항목: "소켓", 세부사항: "AM5" },
        { 항목: "코어 및 스레드", 세부사항: "8코어 / 16스레드" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "탑재 (AMD 라데온 그래픽)" },
        { 항목: "아키텍처", 세부사항: "Zen 5" },
        { 항목: "제조 공정", 세부사항: "TSMC 4nm" },
        { 항목: "기본 클럭", 세부사항: "3.8GHz" },
        { 항목: "최대 클럭", 세부사항: "5.5GHz" },
        { 항목: "L2 캐시", 세부사항: "8MB" },
        { 항목: "L3 캐시", 세부사항: "32MB" },
        { 항목: "TDP", 세부사항: "65W" },
        { 항목: "PPT", 세부사항: "88W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0" },
        { 항목: "메모리 속도", 세부사항: "5600MHz" },
        { 항목: "기술 지원", 세부사항: "SMT(하이퍼스레딩), AMD Ryzen Master" },
        { 항목: "쿨러 포함 여부", 세부사항: "미포함" },
        { 항목: "시네벤치 R23 (싱글)", 세부사항: "2260점" },
        { 항목: "시네벤치 R23 (멀티)", 세부사항: "21436점" },
        { 항목: "출시가", 세부사항: "$359 (VAT 별도)" }
           ]
    },
    "h": {
    name: "AMD 라이젠7-6세대 9800X3D (그래니트 릿지)",
    price: "₩539,990",
    image: "./img/product07.png",
    specs: [
        { 항목: "소켓", 세부사항: "AM5" },
        { 항목: "코어 및 스레드", 세부사항: "8코어 / 16스레드" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "탑재 (AMD 라데온 그래픽)" },
        { 항목: "아키텍처", 세부사항: "Zen 5" },
        { 항목: "제조 공정", 세부사항: "TSMC 4nm" },
        { 항목: "기본 클럭", 세부사항: "3.8GHz" },
        { 항목: "최대 클럭", 세부사항: "5.5GHz" },
        { 항목: "L2 캐시", 세부사항: "8MB" },
        { 항목: "L3 캐시", 세부사항: "32MB" },
        { 항목: "TDP", 세부사항: "65W" },
        { 항목: "PPT", 세부사항: "88W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0" },
        { 항목: "메모리 속도", 세부사항: "5600MHz" },
        { 항목: "기술 지원", 세부사항: "SMT(하이퍼스레딩), AMD Ryzen Master" },
        { 항목: "쿨러 포함 여부", 세부사항: "미포함" },
        { 항목: "시네벤치 R23 (싱글)", 세부사항: "2260점" },
        { 항목: "시네벤치 R23 (멀티)", 세부사항: "21436점" },
        { 항목: "출시가", 세부사항: "$359 (VAT 별도)" }
           ]
    },
    "h": {
    name: "인텔 코어i7-14세대 14700K (랩터레이크 리프레시)",
    price: "₩552,890",
    image: "./img/product08.png",
    specs: [
        { 항목: "소켓", 세부사항: "AM5" },
        { 항목: "코어 및 스레드", 세부사항: "8코어 / 16스레드" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "탑재 (AMD 라데온 그래픽)" },
        { 항목: "아키텍처", 세부사항: "Zen 5" },
        { 항목: "제조 공정", 세부사항: "TSMC 4nm" },
        { 항목: "기본 클럭", 세부사항: "3.8GHz" },
        { 항목: "최대 클럭", 세부사항: "5.5GHz" },
        { 항목: "L2 캐시", 세부사항: "8MB" },
        { 항목: "L3 캐시", 세부사항: "32MB" },
        { 항목: "TDP", 세부사항: "65W" },
        { 항목: "PPT", 세부사항: "88W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0" },
        { 항목: "메모리 속도", 세부사항: "5600MHz" },
        { 항목: "기술 지원", 세부사항: "SMT(하이퍼스레딩), AMD Ryzen Master" },
        { 항목: "쿨러 포함 여부", 세부사항: "미포함" },
        { 항목: "시네벤치 R23 (싱글)", 세부사항: "2260점" },
        { 항목: "시네벤치 R23 (멀티)", 세부사항: "21436점" },
        { 항목: "출시가", 세부사항: "$359 (VAT 별도)" }
           ]
    },
    "i": {
    name: "인텔 코어i7-14세대 14700K (랩터레이크 리프레시)",
    price: "₩552,890",
    image: "./img/product09.png",
    specs: [
        { 항목: "소켓", 세부사항: "AM5" },
        { 항목: "코어 및 스레드", 세부사항: "8코어 / 16스레드" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "탑재 (AMD 라데온 그래픽)" },
        { 항목: "아키텍처", 세부사항: "Zen 5" },
        { 항목: "제조 공정", 세부사항: "TSMC 4nm" },
        { 항목: "기본 클럭", 세부사항: "3.8GHz" },
        { 항목: "최대 클럭", 세부사항: "5.5GHz" },
        { 항목: "L2 캐시", 세부사항: "8MB" },
        { 항목: "L3 캐시", 세부사항: "32MB" },
        { 항목: "TDP", 세부사항: "65W" },
        { 항목: "PPT", 세부사항: "88W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0" },
        { 항목: "메모리 속도", 세부사항: "5600MHz" },
        { 항목: "기술 지원", 세부사항: "SMT(하이퍼스레딩), AMD Ryzen Master" },
        { 항목: "쿨러 포함 여부", 세부사항: "미포함" },
        { 항목: "시네벤치 R23 (싱글)", 세부사항: "2260점" },
        { 항목: "시네벤치 R23 (멀티)", 세부사항: "21436점" },
        { 항목: "출시가", 세부사항: "$359 (VAT 별도)" }
           ]
    },
    "j": {
    name: "인텔 코어 울트라5 시리즈2 225F (애로우레이크)",
    price: "₩326,990",
    image: "./img/product09.png",
    specs: [
        { 항목: "소켓", 세부사항: "소켓1851" },
        { 항목: "코어 및 스레드", 세부사항: "P6+E4코어 / 10스레드" },
        { 항목: "메모리 규격", 세부사항: "DDR5" },
        { 항목: "내장 그래픽", 세부사항: "미탑재" },
        { 항목: "아키텍처", 세부사항: "TSMC 3nm" },
        { 항목: "기본 클럭", 세부사항: "3.3GHz" },
        { 항목: "최대 클럭", 세부사항: "4.9GHz" },
        { 항목: "L2 캐시", 세부사항: "22MB" },
        { 항목: "L3 캐시", 세부사항: "20MB" },
        { 항목: "TDP", 세부사항: "65W" },
        { 항목: "MTP", 세부사항: "121W" },
        { 항목: "PCIe 지원", 세부사항: "PCIe 5.0, 4.0" },
        { 항목: "메모리 속도", 세부사항: "6400MHz" },
        { 항목: "기술 지원", 세부사항: "인텔 딥러닝부스트" },
        { 항목: "쿨러 포함 여부", 세부사항: "인텔 기본쿨러 포함" },
        { 항목: "출시가", 세부사항: "$221 (VAT 별도)" }
           ]
    }
};

// URL에서 id 파라미터 가져오기
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id'); // 예시 값은 a~j 중 하나

// 선택된 상품 데이터 가져오기
const product = products[productId];

// 데이터 렌더링
if (product) {
    // 이미지 렌더링
    const productImage = document.getElementById("product-image");
    productImage.src = product.image;
    productImage.alt = product.name;

    // 이름 및 가격 렌더링
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;

    // 상세 정보 표 렌더링
    const specsContainer = document.getElementById("product-specs");
    const table = document.createElement("table");
    
    product.specs.forEach(spec => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${spec.항목}</td><td>${spec.세부사항}</td>`;
        table.appendChild(row);
    });

    specsContainer.appendChild(table);
} else {
    // 상품 데이터가 없을 경우 처리
    document.body.innerHTML = "<h2>상품 정보를 찾을 수 없습니다.</h2>";
}

// 수량 조정 기능
const quantityInput = document.getElementById("quantity-input");

document.querySelector(".qty-up").addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.querySelector(".qty-down").addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// 장바구니 추가 버튼 클릭 이벤트
document.getElementById("add-to-cart-btn").addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);

    // cart.js의 addToCart 함수 호출
    addToCart(productId, product.name, product.price, product.image);

});

// 음성 인식 버튼 클릭 이벤트 추가
document.addEventListener('DOMContentLoaded', function() {
    // 헤더 로드 후 음성 인식 버튼 찾기
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // header 태그 내용을 header.html의 내용 중 header 태그 내부 내용만 추출하여 교체
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const headerContent = tempDiv.querySelector('header').innerHTML;
            document.querySelector('header').innerHTML = headerContent;
            
            // 헤더가 로드된 후 음성 인식 초기화
            if (typeof initVoiceRecognition === 'function') {
                initVoiceRecognition();
            }
        })
        .catch(error => console.error('헤더 로드 중 오류:', error));

    // 푸터 로드
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('푸터 로드 중 오류:', error));
});