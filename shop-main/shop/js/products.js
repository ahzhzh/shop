// js/products.js

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
    }
    // 추가 제품은 여기에 계속 추가하면 됩니다.
};

function renderProducts() {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    container.innerHTML = '';
    Object.values(products).forEach(product => {
        const html = `
            <div class="product-list-item">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-main-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">${product.price}</div>
                    <table class="product-spec-table">
                        ${product.specs.map(spec => `
                            <tr>
                                <th>${spec.항목}</th>
                                <td>${spec.세부사항}</td>
                            </tr>
                        `).join('')}
                    </table>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
