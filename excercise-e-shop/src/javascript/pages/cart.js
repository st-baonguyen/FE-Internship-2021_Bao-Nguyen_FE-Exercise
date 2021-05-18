import { updateNumberCart, getItem } from '../common/index.js';
import valueDisable from '../constant/index.js';
import '../../style/style.scss';
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
let cartList = getItem();
function displayCart() {
    let productItem = getItem();
    let listPrd = '';
    productItem === null || productItem === void 0 ? void 0 : productItem.forEach((element) => {
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
function disable() {
    let listDisable = document.querySelectorAll('.amount-now');
    for (let k = 0; k < listDisable.length; k++) {
        if (+listDisable[k].value === valueDisable) {
            let disable = document.querySelectorAll('.decrese-amount');
            disable[k].style.backgroundColor = '#e6e6e6';
        }
    }
}
function emptyCart() {
    if (cartList.length === 0) {
        let empty = document.querySelector('.section-body');
        empty.classList.add('cart-empty');
        empty.innerHTML = 'Giỏ hàng trống';
    }
}
function totalCost() {
    let price = getItem();
    let total = 0;
    for (let key in price) {
        let item = price[key];
        total += (item.discount !== 0 ? (+item.price - +item.price * item.discount / 100) : item.price) * +item.amount;
    }
    if (total) {
        document.querySelector('.cart-coupon').innerHTML = '$' + total.toFixed(2);
    }
}
function updateQuantity(index, quantity) {
    cartList[index].amount = quantity;
    localStorage.setItem('listItem', JSON.stringify(cartList));
    displayCart();
    updateNumberCart();
}
function changeQuantityBtn(action) {
    let changeQuantity = document.querySelectorAll(`.${action}`);
    for (let i = 0; i < changeQuantity.length; i++) {
        changeQuantity[i].addEventListener("click", () => {
            let indexQuantity = document.querySelectorAll(".amount-now");
            let newQuantity = Number(indexQuantity[i].value);
            if (action === "increse-amount")
                newQuantity = newQuantity + 1;
            if (action === "decrese-amount" && newQuantity > valueDisable) {
                newQuantity = newQuantity - 1;
            }
            updateQuantity(i, newQuantity);
        });
    }
}
function changeQuantityInput() {
    let changeQuantity = document.querySelectorAll('.amount-now');
    for (let i = 0; i < changeQuantity.length; i++) {
        changeQuantity[i].addEventListener("change", () => {
            let indexQuantityInput = document.querySelectorAll('.amount-now');
            let newQuantity = indexQuantityInput[i].value;
            updateQuantity(i, newQuantity);
        });
    }
}
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
