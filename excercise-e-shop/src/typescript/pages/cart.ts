import { updateNumberCart, getItem } from '../common/index';
import Product from '../interface/product';
import valueDisable from '../constant/index';
import '../../style/style.scss';

/**
 * @param {item} is information of 1 product: {image, name, price, discount percent }
 * @returns 1 product 
 * check if percent of product !== 0, show real price else not show
 * check if percent of product !== 0, show real price else not show
 * check if percent of product !== 0, show percent-discount else now show
 * check if percent of product !== 0, recaculate total money of product 
 */
function renderItem(item: Product): string {
  return `
  <li class="cart-item">
    <div class="cart flex-center-x flex-start-y">
      <div class="cart-body-left flex-center-x">
        <img src="${item.image}" class="prd-img" alt="${item.name}"/>
        <div class="prd-info flex-between-y">
          <h4 class="prd-name">${item.name}</h4>
          <div class="prd-price">
            <div class="now-price">
              ${item.discount !== 0 ? "$" + (+item.price - +item.price * item.discount / 100).toFixed(2) : "$" + +item.price} 
            </div>
            <div class="badge-sell flex-center-x">
              <span class="real-price">${item.discount !== 0 ? "$" + +item.price : ""}</span>
              <span class="percent-sell-off">${item.discount !== 0 ? ("-" + item.discount + "%") : ""}</span>
            </div>
          </div>     
        </div>    
      </div>
      <div class="cart-body-right flex-between-y">
        <span class="prd-total">${item.discount !== 0 ? "$" + ((+item.price - +item.price * item.discount / 100) * item.amount).toFixed(2) : "$" + (+item.price * item.amount).toFixed(2)}</span>
        <div class="prd-amount">
          <span class="amount decrese-amount">-</span>
          <input class="amount-now" value="${item.amount}">
          <span class="amount increse-amount">+</span>
        </div>
        <span class="remove">Remove</span>
      </div>
    </div>
  </li>
  `;
}

let cartList: any = getItem();

/**
 * Render all product in localstorage to cart page
 * Set all product to tag has className 'cart-list'
 */
function displayCart(): void {
  let productItem: any = getItem();
  let listPrd: string = '';
  productItem?.forEach((element: Product) => {
    listPrd += renderItem(element);
  });
  if (listPrd) {
    document.querySelector('.cart-list').innerHTML = listPrd;
  }
  disable();
  totalCost();
  updateNumberCart();
  emptyCart();
  changeQuantityBtn("decrese-amount");
  changeQuantityBtn("increse-amount");
  changeQuantityInput();
  removeItems();
}

/**
 * find all input tag contain amount of product
 * check if quantity of product is 1, set background of decrease button 
 */
function disable(): void {
  let listDisable: any = document.querySelectorAll('.amount-now');
  for (let k = 0; k < listDisable.length; k++) {
    if (+listDisable[k].value === valueDisable) {
      let disable: any = document.querySelectorAll('.decrese-amount');
      disable[k].style.backgroundColor = '#e6e6e6';
    }
  }
}

/**
 * if data on localstorage is empty array, add className 'cart-empty' to tag has className 'section-body
 * and set text 'Giỏ hàng trống'
 */
function emptyCart(): void {
  if (cartList.length === 0) {
    let empty: any = document.querySelector('.section-body');
    empty.classList.add('cart-empty');
    empty.innerHTML = 'Giỏ hàng trống';
  }
}

/**
 * Total money of all product
 * Get data from localstorage, loop through all product, and caculate price of product
 * Set total money to tag has className 'cart-coupon'
 */
function totalCost(): void {
  let price: any = getItem();
  let total: number = 0;
  for (let key in price) {
    let item: any = price[key];
    total += (item.discount !== 0 ? (+item.price - +item.price * item.discount / 100) : item.price) * +item.amount;
  }
  if (total) {
    document.querySelector('.cart-coupon').innerHTML = '$' + total.toFixed(2);
  }
}

/**
 * function general to update quantity of product at index position
 * @param {quantity}  quantity of product in array data from localstorage
 * @param {index} index of product in array data from localstorage
 */
function updateQuantity(index: number, quantity: number): void {
  cartList[index].amount = quantity;
  localStorage.setItem('listItem', JSON.stringify(cartList));
  displayCart();
  updateNumberCart();
}

/**
 * @param {action} is className increase-amount or className decrease-amount when has been clicked
 * Update quantity of product when press increase button or decrease
 * Can't decrease quantity product less than 1
 * @function updateQuantiy update quantity of product and set to Localstorage
 */
function changeQuantityBtn(action: string): void {
  let changeQuantity: any = document.querySelectorAll(`.${action}`);
  for (let i = 0; i < changeQuantity.length; i++) {
    // find button has been clicked and addEventListener
    changeQuantity[i].addEventListener("click", () => {
      let indexQuantity: any = document.querySelectorAll(".amount-now");
      let newQuantity: number = Number(indexQuantity[i].value);
      if (action === "increse-amount") newQuantity = newQuantity + 1;
      if (action === "decrese-amount" && newQuantity > valueDisable) {
        newQuantity = newQuantity - 1;
      }
      // updateQuantiy update quantity of product
      updateQuantity(i, newQuantity);
    });
  }
}

/**
 * find index of product in array cart list
 * @param {id} is the id of the selected product to change quantity
 * @return {i} is index of product in array cart list on localstorage
 */
function changeQuantityInput(): void {
  let changeQuantity: any = document.querySelectorAll('.amount-now');
  for (let i = 0; i < changeQuantity.length; i++) {
    changeQuantity[i].addEventListener("change", () => {
      let indexQuantityInput: any = document.querySelectorAll('.amount-now');
      let newQuantity: number = indexQuantityInput[i].value;
      updateQuantity(i, newQuantity);
    })
  }
}

/**
 * Remove item from localstorage and rerender list product in cart page
 * @param {id} is id of product from click remove button
 * filter all product has id !== id of product and resetItem to local
 */
function removeItems(): void {
  cartList = getItem();
  let removeItem: any = document.querySelectorAll(".remove");
  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", () => {
      let newList: Array<Product> = cartList.slice(0, i).concat(cartList.slice(i + 1));
      localStorage.setItem("listItem", JSON.stringify(newList));
      displayCart();
    });
  }
}

displayCart();
