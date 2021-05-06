<<<<<<< HEAD
/**
 * Array products
 */
var products = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    price: '119.99',
    amount: 1,
    percent: 30,
    image: './asset/sample/product4.png',
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    price: '119.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product5.png',
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    price: '79.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product7.png',
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    price: '119.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product8.png',
  },
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    price: '$89.99',
    realPrice: '$119.99',
    amount: 1,
    percent: 30,
    image: './asset/sample/product4.png',
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    price: '$119.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product5.png',
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    price: '$79.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product7.png',
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    price: '$119.99',
    amount: 1,
    percent: 0,
    image: './asset/sample/product8.png',
  },
];

/**
 * @var {carts} find all button has class 'btn-add-cart''
 */
var carts = document.querySelectorAll('.btn-add-cart');

for (let t = 0; t < carts.length; t++ ) {
  carts[t].addEventListener('click', function () {
    setItem(products[t]);
  });
}

function getItem() {
  return JSON.parse(localStorage.getItem('listItem'));
}

/**
 * 
 * @param {product} received information of product when press button add to cart, 
 * @var {prd} is data get from localstorage
 * @var {arr} check if have data in localstorage, set arr = prd else arr = empty arr
 * @var {count} to check if exist product in local, increase quality, else push prd to local 
 */
function setItem(product) {
  var prd = getItem();
  var arr = prd || [];
  if (arr.length === 0) {
    arr.push(product);
  } else {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].id == product.id) {
        arr[j].amount += 1;
=======
const products = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: 119.99,
    amount: 1,
    percent: '30',
    image: "./asset/sample/product4.png",
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    price: "119.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product5.png",
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    price: "79.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product7.png",
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    price: "119.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product8.png",
  },
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: "$89.99",
    realPrice: "$119.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product4.png",
  },
  {
    id: 2,
    name: "Loose Knit 3/4 Sleeve",
    price: "$119.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product5.png",
  },
  {
    id: 3,
    name: "Basic Slim Fit T-Shirt",
    price: "$79.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product7.png",
  },
  {
    id: 4,
    name: "Loose Textured T-Shirt",
    price: "$119.99",
    amount: 1,
    percent: 0,
    image: "./asset/sample/product8.png",
  },
];

let carts = document.querySelectorAll(".btn-add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function () {
    addToLocal(products[i]);
  });
}
function getItem() {
  return JSON.parse(localStorage.getItem("listItem"));
}

// set product to local when add product
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
>>>>>>> exercise/20210430-bao_nguyen_cart_page
      } else {
        count++;
      }
    }
    if (count === arr.length) {
      arr.push(product);
    }
  }
<<<<<<< HEAD
  localStorage.setItem('listItem', JSON.stringify(arr));
  //update numbert at cart icon when add 1 product
  updateNumberCart();
=======
  localStorage.setItem("listItem", JSON.stringify(arr));
  // addNumberCart();
  // totalCost();
>>>>>>> exercise/20210430-bao_nguyen_cart_page
}
