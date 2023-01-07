import "./description.css";
import { products } from "../assets/data/productsData";
import { divStorePage } from "../StorePage/filtres";
import { getCartCounterDescription } from "../StorePage/products";

const buttunToCart = document.getElementsByClassName("button-to-cart");

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

// const slideImage = document.createElement("img");
// slideImage.classList.add("slide-img");
// wrapSlideImage.appendChild(slideImage);

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
addToCartButton.textContent = "add to cart";
addToCart.appendChild(addToCartButton);

const buyNowButton = document.createElement("button");
buyNowButton.classList.add("add-to-cart__button");
buyNowButton.textContent = "Buy Now";
addToCart.appendChild(buyNowButton);

export const imgClick = document.querySelectorAll(".product__img");

function getSliderImage(n: number) {
  for (let j = 1; j < products[n].images.length; j++) {
    const slideImage = document.createElement("img");
    slideImage.classList.add("slide-img");
    slideImage.src = products[n].images[j];
    wrapSlideImage.appendChild(slideImage);
  }
}

function getProductInfo() {
  for (let i = 0; i < imgClick.length; i++) {
    imgClick[i].addEventListener("click", () => {
      titleDescription.textContent = `${products[i].title}`;
      mainPhoto.src = products[i].thumbnail;
      infoDescription.textContent = `Description: ${products[i].description}`;
      infoDiscont.textContent = `Discont: ${products[i].discountPercentage}%`;
      infoRating.textContent = `Rating: ${products[i].rating}`;
      infoStock.textContent = `Stock: ${products[i].stock}`;
      infoBrand.textContent = `Brand: ${products[i].brand}`;
      infoCategory.textContent = `Category: ${products[i].category}`;
      priceInfo.textContent = `$${products[i].price}`;
      addToCartButton.textContent = buttunToCart[i].textContent;
      getSliderImage(i);

      if (buttunToCart[i].textContent === "in cart") {
        addToCartButton.classList.add("button-to-cart-active");
      }

      getCartCounterDescription(i);
      document.querySelector("main")?.removeChild(divStorePage);
      document.querySelector("main")?.appendChild(divDescriptiontPage);

      return products[i];
    });
  }
}

getProductInfo();

// document.querySelector("main")?.appendChild(fragmentDescriptiontPage);