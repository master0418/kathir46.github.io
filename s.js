// s.js

const cart = [];

function addToCart(productId) {
    const product = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;

    cart.push({ id: productId, name: productName, price: productPrice });
    alert(`${productName} has been added to your cart!`);
}

// Optionally, you can add functions to display cart contents, remove items, etc.
