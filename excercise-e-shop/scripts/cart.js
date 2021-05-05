/**
 * 
 * @param {item} is information of 1 product: {image, name, price, discount percent }
 * @returns 1 product 
 */
function renderItem(item) {
  return '' +
  '<li class="cart-item">' +
    '<div class="cart flex-center-x flex-start-y">'+
      '<div class="cart-body-left flex-center-x">' +
        '<img src="'+item.image+'" class="prd-img" alt="'+ item.name+ '"/>' + 
        '<div class="prd-info flex-between-y">' +
          '<h4 class="prd-name">' + item.name + '</h4>'+
          '<div class="prd-price">'+
            '<div class="now-price">' + 
              // check if percent of product !== 0, recaculate price of product, else show current price 
              (item.percent !== 0 ? "$" + (item.price -item.price*item.percent/100).toFixed(2) : "$"+item.price) + 
            '</div>' +
            '<div class="badge-sell flex-center-x">'+
              // check if percent of product !== 0, show real price else now show
              '<span class="real-price">' + (item.percent !== 0 ? "$" + item.price : "" ) +'</span>'+
              // check if percent of product !== 0, show percent-discount else now show
              '<span class="percent-sell-off">' + (item.percent !== 0 ? ("-"+ item.percent + "%") : "") + '</span>'+
            '</div>'+
          '</div>'+          
        '</div>'+        
      '</div>'+
      '<div class="cart-body-right flex-between-y">'+
        // check if percent of product !== 0, recaculate total money of product 
        '<span class="prd-total">' +( item.percent !== 0 ?"$"+((item.price - item.price*item.percent/100)*item.amount).toFixed(2): "$"+(item.price * item.amount).toFixed(2)) + '</span>'+
        '<div class="prd-amount">'+
          '<span class="amount decrese-amount">-</span>'+
          // event when change quality at input tag
          '<input class="amount-now" value="' +item.amount+ '" onchange="changeQualityInput(this,' +item.id+ ',' +item.amount+ ')">'+
          '<span class="amount increse-amount">+</span>'+
        '</div>'+
        '<span class="remove">Remove</span>'+
      '</div>'+
    '</div>'+
  '</li>';
}

/**
 * function general, get data from localstorage
 * 
 */
function getItem() {
  return JSON.parse(localStorage.getItem('listItem'));
}

displayCart();

/**
 * Set number at cart icon when change quality and change numberCart in local
 * Caculate quality of product dependent by quality of product
 */
function addNumberCart() {
  let listCart = getItem();
  let number = 0;
  listCart.forEach((element) => {
    number += element.amount;
  });
  localStorage.setItem('cartNumber', number);
  const numberCart = localStorage.getItem('cartNumber');
  const numCart = document.querySelector('.cart');
  numCart.setAttribute('data-cart', numberCart);
}

/**
 * Total money of all product
 * call data from localstorage, loop through all product, and caculate price of product
 * Set total money to tag has className 'cart-coupon'
 */
function totalCost() {
  let price = getItem();
  let total = 0;
  for (const key in price) {
    let item = price[key];
    total += (item.percent !== 0 ? (+item.price - item.price*item.percent/100): item.price) * +item.amount;
  }
  if (total) {
    document.querySelector('.cart-coupon').innerHTML = '$' + total.toFixed(2);
  }
}

/**
 * Render all product in localstorage to cart page
 * Set all product to tag has className "cart-list"
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
  totalCost();
  addNumberCart();
  removeItems();
  amountItem('decrese-amount');
  amountItem('increse-amount');
}

/**
 * Caculate total money of 1 product
 * @param {amount} is amount of 1 product
 * @param {index} is index of product in array when query all class 'now-price'
 */
function totalPricePrd(amount, index) {
  let priceTotal = (amount * (document.querySelectorAll('.now-price')[index].textContent.slice(1))).toFixed(2);
  document.querySelectorAll('.prd-total')[index].innerHTML = '$'+priceTotal;
}

/**
 * Change quality of product when change value at input tag
 * @param {value} is value change when change value at input tag 
 * Add event for input in array query has class 'amount-now'
 * @function updateAmount update quality of product to localstorage 
 * @function totalPricePrd is recaculate total of this product
 */
function changeQualityInput(target, id, amount) {
  console.log('---',target, id, amount);
  let changeQuality = document.querySelectorAll('.amount-now');
  let confirmValue = value < 1 ? 1 : value;
  for(let k= 0; k < changeQuality.length; k++ ){
    changeQuality[k].addEventListener('change', function() {
      updateAmount(+confirmValue, k);
      document.querySelectorAll('.amount-now')[k].value = confirmValue;
      totalPricePrd(confirmValue, k)
    })
  }
}

/**
 * Update quality of product when press increase button or decrease
 * @param {action} if press increase-amount button, increase newAmount by 1
 * @param {action} if press decrease-amount button, decrease newAmount by 1
 */
function amountItem(action) {
  let changeAmount = document.querySelectorAll(`.${action}`);
  for (let l = 0; l < changeAmount.length; l++) {
    changeAmount[l].addEventListener('click', function () {
      // get current quality of product by letiable newAmount
      let newAmount = Number(
        document.querySelectorAll('.amount-now')[l].value
      );
      if (action === 'increse-amount') newAmount = newAmount + 1;
      
      //  Can't decrease quality < 1

      if (action === 'decrese-amount' && newAmount > 1) {
        newAmount = newAmount - 1;
      }
      if (newAmount == 1) {
        // if quality of product == 1 change background button to show to user know can't decrease less than 1
        document.querySelectorAll('.decrese-amount')[l].style.backgroundColor =
          '#e6e6e6';
      } else {
        // if quality of product == 1 change background button to show to user know can't decrease more than 1
        document.querySelectorAll('.decrese-amount')[l].style.backgroundColor =
          '#fff';
      }
      document.querySelectorAll('.amount-now')[l].value = newAmount;
      totalPricePrd(newAmount, l);
      updateAmount(newAmount, l);
      addNumberCart();
    });
  }
}

/**
 * function general to update quality of product 
 * @param {amount}  quality of product in array data from localstorage
 * @param {index} index of product in array data from localstorage
 */
function updateAmount(amount, index) {
  cartList = getItem();
  for (let m = 0; m < cartList.length; m++) {
    if (cartList[m] === cartList[index]) {
      cartList[m].amount = amount;
    }
  }
  localStorage.setItem('listItem', JSON.stringify(cartList));
  totalCost();
  addNumberCart();
}

/**
 * Remove item from localstorage and rerender list product in cart page
 */
function removeItems() {
  cartListRemove = getItem();
  let remove = document.querySelectorAll('.remove');
  for (let n = 0; n < remove.length; n++) {
    // if data on localstorage is empty array, add className 'cart-empty' to tag has className 'section-body
    // and set text 'Giỏ hàng trống'
    if (cartListRemove.length === 0) {
      let empty = document.querySelector('.section-body');
      empty.classList.add('cart-empty');
      empty.innerHTML = 'Giỏ hàng trống';
      document.querySelector('.cart-body-right').innerHTML = '';
    }
    // get index of product has been press remove button, and remove it and reset current product to localstorge
    remove[n].addEventListener('click', function () {
      let removePrd = cartListRemove.slice(0, n).concat(cartListRemove.slice(n + 1));
      localStorage.setItem('listItem', JSON.stringify(removePrd));
      displayCart();
    });
  }
}
