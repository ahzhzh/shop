let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function parsePrice(priceString) {
    return parseFloat(priceString.replace(/[^\d.-]/g, ''));
}

function wrapName(name, maxLength = 25) {
    let wrappedName = '';
    for (let i = 0; i < name.length; i += maxLength) {
        wrappedName += name.substring(i, i + maxLength) + '<br>';
    }
    return wrappedName.trim();
}

function addToCart(productId, name, price, imageUrl, quantity) {
    const numericPrice = parsePrice(price);
    if (isNaN(numericPrice)) {
        console.error('Invalid price:', price);
        return;
    }
    const existingItem = cartItems.find(item => item.id === productId.toString());
    const addQty = (typeof quantity !== 'undefined') ? parseInt(quantity, 10) : 1;

    if (existingItem) {
        existingItem.quantity += addQty;
    } else {
        cartItems.push({
            id: productId.toString(),
            name: name,
            price: numericPrice,
            quantity: addQty,
            image: imageUrl
        });
    }

    showNotification('상품이 장바구니에 추가되었습니다.');
    updateCartDisplay();
    saveCart();
}

function removeFromCart(productId) {
    productId = productId.toString();
    cartItems = cartItems.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    if (cartItems.length === 0) {
        const emptyMessageRow = document.createElement('tr');
        emptyMessageRow.className = 'empty-cart-message';
        emptyMessageRow.innerHTML = `
            <td colspan="4" style="text-align: center; color: #999; font-size: 16px;">
                장바구니에 상품이 없습니다.
            </td>
        `;
        cartContainer.appendChild(emptyMessageRow);
        if (cartTotal) cartTotal.textContent = `₩0`;
        return;
    }

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
                        <h3 class="product-name">
                          <a href="product.html?id=${encodeURIComponent(item.id)}">${wrapName(item.name)}</a>
                        </h3>
                    </div>
                </div>
            </td>
            <td>
                <div class="input-number" style="width: 80px;">
                    <span class="qty-down" data-id="${item.id}">-</span>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" style="width: 80px; text-align: center;">
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

    if (cartTotal) cartTotal.textContent = `₩${total.toLocaleString()}`;

    // 삭제 버튼 이벤트
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function() {
            removeFromCart(this.getAttribute('data-id'));
        });
    });

    // 수량 증가/감소 버튼 이벤트
    document.querySelectorAll('.qty-up').forEach(button => {
        button.addEventListener('click', function() {
            const item = cartItems.find(item => item.id === this.getAttribute('data-id'));
            if (item) item.quantity += 1;
            updateCartDisplay();
            saveCart();
        });
    });

    document.querySelectorAll('.qty-down').forEach(button => {
        button.addEventListener('click', function() {
            const item = cartItems.find(item => item.id === this.getAttribute('data-id'));
            if (item && item.quantity > 1) item.quantity -= 1;
            updateCartDisplay();
            saveCart();
        });
    });

    // 수량 직접 입력 이벤트
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('change', function() {
            const item = cartItems.find(item => item.id === this.getAttribute('data-id'));
            if (item) {
                item.quantity = Math.max(1, parseInt(this.value) || 1);
                updateCartDisplay();
                saveCart();
            }
        });
    });
}

function saveCart() {
    try {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } catch (e) {
        console.error('Failed to save cart to localStorage:', e);
    }
}

function loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

window.addEventListener('load', function() {
    loadCart();
});

// 카테고리/목록 페이지에서 'Add to Cart' 버튼 클릭 시
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

// (선택) data-* 속성으로 직접 호출하는 경우도 지원
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
