import { divStorePage } from "../../StorePage/filtres";
import { divCartPage } from "../../CartPage/cartPage";
import { divDescriptiontPage } from "../../descriptionPage/productDescription";

document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === divStorePage) {
    document.querySelector("main")?.removeChild(divStorePage);
    document.querySelector("main")?.appendChild(divCartPage);
  } else {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(divCartPage);
  }
});

document.querySelector(".logo")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(divStorePage);
  } else {
    document.querySelector("main")?.removeChild(divCartPage);
    document.querySelector("main")?.appendChild(divStorePage);
  }
});
