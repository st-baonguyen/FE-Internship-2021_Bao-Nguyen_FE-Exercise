// render product
function renderItem(item) {
  return `
  <li class="prd-item">
    <div class="prd flex-center-x flex-start-y">
      <div class="prd-body-left flex-center-x">
        <img
          src=${item.image}
          class="prd-img"
          alt="T-Shirt Summer Vibes"
        />
        <div class="prd-info flex-between-y">
          <h4 class="prd-name">${item.name}</h4>
          <span class="prd-price">${(item.percent) !== 0 ? "$"+(item.price -item.price*item.percent/100).toFixed(2) : "$"+item.price}</span>
          <div class="badge-sell flex-center-x">
            <span class="real-price">${item.percent !== 0 ? "$"+item.price : ''}</span>
            <span class="percent-sell-off">${item.percent !== 0 ? '-'+ item.percent + '%' : ''}</span>
          </div>
          </div>        
      </div>  
      <div class="prd-body-right flex-between-y">
        <div class="total">
          <span class="prd-total">${(item.percent) !== 0 ?"$"+((item.price - item.price*item.percent/100)*item.amount).toFixed(2): "$"+(item.price * item.amount).toFixed(2)}</span>
          
        </div>
        <div class="prd-amount">
          <span class="amount decrese-amount">-</span>
          <input class="amount-now" value=${item.amount} onkeyup={changeQualityInput(value)}>
          <span class="amount increse-amount">+</span>
        </div>
        <span class="remove">Remove</span>
      </div>
    </div>
  </li>
  `;
}

// function general for cart page
function getItem() {
  return JSON.parse(localStorage.getItem("listItem"));
}

// default function
displayCart();

//set number at cart icon when change quality 
function addNumberCart() {
  let listPrd = getItem();
  let number = 0;
  listPrd.forEach((element) => {
    number += element.amount;
  });
  localStorage.setItem("cartNumber", number);
  const cartNumber = localStorage.getItem("cartNumber");
  const numCart = document.querySelector(".cart");
  numCart.setAttribute("data-cart", cartNumber);
}

//total money
function totalCost() {
  let price = getItem();
  let total = 0;
  for (const key in price) {
    total += +price[key].price * +price[key].amount;
  }
  if (total) {
    document.querySelector(".sub-price").innerHTML = "$" + total.toFixed(2);
  }
}

// render product list and show int cart
function displayCart() {
  let productItem = getItem();
  let listPrd = "";
  productItem?.forEach((element) => {
    listPrd += renderItem(element);
  });
  if (listPrd) {
    document.querySelector(".prd-list").innerHTML = listPrd;
  }
  totalCost();
  addNumberCart();
  removeItems();
  amountItem("decrese-amount");
  amountItem("increse-amount");
}

// total of 1 product
function totalPricePrd(amount, index) {
  let priceTotal = (amount * (document.querySelectorAll(".prd-price")[index].textContent.slice(1))).toFixed(2);
  document.querySelectorAll(".prd-total")[index].innerHTML = "$"+priceTotal;
}

//change quality in cart when increase or decrease quality by input
function changeQualityInput(value) {
  let changeQuality = document.querySelectorAll('.amount-now');
  let confirmValue = value < 1 ? 1 : value;
  for(let i= 0; i < changeQuality.length; i++ ){
    changeQuality[i].addEventListener("change", function() {
      updateAmount(+confirmValue, i);
      document.querySelectorAll(".amount-now")[i].value = confirmValue;
      totalPricePrd(confirmValue, i)
    })
  }
}

//change quality in cart when increase or decrease quality by button
function amountItem(action) {
  let changeAmount = document.querySelectorAll(`.${action}`);
  for (let i = 0; i < changeAmount.length; i++) {
    changeAmount[i].addEventListener("click", function () {
      let newAmount = Number(
        document.querySelectorAll(".amount-now")[i].value
      );
      if (action === "increse-amount") newAmount = newAmount + 1;
      if (action === "decrese-amount" && newAmount > 1) {
        newAmount = newAmount - 1;
      }
      if (newAmount <= 1) {
        document.querySelectorAll(".decrese-amount")[i].style.backgroundColor =
          "#e6e6e6";
      } else {
        document.querySelectorAll(".decrese-amount")[i].style.backgroundColor =
          "#fff";
      }
      document.querySelectorAll(".amount-now")[i].value = newAmount;
      totalPricePrd(newAmount, i);
      updateAmount(newAmount, i);
      addNumberCart();
    });
  }
}

// update quality product in localstorage
function updateAmount(amount, index) {
  cartList = getItem();
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i] === cartList[index]) {
      cartList[i].amount = amount;
    }
  }
  localStorage.setItem("listItem", JSON.stringify(cartList));
  totalCost();
  addNumberCart();
}

// remove product in cart and set to localstorage
function removeItems() {
  cartList = getItem();
  let remove = document.querySelectorAll(".remove");
  for (let i = 0; i < remove.length; i++) {
    if (cartList.length === 0) {
      let empty = document.querySelector(".section-body");
      empty.classList.add("empty");
      empty.innerHTML = "Giỏ hàng trống";
      document.querySelector(".cart-body-right").innerHTML = "";
    }
    remove[i].addEventListener("click", function () {
      let removePrd = cartList.slice(0, i).concat(cartList.slice(i + 1));
      localStorage.setItem("listItem", JSON.stringify(removePrd));
      displayCart();
    });
  }
}