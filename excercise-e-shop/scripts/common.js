/**
 * function general, get data from localstorage
 */
 export function getItem() {
  return JSON.parse(localStorage.getItem('listItem'));
}

/**
 * function general, set data to localstorage
 * @param {listItem} is value of key 'listItem' to set to localStorage
 */
export function setListItem(listItem) {
  return localStorage.setItem('listItem', JSON.stringify(listItem));
}

/**
 * Update number at cart icon when change quality product
 * if numberCart is not exist, set countNumberCart = 0, else caculate through amount of all products
 */

export function updateNumberCart() {
  var numberCart = getItem();
  var countNumberCart = 0;
  numberCart === null ? countNumberCart = 0 : countNumberCart = numberCart.reduce((total, quantity) => total + quantity.amount, 0);
  updateCartIcon(countNumberCart);
}

/**
 * @param {quantity} is quantity of all product in cart, get from localstorage 
 * update number at cart icon when change quantity of product in cart 
 */
export function updateCartIcon(quantity) {
  const numCart = document.querySelector('.cart');
  numCart.setAttribute('data-cart', quantity);
}
updateNumberCart();
