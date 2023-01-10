import "./description.css";
import { products } from "../assets/data/productsData";
import { getCartCounterDescription } from "../StorePage/products";

const fragmentDescriptiontPage = document.createDocumentFragment();

export const divDescriptiontPage = document.createElement("div");
divDescriptiontPage.classList.add("description-page");
fragmentDescriptiontPage.appendChild(divDescriptiontPage);

const titleDescription = document.createElement("h2");
titleDescription.classList.add("title-description");
divDescriptiontPage.appendChild(titleDescription);

const wrapDescription = document.createElement("div");
wrapDescription.classList.add("wrap-description");
divDescriptiontPage.appendChild(wrapDescription);

export const wrapDescriptionImage = document.createElement("div");
wrapDescriptionImage.classList.add("wrap-description__img");
wrapDescription.appendChild(wrapDescriptionImage);

const mainPhoto = document.createElement("img");
mainPhoto.classList.add("main-photo");
wrapDescriptionImage.appendChild(mainPhoto);

export const wrapSlideImage = document.createElement("div");
wrapSlideImage.classList.add("wrap-slide-image");
wrapDescriptionImage.appendChild(wrapSlideImage);

const wrapProductInfo = document.createElement("div");
wrapProductInfo.classList.add("wrap-description__product-info");
wrapDescription.appendChild(wrapProductInfo);

const infoDescription = document.createElement("p");
infoDescription.classList.add("product-info__p");
wrapProductInfo.appendChild(infoDescription);

const infoDiscont = document.createElement("p");
infoDiscont.classList.add("product-info__p");
wrapProductInfo.appendChild(infoDiscont);

const infoRating = document.createElement("p");
infoRating.classList.add("product-info__p");
wrapProductInfo.appendChild(infoRating);

const infoStock = document.createElement("p");
infoStock.classList.add("product-info__p");
wrapProductInfo.appendChild(infoStock);

const infoBrand = document.createElement("p");
infoBrand.classList.add("product-info__p");
wrapProductInfo.appendChild(infoBrand);

const infoCategory = document.createElement("p");
infoCategory.classList.add("product-info__p");
wrapProductInfo.appendChild(infoCategory);

const addToCart = document.createElement("div");
addToCart.classList.add("wrap-description__add-to-cart");
wrapDescription.appendChild(addToCart);

const priceInfo = document.createElement("p");
priceInfo.classList.add("price-info");
addToCart.appendChild(priceInfo);

export const addToCartButton = document.createElement("button");
addToCartButton.classList.add("button-to-cart", "add-to-cart__button");
addToCartButton.textContent = "Add to cart";
addToCart.appendChild(addToCartButton);

const buyNowButton = document.createElement("button");
buyNowButton.classList.add("add-to-cart__button");
buyNowButton.textContent = "Buy Now";
addToCart.appendChild(buyNowButton);

function getSliderImage(index: number) {
  for (const element of products[index].images) {
    const slideImage = document.createElement("img");
    slideImage.classList.add("slide-img");
    slideImage.src = element;
    wrapSlideImage?.appendChild(slideImage);
  }
}

export function getProductInfo(index: number) {
  titleDescription.textContent = `${products[index].title}`;
  mainPhoto.src = products[index].thumbnail;
  infoDescription.textContent = `Description: ${products[index].description}`;
  infoDiscont.textContent = `Discont: ${products[index].discountPercentage}%`;
  infoRating.textContent = `Rating: ${products[index].rating}`;
  infoStock.textContent = `Stock: ${products[index].stock}`;
  infoBrand.textContent = `Brand: ${products[index].brand}`;
  infoCategory.textContent = `Category: ${products[index].category}`;
  priceInfo.textContent = `$${products[index].price}`;

  getSliderImage(index);

  document.querySelector("main")?.firstElementChild?.remove();
  document.querySelector("main")?.appendChild(divDescriptiontPage);
}