// 장바구니 아이템을 저장할 배열
let cartItems = [];

// 장바구니 초기화 함수
function initCart() {
    // localStorage에서 장바구니 데이터 불러오기
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
    
    // 장바구니 카운트 업데이트
    updateCartCount();
    
    // 장바구니 페이지인 경우 장바구니 표시 업데이트
    if (window.location.pathname.includes('cart.html')) {
        updateCartDisplay();
    }
}

// 장바구니 카운트 업데이트 함수
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// 가격 문자열을 숫자로 변환하는 함수
function parsePrice(priceString) {
    return parseFloat(priceString.replace(/[^\d.-]/g, ''));
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
            name: name,
            price: numericPrice,
            quantity: 1,
            image: imageUrl
        });
    }

    showNotification('상품이 장바구니에 추가되었습니다.');
    updateCartDisplay();
    updateCartCount();
    saveCart();
}

// 장바구니에서 상품 제거 함수
function removeFromCart(productId) {
    productId = productId.toString(); // productId를 문자열로 변환
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCount();
    saveCart();
}

// 장바구니 표시 업데이트 함수
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

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
                        <h3 class="product-name"><a href="#">${item.name}</a></h3>
                    </div>
                </div>
            </td>
            <td>₩${item.price.toLocaleString()}</td>
            <td>
                <div class="input-number">
                    <input type="number" value="${item.quantity}">
                    <span class="qty-up">+</span>
                    <span class="qty-down">-</span>
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
}

// 장바구니 저장 함수
function saveCart() {
    try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
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

// 'Add to Cart' 버튼에 이벤트 리스너 추가
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


  