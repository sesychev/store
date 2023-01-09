import { divStorePage as mainPage } from "../../StorePage/filtres";
import { divCartPage as busketPage, cartWrapper, showInCart } from "../../CartPage/cartPage";
import { divDescriptiontPage } from "../../descriptionPage/productDescription";
import { arr } from "../../StorePage/products";

let plus = 1;

document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  if (arr.length > 0 && document.querySelector("main")?.firstChild === mainPage) {
    document.querySelector("main")?.removeChild(mainPage);
    document.querySelector("main")?.appendChild(cartWrapper);
    arr.forEach((item, index) => showInCart(item - 1, index));
    //
    Array.from(document.getElementsByClassName("button-plus")).forEach(element => {
      element.addEventListener("click", () => {
        const numberControl = document.querySelector(".number-control")
        if (numberControl != undefined) numberControl.textContent = `${++plus}`;
        const buttonPlus = document.createElement("button");
        buttonPlus.classList.add("button-plus", "button");
        buttonPlus.textContent = "+";
        numberControl?.prepend(buttonPlus);

        const buttonMinus = document.createElement("button");
        buttonMinus.classList.add("button-minus", "button");
        buttonMinus.textContent = "-";
        numberControl?.appendChild(buttonMinus);
      })
    })
    //
  } else if (arr.length > 0 && document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(cartWrapper);
    arr.forEach((item, index) => showInCart(item - 1, index));
  } else {
    document.querySelector("main")?.firstElementChild?.remove();
    document.querySelector("main")?.appendChild(busketPage);
  }
});
//
document.querySelector(".logo")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(mainPage);
  } else {
    document.querySelector("main")?.removeChild(busketPage);
    document.querySelector("main")?.appendChild(mainPage);
  }
});
