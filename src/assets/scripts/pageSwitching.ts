import { divStorePage as mainPage } from "../../StorePage/filtres";
import { divCartPage as busketPage, cartWrapper, emptyCart, showInCart } from "../../CartPage/cartPage";
import { divDescriptiontPage } from "../../descriptionPage/productDescription";
import { total, arr } from "../../StorePage/products";

document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  if (arr.length > 0 && document.querySelector("main")?.firstChild === mainPage) {
    document.querySelector("main")?.removeChild(mainPage);
    document.querySelector("main")?.appendChild(cartWrapper);
    arr.forEach((item, index) => showInCart(item - 1, index));

    //emptyCart.style.display = "none";
    //busketPage.appendChild(cartWrapper);
    //button.classList.toggle("button-to-cart-active");
    //showInCart(13);
  } else if (document.querySelector("main")?.firstChild === mainPage) {
    document.querySelector("main")?.removeChild(mainPage);
    document.querySelector("main")?.appendChild(busketPage);
  }

  if (arr.length > 0 && document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(cartWrapper);
    arr.forEach((item, index) => showInCart(item - 1, index));
    //const id = Number(prices[i].getAttribute("data-price"));
    //showInCart(3);
  } else if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(busketPage);
  }
});

/*
document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === mainPage) {
    document.querySelector("main")?.removeChild(mainPage);
    document.querySelector("main")?.appendChild(busketPage);
  } else if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(busketPage);
    //busket();
  } else {
    //document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(busketPage);
  }
  /*
    if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
      document.querySelector("main")?.removeChild(divDescriptiontPage);
      document.querySelector("main")?.appendChild(busketPage);
    } else {
      //document.querySelector("main")?.removeChild(divDescriptiontPage);
      document.querySelector("main")?.appendChild(busketPage);
    }
  
});
*/

document.querySelector(".logo")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(mainPage);
  } else {
    document.querySelector("main")?.removeChild(busketPage);
    document.querySelector("main")?.appendChild(mainPage);
  }
});
