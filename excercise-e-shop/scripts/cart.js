const products = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: "$89.99",
    realPrice: "$119.99",
    amount: 1,
    image: "./assets/sample/product4.png",
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    price: "$119.99",
    amount: 1,
    image: "./assets/sample/product5.png",
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    price: "$79.99",
    amount: 1,
    image: "./assets/sample/product7.png",
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    price: "$119.99",
    amount: 1,
    image: "./assets/sample/product8.png",
  },
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: "$89.99",
    realPrice: "$119.99",
    amount: 1,
    image: "../assets/sample/product4.png",
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    price: "$119.99",
    amount: 1,
    image: "../assets/sample/product5.png",
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    price: "$79.99",
    amount: 1,
    image: "../assets/sample/product7.png",
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    price: "$119.99",
    amount: 1,
    image: "../assets/sample/product8.png",
  },
];

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
        <h4 class="prd-name">${item.name}</h4>
      </div>
      <div class="prd-body-right">
        <p class="prd-price price-off tag" real-price="$119.99">${item.price}</p>
        <div class="prd-amount">
          <span class="amount decrese-amount">-</span>
          <span class="amount-now">${item.amount}</span>
          <span class="amount increse-amount">+</span>
        </div>
        <span class="remove">Remove</span>
      </div>
    </div>
  </li>
  `;
}
// show number at cart icon
const cartNumber = localStorage.getItem("cartNumber");
const numCart = document.querySelector(".cart");
numCart.setAttribute("data-cart", +cartNumber);

let carts = document.querySelectorAll(".btn-add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function () {
    addToLocal(products[i]);
  });
}
function getItem() {
  return JSON.parse(localStorage.getItem("listItem"));
}

displayCart();
function addToLocal(product) {
  const cartNumber = localStorage.getItem("cartNumber");
  localStorage.setItem("cartNumber", +cartNumber + 1 || 1);
  const numCart = document.querySelector(".cart");
  numCart.setAttribute("data-cart", +cartNumber + 1);
  setItem(product);
}

function addNumberCart() {
  let listPrd = getItem();
  let num = 0;
  listPrd.forEach((element) => {
    num += element.amount;
  });
  localStorage.setItem("cartNumber", num);
  const cartNumber = localStorage.getItem("cartNumber");
  const numCart = document.querySelector(".cart");
  numCart.setAttribute("data-cart", cartNumber);
}

function setItem(product) {
  let prd = getItem();

  let arr = prd || [];
  if (arr.length === 0) {
    arr.push(product);
  } else {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == product.id) {
        arr[i].amount += 1;
      } else {
        count++;
      }
    }
    if (count === arr.length) {
      arr.push(product);
    }
  }
  localStorage.setItem("listItem", JSON.stringify(arr));
  addNumberCart();
  totalCost();
}

function totalCost() {
  let price = getItem();
  let total = 0;
  for (const key in price) {
    total += +price[key].price.slice(1) * +price[key].amount;
  }
  if (total)
    document.querySelector(".sub-price").innerHTML = "$" + total.toFixed(2);
}

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
}

function amountItem(action) {
  let changeAmount = document.querySelectorAll(`.${action}`);
  for (let i = 0; i < changeAmount.length; i++) {
    changeAmount[i].addEventListener("click", function () {
      let newAmount = Number(
        document.querySelectorAll(".amount-now")[i].textContent
      );
      if (action === "increse-amount") newAmount = newAmount + 1;
      if (action === "decrese-amount" && newAmount > 1) {
        newAmount = newAmount - 1;
      }
      if (newAmount <= 1) {
        document.querySelectorAll(".decrese-amount")[i].style.backgroundColor =
          "#e6e6e6";
        // alert("Quality need more than 1!");
      } else {
        document.querySelectorAll(".decrese-amount")[i].style.backgroundColor =
          "#fff";
      }
      document.querySelectorAll(".amount-now")[i].innerHTML = newAmount;
      updateCart(newAmount, i);
      addNumberCart();
    });
  }
}
amountItem("decrese-amount");
amountItem("increse-amount");

function updateCart(amount, index) {
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

function removeItem() {
  cartList = getItem();
  let remove = document.querySelectorAll(".remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      console.log(i);
      let removePrd = cartList.slice(0, i).concat(cartList.slice(i + 1));
      localStorage.setItem("listItem", JSON.stringify(removePrd));
      displayCart();
      updateCart();
      removeItem();
    });
  }
}
updateCart();
removeItem();
