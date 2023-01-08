import { divStorePage as mainPage } from "../../StorePage/filtres";
import { divCartPage as busketPage, busket } from "../../CartPage/cartPage";
import { divDescriptiontPage } from "../../descriptionPage/productDescription";

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
  */
});

document.querySelector(".logo")?.addEventListener("click", () => {
  if (document.querySelector("main")?.firstChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(mainPage);
  } else {
    document.querySelector("main")?.removeChild(busketPage);
    document.querySelector("main")?.appendChild(mainPage);
  }
});
