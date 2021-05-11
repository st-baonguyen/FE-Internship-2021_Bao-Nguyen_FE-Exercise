export function getItem() {
    let listCart = localStorage.getItem('listItem');
    return listCart ? JSON.parse(listCart) : [];
}
export function setListItem(listItem) {
    return localStorage.setItem('listItem', JSON.stringify(listItem));
}
export function updateNumberCart() {
    var numberCart = getItem();
    var countNumberCart = 0;
    numberCart === null ? countNumberCart = 0 : countNumberCart = numberCart.reduce((total, item) => total + item.amount, 0);
    updateCartIcon(countNumberCart);
}
export function updateCartIcon(quantity) {
    const numCart = document.querySelector('.cart');
    numCart.setAttribute('data-cart', quantity);
}
updateNumberCart();
