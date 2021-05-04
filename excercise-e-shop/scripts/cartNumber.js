const cartNumber = localStorage.getItem("cartNumber");
const numCart = document.querySelector(".cart");
numCart.setAttribute("data-cart", +cartNumber);

// add number at cart icon when update quality product
function addToLocal(product) {
  const cartNumber = localStorage.getItem("cartNumber");
  localStorage.setItem("cartNumber", +cartNumber + 1 || 1);
  const numCart = document.querySelector(".cart");
  numCart.setAttribute("data-cart", +cartNumber + 1);
  setItem(product);
}