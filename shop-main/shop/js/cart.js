// 장바구니 아이템을 저장할 배열
if (typeof cartItems === 'undefined') {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
} else {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
}

// 가격 문자열을 숫자로 변환하는 함수
function parsePrice(priceString) {
    return parseFloat(priceString.replace(/[^\d.-]/g, ''));
}

// 상품 이름을 일정 글자 수마다 줄바꿈 처리하는 함수
function wrapName(name, maxLength = 15) {
    let wrappedName = '';
    for (let i = 0; i < name.length; i += maxLength) {
        wrappedName += name.substring(i, i + maxLength) + '<br>';
    }
    return wrappedName.trim(); // 마지막 줄바꿈 제거
}

// 장바구니에 상품 추가 함수
function addToCart(productId, name, price, imageUrl) {
    const numericPrice = parsePrice(price);
    // 가격이 유효한지 확인
    if (isNaN(numericPrice)) {
        console.error('Invalid price:', price);
        return;
    }
    // 기존 카트 아이템 확인
    const existingItem = cartItems.find(item => item.id === productId.toString());
    if (existingItem) {
        // 이미 존재하는 아이템이면 수량만 증가
        existingItem.quantity += 1;
    } else {
        // 새 아이템 추가
        cartItems.push({
            id: productId.toString(), // id를 문자열로 저장
            name: name, // 이름 그대로 저장
            price: numericPrice,
            quantity: 1,
            image: imageUrl
        });
    }

    showNotification('상품이 장바구니에 추가되었습니다.');
    updateCartDisplay();
    saveCart();
}

// 장바구니에서 상품 제거 함수
function removeFromCart(productId) {
    productId = productId.toString(); // productId를 문자열로 변환
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

// 장바구니 표시 업데이트 함수
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return;

    cartContainer.innerHTML = ''; // 기존 내용을 초기화
    let total = 0;

    if (cartItems.length === 0) {
        // 장바구니가 비어 있을 경우 메시지 표시
        const emptyMessageRow = document.createElement('tr');
        emptyMessageRow.className = 'empty-cart-message';
        emptyMessageRow.innerHTML = `
            <td colspan="5" style="text-align: center; color: #999; font-size: 16px;">
                장바구니에 상품이 없습니다.
            </td>
        `;
        cartContainer.appendChild(emptyMessageRow);

        if (cartTotal) {
            cartTotal.textContent = `₩0`; // 총 금액을 0으로 설정
        }
        return;
    }

    // 장바구니에 상품이 있는 경우 목록 표시
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="product-widget">
                    <div class="product-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="product-body">
                        <h3 class="product-name"><a href="#">${wrapName(item.name)}</a></h3>
                    </div>
                </div>
            </td>
            <td>₩${item.price.toLocaleString()}</td>
            <td>
                <div class="input-number" style="width: 80px;"> <!-- 수량 박스 크기 고정 -->
                    <span class="qty-down" data-id="${item.id}">-</span>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" style="width: 80px; text-align: center;"> <!-- 입력 필드 크기 고정 -->
                    <span class="qty-up" data-id="${item.id}">+</span>
                </div>
            </td>
            <td>₩${itemTotal.toLocaleString()}</td>
            <td>
                <button class="delete" data-id="${item.id}"><i class="fa fa-close"></i></button>
            </td>
        `;
        
        cartContainer.appendChild(row);
    });

    if (cartTotal) {
        cartTotal.textContent = `₩${total.toLocaleString()}`;
    }

    // 삭제 버튼에 이벤트 리스너 추가
    const deleteButtons = cartContainer.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            removeFromCart(productId.toString()); // productId를 문자열로 변환
        });
    });

    // 수량 증가/감소 버튼 이벤트 리스너 추가
    const qtyUpButtons = cartContainer.querySelectorAll('.qty-up');
    const qtyDownButtons = cartContainer.querySelectorAll('.qty-down');
    
    qtyUpButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const item = cartItems.find(item => item.id === productId);
            if (item) {
                item.quantity += 1; // 수량 증가
                updateCartDisplay();
                saveCart();
            }
        });
    });

    qtyDownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const item = cartItems.find(item => item.id === productId);
            if (item && item.quantity > 1) { // 최소 수량은 1로 제한
                item.quantity -= 1; // 수량 감소
                updateCartDisplay();
                saveCart();
            }
        });
    });

    // 수량 입력 필드 변경 이벤트 리스너 추가 (사용자가 직접 입력)
    const quantityInputs = cartContainer.querySelectorAll('input[type="number"]');
    
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const productId = this.getAttribute('data-id');
            const newQuantity = parseInt(this.value, 10);
            
            if (!isNaN(newQuantity) && newQuantity >= 1) { // 최소값은 1로 제한
                const item = cartItems.find(item => item.id === productId);
                if (item) {
                    item.quantity = newQuantity; // 수량 업데이트
                    updateCartDisplay();
                    saveCart();
                }
            } else {
                this.value = item ? item.quantity : 1; // 잘못된 값일 경우 원래 값으로 복원
            }
        });
    });
}

// 장바구니 저장 함수
function saveCart() {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
}

// 장바구니 불러오기 함수
function loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// 알림 표시 함수
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 페이지 로드 시 실행
window.addEventListener('load', function() {
    loadCart();
});

// 'Add to Cart' 버튼에 이벤트 리스너 추가
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productId = product.dataset.id;
        const productName = product.querySelector('.product-name').textContent;
        const price = product.querySelector('.product-price').textContent;
        const imageUrl = product.querySelector('img').src;
        addToCart(productId, productName, price, imageUrl);
    });
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('add-to-cart-btn')) {
      const button = e.target;
      const productId = button.dataset.id;
      const name = button.dataset.name;
      const price = button.dataset.price;
      const imageUrl = button.dataset.image;
      addToCart(productId, name, price, imageUrl);
    }
});
