/**
 * Update number at cart icon when change quality product
 * if numberCart is not exist, set countNumberCart = 0, else caculate through amount of all products
 */

function updateNumberCart() {
  var numberCart = getItem();
  var countNumberCart = 0;
  if(numberCart == null) {
    countNumberCart = 0;
  }
  else {
    countNumberCart = numberCart.reduce(function (total, quantity) {
      return total + quantity.amount
    }, 0);
  }
  updateCartIcon(countNumberCart);
}

/**
 * @param {quantity} is quantity of all product in cart, get from localstorage 
 */
function updateCartIcon(quantity) {
  const numCart = document.querySelector('.cart');
  numCart.setAttribute('data-cart', quantity);
}
updateNumberCart();

