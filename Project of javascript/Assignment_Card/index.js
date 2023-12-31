// Simulating a backend with JavaScript
let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);

    // Remove the product from the product list
    const productElement = document.getElementById(productName.replace(/\s+/g, ''));
    if (productElement) {
        productElement.remove();
    }

    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    let total = 0;

    cart.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name} - $${product.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(listItem);

        total += product.price;
    });

    document.getElementById('cart-total').innerText = `Total: $${total}`;
}
