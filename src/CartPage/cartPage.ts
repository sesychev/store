import "./cartPage.css";
import { products } from "../assets/data/productsData";
// import { divStorePage } from "../StorePage/filtres";
// import { divDescriptiontPage } from "../descriptionPage/productDescription";

const fragmentCartPage = document.createDocumentFragment();
export const divCartPage = document.createElement("div");
divCartPage.classList.add("cart-page");
fragmentCartPage.appendChild(divCartPage);

export const emptyCart = document.createElement("h1");
emptyCart.classList.add("h1");
emptyCart.textContent = "Cart is Empty!";
divCartPage.appendChild(emptyCart);

export const cartWrapper = document.createElement("div");
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

const inCartItem = document.createElement("div");
inCartItem.classList.add("in-cart__item");
inCart.appendChild(inCartItem);

const cartItemNumber = document.createElement("div");
cartItemNumber.classList.add("cart-item__number");
cartItemNumber.textContent = "1";
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
inCartItem.appendChild(numberControl);
numberControl.textContent = "1";

const buttonPlus = document.createElement("button");
buttonPlus.classList.add("button-plus", "button");
buttonPlus.textContent = "+";
numberControl.prepend(buttonPlus);
// numberControl.textContent = "1";
const buttonMinus = document.createElement("button");
buttonMinus.classList.add("button-minus", "button");
buttonMinus.textContent = "-";
numberControl.appendChild(buttonMinus);

const totalSum = document.createElement("div");
totalSum.classList.add("total-sum");
cartWrapper.appendChild(totalSum);

const productNumber = document.createElement("p");
productNumber.classList.add("product-number");
productNumber.textContent = " Products:";
totalSum.appendChild(productNumber);

const total = document.createElement("p");
total.classList.add("total");
total.textContent = "Total:";
totalSum.appendChild(total);

const inputPromo = document.createElement("input");
inputPromo.classList.add("input-promo");
inputPromo.setAttribute("type", "text");
totalSum.appendChild(inputPromo);

const buttonBuy = document.createElement("button");
buttonBuy.classList.add("button-buy");
buttonBuy.textContent = "buy now";
totalSum.appendChild(buttonBuy);

export function showInCart(n: number) {
  inCartPhoto.src = products[n].thumbnail;
  inCartTitle.textContent = products[n].title;
  inCartInfo.textContent = products[n].description;
  inCartRating.textContent = `Rating: ${products[n].rating}`;
  inCartStock.textContent = `Stock: ${products[n].stock}`;
  inCartPrice.textContent = `Price: $${products[n].price}`;
  // cartWrapper.appendChild(inCart);
}