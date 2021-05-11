import { updateNumberCart, getItem } from '../common/index.js';
import Product from '../interface/item.js';
/**
 * Array products
 */
const products: Array<Product> = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    price: '119.99',
    amount: 1,
    discount: 30,
    image: './asset/sample/product4.png',
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    price: '119.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product5.png',
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    price: '79.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product7.png',
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    price: '119.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product8.png',
  },
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    price: '$119.99',
    amount: 1,
    discount: 30,
    image: './asset/sample/product4.png',
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    price: '$119.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product5.png',
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    price: '$79.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product7.png',
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    price: '$119.99',
    amount: 1,
    discount: 0,
    image: './asset/sample/product8.png',
  },
];

function addCart(): void {
  /**
  * @let {carts} find all button has class 'btn-add-cart' and add to cart with array product
  */
  let carts: any = document.querySelectorAll('.btn-add-cart');

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      setItem(products[i]);
    });
  }
}

/**
 *
 * @param {product} received information of product when press button add to cart,
 * @let {prd} is data get from localstorage
 * @let {arr} check if have data in localstorage, set arr = prd else arr = empty arr
 * @let {count} to check if exist product in local, increase quality, else push prd to local
 */
function setItem(product: Product): void {
  let prd: any = getItem();
  let arrPrd = prd || [];
  if (arrPrd.length === 0) {
    arrPrd.push(product);
  } else {
    let count = 0;
    for (let j = 0; j < arrPrd.length; j++) {
      if (arrPrd[j].id == product.id) {
        arrPrd[j].amount += 1;
      } else {
        count++;
      }
    }
    if (count === arrPrd.length) {
      arrPrd.push(product);
    }
  }
  localStorage.setItem('listItem', JSON.stringify(arrPrd));
  //update numbert at cart icon when add 1 product
  updateNumberCart();
}

addCart();
