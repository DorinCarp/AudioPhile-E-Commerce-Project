let cartCount = 0;
let cartTotal = 0;

let addToCartButton = document.getElementById("add-to-cart");
addToCartButton.addEventListener("click", function() {
  cartCount++;
  cartTotal += 99; // prețul produsului este de 99
  document.getElementById("cart-count").innerHTML = cartCount;
  document.getElementById("cart-total").innerHTML = "$" + cartTotal;
});