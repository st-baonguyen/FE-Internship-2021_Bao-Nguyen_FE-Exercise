const products = [
  {
    id: 1,
    name: "T-Shirt Summer Vibes",
    price: "119.99",
    amount: 1,
    percent: 30,
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
      } else {
        count++;
      }
    }
    if (count === arr.length) {
      arr.push(product);
    }
  }
  localStorage.setItem("listItem", JSON.stringify(arr));
}