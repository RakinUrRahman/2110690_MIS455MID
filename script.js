function showAlert() { alert("Welcome to Nike Store!"); }
function openCart() { alert("Your cart is empty!"); }
function addToCart() { alert("Item added to cart!"); }
function submitForm(event) { event.preventDefault(); alert("Message sent!"); }
document.getElementById('wishlist-btn').addEventListener('click', function() {
    alert('Added to Wishlist! ❤️');
});

document.getElementById('cart-btn').addEventListener('click', function() {
    alert('Cart is Empty 🛒');
});
