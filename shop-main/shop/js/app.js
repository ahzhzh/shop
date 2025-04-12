// 상품 데이터 정의
const products = {
    a: {
        name: "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB",
        price: "₩1,915,800",
        image: "./img/product00.png",
        specs: [
            { 항목: "모델명", 세부사항: "갤럭시 GALAX 지포스 RTX 4070 Ti SUPER EX GAMER WHITE OC D6X 16GB" },
            { 항목: "칩셋", 세부사항: "NVIDIA RTX 4070 Ti SUPER" },
            { 항목: "메모리 용량", 세부사항: "16GB GDDR6X" },
            { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP1.4 x3" }
        ]
    },
    b: {
        name: "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB",
        price: "₩1,044,000",
        image: "./img/product01.png",
        specs: [
            { 항목: "모델명", 세부사항: "이엠텍 지포스 RTX 5070 MIRACLE WHITE D7 12GB" },
            { 항목: "칩셋", 세부사항: "NVIDIA RTX 5070" },
            { 항목: "메모리 용량", 세부사항: "12GB GDDR6X" },
            { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP1.4 x3" }
        ]
    },
    c: {
        name: "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져",
        price: "₩2,293,200",
        image: "./img/product02.png",
        specs: [
            { 항목: "모델명", 세부사항: "MSI 지포스 RTX 5080 뱅가드 SOC D7 16GB 하이퍼프로져" },
            { 항목: "칩셋", 세부사항: "NVIDIA RTX 5080" },
            { 항목: "메모리 용량", 세부사항: "16GB GDDR6X" },
            { 항목: "출력 단자", 세부사항: "HDMI2.1 x1, DP1.4 x3" }
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
    alert(`${quantity}개의 ${product.name}이(가) 장바구니에 추가되었습니다!`);
});
