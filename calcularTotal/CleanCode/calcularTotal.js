
document.addEventListener("DOMContentLoaded", function () {
  var productPrice = 120;
  var productQuantity = 2;
  var totalPurchase = calculateTotal(productPrice, productQuantity);

  console.log(`El total de la compra es: ${totalPurchase} €`);
});

function calculateTotal(price, quantity) {
  const descount = calculateDescount(price);
  const total = price * quantity - descount;

  return total;
}
function calculateDescount(price) {
  return price >= 100 ? price * 0.1 : 0;
}
