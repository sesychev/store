import "./cartPage.css";
import { products } from "../assets/data/productsData";
import { arr, total } from "../StorePage/products";
// import { divStorePage } from "../StorePage/filtres";
// import { divDescriptiontPage } from "../descriptionPage/productDescription";

const fragmentCartPage = document.createDocumentFragment();

const divCartPage = document.createElement("div");
divCartPage.classList.add("cart-page");
fragmentCartPage.appendChild(divCartPage);

const emptyCart = document.createElement("h1");
emptyCart.classList.add("h1");
emptyCart.textContent = "Cart is Empty!";
divCartPage.appendChild(emptyCart);

const cartWrapper = document.createElement("div");
cartWrapper.classList.add("cart-wrapper");
// divCartPage.appendChild(cartWrapper);

const inCart = document.createElement("div");
inCart.classList.add("in-cart");
cartWrapper.appendChild(inCart);

const productsInCart = document.createElement("div");
productsInCart.classList.add("products-in-cart");
inCart.appendChild(productsInCart);

const titleCart = document.createElement("h2");
titleCart.textContent = "Products In Cart";
productsInCart.appendChild(titleCart);

const totalSum = document.createElement("div");
totalSum.classList.add("total-sum");
cartWrapper.appendChild(totalSum);

const productNumber = document.createElement("p");
productNumber.classList.add("product-number");
totalSum.appendChild(productNumber);

const totally = document.createElement("p");
totally.classList.add("total");
totalSum.appendChild(totally);

const inputPromo = document.createElement("input");
inputPromo.classList.add("input-promo");
inputPromo.setAttribute("type", "text");
inputPromo.setAttribute("placeholder", "Enter promo code");
totalSum.appendChild(inputPromo);

const buttonBuy = document.createElement("button");
buttonBuy.classList.add("button-buy");
buttonBuy.textContent = "Buy Now";
totalSum.appendChild(buttonBuy);

function showInCart(id: number, index: number) {
  const productsInCart = document.createElement("div");
  productsInCart.classList.add("products-in-cart");
  inCart.appendChild(productsInCart);

  const inCartItem = document.createElement("div");
  inCartItem.classList.add("in-cart__item");
  inCart.appendChild(inCartItem);

  const cartItemNumber = document.createElement("div");
  cartItemNumber.classList.add("cart-item__number");
  inCartItem.appendChild(cartItemNumber);

  const inCartPhoto = document.createElement("img");
  inCartPhoto.classList.add("in-cart__photo");
  inCartItem.appendChild(inCartPhoto);

  const inCartDescription = document.createElement("div");
  inCartDescription.classList.add("in-cart-description");
  inCartItem.appendChild(inCartDescription);

  const inCartTitle = document.createElement("h3");
  inCartTitle.classList.add("in-cart__title", "in-cart__text");
  inCartDescription.appendChild(inCartTitle);

  const inCartInfo = document.createElement("p");
  inCartInfo.classList.add("in-cart__info", "in-cart__text");
  inCartDescription.appendChild(inCartInfo);

  const inCartDiscont = document.createElement("p");
  inCartDiscont.classList.add("in-cart__discont", "in-cart__text");
  inCartDescription.appendChild(inCartDiscont);

  const inCartRating = document.createElement("p");
  inCartRating.classList.add("in-cart__rating", "in-cart__text");
  inCartDescription.appendChild(inCartRating);

  const inCartStock = document.createElement("p");
  inCartStock.classList.add("in-cart__stock", "in-cart__text");
  inCartDescription.appendChild(inCartStock);

  const inCartPrice = document.createElement("p");
  inCartPrice.classList.add("in-cart__price", "in-cart__text");
  inCartDescription.appendChild(inCartPrice);

  const numberControl = document.createElement("div");
  numberControl.classList.add("number-control");
  numberControl.textContent = "1";
  inCartItem.appendChild(numberControl);

  const buttonPlus = document.createElement("button");
  buttonPlus.classList.add("button-plus", "button");
  buttonPlus.textContent = "+";
  numberControl.prepend(buttonPlus);

  const buttonMinus = document.createElement("button");
  buttonMinus.classList.add("button-minus", "button");
  buttonMinus.textContent = "-";
  numberControl.appendChild(buttonMinus);

  cartItemNumber.textContent = `${index + 1}`;
  inCartPhoto.src = products[id].thumbnail;
  inCartTitle.textContent = products[id].title;
  inCartInfo.textContent = products[id].description;
  inCartRating.textContent = `Rating: ${products[id].rating}`;
  inCartStock.textContent = `Stock: ${products[id].stock}`;
  inCartPrice.textContent = `Price: $${products[id].price}`;

  const p = document.querySelector(".product-number");
  if (p != undefined) p.textContent = `Products: ${arr.length} pcs`;

  const t = document.querySelector(".total")
  if (t != undefined) t.textContent = `Total: $${total}`;
}

export { divCartPage, emptyCart, cartWrapper, showInCart };