/**
 *
 * add number at cart icon when update quality product
 */
let cartNumberIcon = localStorage.getItem('cartNumber');
let cartNumber = document.querySelector('.cart');
cartNumber.setAttribute('data-cart', +cartNumberIcon);

/**
 * 
 * @param {product} is received from product when add product to cart and add 
 * @let {cartNumber} check if not exist cartNumber, set cartNumber is 1
 * @let {cartNumber} check if exist cartNumber, set cartNumber = cartNumber + 1
 * @function setItem is add product to cart, call from file addToCart.js
 */
function addToLocal(product) {
  let cartNumber = localStorage.getItem('cartNumber');
  localStorage.setItem('cartNumber', +cartNumber + 1 || 1);
  let numCart = document.querySelector('.cart');
  numCart.setAttribute('data-cart', +cartNumber + 1);
  setItem(product);
}
