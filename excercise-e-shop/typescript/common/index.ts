import Product from '../interface/item';
/**
 * function general, get data from localstorage
 */
export function getItem(): Array<Product> {
  let listCart: string | null = localStorage.getItem('listItem');
  return listCart ? JSON.parse(listCart) : [];
}

/**
 * function general, set data to localstorage
 * @param {listItem} is value of key 'listItem' to set to localStorage
 */
export function setListItem(listItem: Array<Product>): void {
  return localStorage.setItem('listItem', JSON.stringify(listItem));
}

/**
 * Update number at cart icon when change quality product
 * if numberCart is not exist, set countNumberCart = 0, else caculate through amount of all products
 */

export function updateNumberCart(): void {
  var numberCart: any = getItem();
  var countNumberCart: number = 0;
  numberCart === null ? countNumberCart = 0 : countNumberCart = numberCart.reduce((total: number, item: Product) => total + item.amount, 0);
  updateCartIcon(countNumberCart);
}

/**
 * @param {quantity} is quantity of all product in cart, get from localstorage 
 * update number at cart icon when change quantity of product in cart 
 */
export function updateCartIcon(quantity: number): void {
  const numCart: any = document.querySelector('.cart');
  numCart.setAttribute('data-cart', quantity);
}
updateNumberCart();
