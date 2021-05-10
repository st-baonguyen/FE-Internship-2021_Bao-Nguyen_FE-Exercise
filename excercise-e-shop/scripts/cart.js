/**
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
              // check if percent of product !== 0, show real price else not show
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
          // event when press decrease button
          '<span class="amount decrese-amount" onclick="changeQuantityBtn(' + item.id +','+ (item.amount-1) + ')">-</span>'+
          // event when change quantity at input tag
          '<input class="amount-now" value="' +item.amount+ '" onchange="changeQuantityInput(this,' + item.id +','+')">'+
          // event when press increase button
          '<span class="amount increse-amount" onclick="changeQuantityBtn(' + item.id + ',' + (item.amount+1)+ ')">+</span>'+
        '</div>'+
        // event when press remove button
        '<span class="remove" onclick="removeItem(' +item.id+ ')">Remove</span>'+
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

/**
 * function general, set data to localstorage
 * @param {listItem} is value of key 'listItem' to set to localStorage
 */
function setListItem(listItem) {
  return localStorage.setItem('listItem', JSON.stringify(listItem));
}

var cartList = getItem();
var valueDisable = 1;

/**
 * Update number at cart icon when change quality product
 * if numberCart is not exist, set countNumberCart = 0, else caculate through amount of all products
 */
 function updateNumberCart() {
  var numberCart = getItem();
  var countNumberCart = 0;
  if(numberCart === null) {
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
  var numCart = document.querySelector('.cart');
  numCart.setAttribute('data-cart', quantity);
}


/**
 * Render all product in localstorage to cart page
 * Set all product to tag has className 'cart-list'
 */
function displayCart() {
  var productItem = getItem();
  var listPrd = '';
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
}

/**
 * find all input contain amount of product
 * check if quantity of product is 1, set background of decrease button 
 */
function disable() {
  var listDisable = document.querySelectorAll('.amount-now');
  for(var k = 0; k < listDisable.length; k++ ) {
    if(+listDisable[k].value === valueDisable) {
      document.querySelectorAll('.decrese-amount')[k].style.backgroundColor='#e6e6e6';
    }
  }
}

/**
 * if data on localstorage is empty array, add className 'cart-empty' to tag has className 'section-body
 * and set text 'Giỏ hàng trống'
 */
function emptyCart() {
  if (cartList.length === 0) {
    var empty = document.querySelector('.section-body');
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
  var price = getItem();
  var total = 0;
  for (var key in price) {
    var item = price[key];
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
 * Update quantity of product when press increase button or decrease
 * @param {id} is id of product
 * @param {quantity} is quantity of product
 * Min of quantity is 1
 */
function changeQuantityBtn(id, quantity) {
  quantity < valueDisable ? quantity = valueDisable : quantity;
  disable(index);
  var index = findIndexPrd(id);
  cartList[index].amount = quantity;
  updateQuantity(index, quantity);
}

/**
 * Change quantity of product when change value at input tag
 * @param {target} is input tag
 * @param {id} is id of product
 * @function updateQuantiy update quantity of product
 */
function changeQuantityInput(target, id) {
  +target.value < valueDisable ? target.value = valueDisable : +target.value;
  var newQuantity = +target.value < valueDisable ? valueDisable : +target.value;
  var index = findIndexPrd(id);
  updateQuantity(index, newQuantity);
}

/**
 * find index of product in array cart list
 * @param {id} is the id of the selected product to change quantity
 * @return {k} is index of product in array cart list on localstorage
 */
function findIndexPrd(id) {
  for(var i = 0; i <= cartList.length; i++) {
    if(cartList[i].id === id) {
      return i;
    }
  }
}

/**
 * Remove item from localstorage and rerender list product in cart page
 * @param {id} is id of product from click remove button
 * filter all product has id !== id of product and resetItem to local
 */
function removeItem(id) {
    let itemRemove = cartList.filter(function(item) {
      return item.id !== id;
    })
    setListItem(itemRemove);
    cartList = getItem();
    displayCart();
}

displayCart();
