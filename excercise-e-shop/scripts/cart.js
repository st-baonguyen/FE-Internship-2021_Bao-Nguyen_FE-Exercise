import {updateNumberCart, getItem} from './common.js';
/**
 * @param {item} is information of 1 product: {image, name, price, discount percent }
 * @returns 1 product 
 * check if percent of product !== 0, show real price else not show
 * check if percent of product !== 0, show real price else not show
 * check if percent of product !== 0, show percent-discount else now show
 * check if percent of product !== 0, recaculate total money of product 
 */
 function renderItem(item) {
  return `
  <li class="cart-item">
    <div class="cart flex-center-x flex-start-y">
      <div class="cart-body-left flex-center-x">
        <img src="${item.image}" class="prd-img" alt="${item.name}"/>
        <div class="prd-info flex-between-y">
          <h4 class="prd-name">${item.name}</h4>
          <div class="prd-price">
            <div class="now-price">
              ${item.percent !== 0 ? "$" + (item.price -item.price*item.percent/100).toFixed(2) : "$"+item.price} 
            </div>
            <div class="badge-sell flex-center-x">
              <span class="real-price">${item.percent !== 0 ? "$" + item.price : "" }</span>
              <span class="percent-sell-off">${item.percent !== 0 ? ("-"+ item.percent + "%") : ""}</span>
            </div>
          </div>     
        </div>    
      </div>
      <div class="cart-body-right flex-between-y">
        <span class="prd-total">${item.percent !== 0 ?"$"+((item.price - item.price * item.percent/100)* item.amount).toFixed(2): "$"+(item.price * item.amount).toFixed(2)}</span>
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

let cartList = getItem();

/**
 * Render all product in localstorage to cart page
 * Set all product to tag has className 'cart-list'
 */
function displayCart() {
  let productItem = getItem();
  let listPrd = '';
  productItem?.forEach((element) => {
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
function disable() {
  let listDisable = document.querySelectorAll('.amount-now');
  for(let k = 0; k < listDisable.length; k++ ) {
    if(+listDisable[k].value === 1)
      document.querySelectorAll('.decrese-amount')[k].style.backgroundColor='#e6e6e6';
  }
}

/**
 * if data on localstorage is empty array, add className 'cart-empty' to tag has className 'section-body
 * and set text 'Giỏ hàng trống'
 */
function emptyCart() {
  if (cartList.length === 0) {
    let empty = document.querySelector('.section-body');
    empty.classList.add('cart-empty');
    empty.innerHTML = 'Giỏ hàng trống';
  }
}

/**
 * Total money of all product
 * Get data from localstorage, loop through all product, and caculate price of product
 * Set total money to tag has className 'cart-coupon'
 */
 function totalCost() {
  let price = getItem();
  let total = 0;
  for (let key in price) {
    let item = price[key];
    total += (item.percent !== 0 ? (+item.price - item.price*item.percent/100): item.price) * +item.amount;
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
function updateQuantity(index, quantity) {
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
function changeQuantityBtn(action) {
  let changeQuantity = document.querySelectorAll(`.${action}`);
  for (let i = 0; i < changeQuantity.length; i++) {
    // find button has been clicked and addEventListener
    changeQuantity[i].addEventListener("click", () => {
      let newQuantity = Number(document.querySelectorAll(".amount-now")[i].value);
      if (action === "increse-amount") newQuantity = newQuantity + 1;
      if (action === "decrese-amount" && newQuantity > 1) {
        newQuantity = newQuantity - 1;
      }      
      // updateQuantiy update quantity of product
      updateQuantity(i, newQuantity);
    }); 
  }
}

/**
 * Change quantity of product when change value at input tag
 * @function updateQuantiy update quantity of product and set to Localstorage
 */
function changeQuantityInput() {
  let changeQuantity = document.querySelectorAll('.amount-now');
  for(let i= 0; i < changeQuantity.length; i++ ){
    changeQuantity[i].addEventListener("change", () => {
      let newQuantity = document.querySelectorAll('.amount-now')[i].value;
      updateQuantity(i, + newQuantity);
    })
  }
}

/**
 * Remove item from localstorage and rerender list product in cart page
 * @param {id} is id of product from click remove button
 * filter all product has id !== id of product and resetItem to local
 */
function removeItems() {
  cartList = getItem();
  let removeItem = document.querySelectorAll(".remove");
  for (let i = 0; i < removeItem.length; i++) {    
    removeItem[i].addEventListener("click", () => {
      let newList = cartList.slice(0, i).concat(cartList.slice(i + 1));
      localStorage.setItem("listItem", JSON.stringify(newList));
      displayCart();
    });
  }
}

displayCart();
