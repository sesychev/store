import { priceMin, priceMax, stockMin, stockMax, sortedCategorySet, sortedBrandSet } from "../assets/scripts/findData";

export let found = 100;
const fragmentStorePage = document.createDocumentFragment();
export const divStorePage = document.createElement("div");
divStorePage.classList.add("store-page");
fragmentStorePage.appendChild(divStorePage);

const divFilters = document.createElement("div");
divFilters.classList.add("filters");
divStorePage.appendChild(divFilters);

const divResetCopy = document.createElement("div");
divResetCopy.classList.add("buttons-reset-copy");
divFilters.appendChild(divResetCopy);

const buttonReset = document.createElement("button");
buttonReset.classList.add("filters__button");
buttonReset.textContent = "Reset filters";
divResetCopy.appendChild(buttonReset);

const buttonCopy = document.createElement("button");
buttonCopy.classList.add("filters__button");
buttonCopy.textContent = "Copy link";
divResetCopy.appendChild(buttonCopy);

const inputSearch = document.createElement("input");
divFilters.appendChild(inputSearch);
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "search");
inputSearch.classList.add("input-search");
// category
const categoryDiv = document.createElement("fieldset");
categoryDiv.classList.add("category");
divFilters.appendChild(categoryDiv);

const h2Caregory = document.createElement("h2");
h2Caregory.classList.add("h2");
h2Caregory.textContent = "Category";
categoryDiv.appendChild(h2Caregory);

const wrapCheckbox = document.createElement("div");
wrapCheckbox.classList.add("wrap-checkbox");
categoryDiv.appendChild(wrapCheckbox);

for (const category of sortedCategorySet) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = ` ${category.toUpperCase()}`;

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckbox.appendChild(labelCheckbox);
}
// brand
const brandDiv = document.createElement("fieldset");
brandDiv.classList.add("brand");
divFilters.appendChild(brandDiv);

const h2Brand = document.createElement("h2");
h2Brand.classList.add("h2");
h2Brand.textContent = "Brand";
brandDiv.appendChild(h2Brand);

const wrapCheckboxBrand = document.createElement("div");
wrapCheckboxBrand.classList.add("wrap-checkbox");
brandDiv.appendChild(wrapCheckboxBrand);

for (const brand of sortedBrandSet) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = ` ${brand.toUpperCase()}`;

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckboxBrand.appendChild(labelCheckbox);
}
// price
const priceDiv = document.createElement("fieldset");
priceDiv.classList.add("price-div");
divFilters.appendChild(priceDiv);

const h2Price = document.createElement("h2");
h2Price.classList.add("h2");
h2Price.textContent = "Price";
priceDiv.appendChild(h2Price);

const wrapMinMaxPrice = document.createElement("div");
wrapMinMaxPrice.classList.add("wrap-min-max");
priceDiv.appendChild(wrapMinMaxPrice);

const minPrice = document.createElement("div");
minPrice.classList.add("min-price");
minPrice.textContent = `$${priceMin}`;
wrapMinMaxPrice.appendChild(minPrice);

const maxPrice = document.createElement("div");
maxPrice.classList.add("max-price");
maxPrice.textContent = `$${priceMax}`;
wrapMinMaxPrice.appendChild(maxPrice);

const rangeContainerPrice = document.createElement("div");
rangeContainerPrice.classList.add("range-container");
priceDiv.appendChild(rangeContainerPrice);

const inputRangeMinPrice = document.createElement("input");
inputRangeMinPrice.classList.add("range", "min-range-price");
inputRangeMinPrice.setAttribute("type", "range");
inputRangeMinPrice.setAttribute("min", `${priceMin}`);
inputRangeMinPrice.setAttribute("max", `${priceMax}`);
inputRangeMinPrice.setAttribute("value", `${priceMin}`);
rangeContainerPrice.appendChild(inputRangeMinPrice);

const inputRangeMaxPrice = document.createElement("input");
inputRangeMaxPrice.classList.add("range", "max-range-price");
inputRangeMaxPrice.setAttribute("type", "range");
inputRangeMaxPrice.setAttribute("min", `${priceMin}`);
inputRangeMaxPrice.setAttribute("max", `${priceMax}`);
inputRangeMaxPrice.setAttribute("value", `${priceMax}`);
rangeContainerPrice.appendChild(inputRangeMaxPrice);
// stock
const stockDiv = document.createElement("fieldset");
stockDiv.classList.add("stock-div");
divFilters.appendChild(stockDiv);

const h2Stock = document.createElement("h2");
h2Stock.classList.add("h2");
h2Stock.textContent = "Stock";
stockDiv.appendChild(h2Stock);

const wrapMinMaxStock = document.createElement("div");
wrapMinMaxStock.classList.add("wrap-min-max");
stockDiv.appendChild(wrapMinMaxStock);

const minStock = document.createElement("div");
minStock.classList.add("min-stock");
minStock.textContent = `${stockMin}`;
wrapMinMaxStock.appendChild(minStock);

const maxStock = document.createElement("div");
maxStock.classList.add("max-stock");
maxStock.textContent = `${stockMax}`;
wrapMinMaxStock.appendChild(maxStock);

const rangeContainerStock = document.createElement("div");
rangeContainerStock.classList.add("range-container");
stockDiv.appendChild(rangeContainerStock);

const inputRangeMinStock = document.createElement("input");
inputRangeMinStock.setAttribute("type", "range");
inputRangeMinStock.setAttribute("min", `${stockMin}`);
inputRangeMinStock.setAttribute("max", `${stockMax}`);
inputRangeMinStock.setAttribute("value", `${stockMin}`);
inputRangeMinStock.classList.add("range", "min-range-stock");
rangeContainerStock.appendChild(inputRangeMinStock);

const inputRangeMaxStock = document.createElement("input");
inputRangeMaxStock.setAttribute("type", "range");
inputRangeMaxStock.setAttribute("min", `${stockMin}`);
inputRangeMaxStock.setAttribute("max", `${stockMax}`);
inputRangeMaxStock.setAttribute("value", `${stockMax}`);
inputRangeMaxStock.classList.add("range", "max-range-stock");
rangeContainerStock.appendChild(inputRangeMaxStock);

document.querySelector("main")?.appendChild(fragmentStorePage);
//
const checkboxes: HTMLCollectionOf<Element> = document.getElementsByClassName("label-checkbox");
let filter1 = new Set<string>();
let filter2 = new Set<string>();

Array.from(checkboxes).forEach((checkbox) => checkbox.addEventListener("change", (event) => {
  //const cards: HTMLCollectionOf<Element> = document.getElementsByClassName("card-product");
  const cards = document.querySelectorAll<HTMLElement>(".card-product");
  const checkboxText: string = checkbox.textContent?.trim() as string;
  const target = event.target as HTMLInputElement;

  Array.from(cards).forEach((card) => {
    const dataCategory = card.getAttribute("data-category") as string;
    const dataBrand = card.getAttribute("data-brand") as string;

    if ((checkboxText !== dataCategory)) {
      card.classList.add("hide");
      card.style.display = "none"
      filter1.add(checkboxText);
    }

    if ((checkboxText !== dataBrand)) {
      card.classList.add("hide");
      card.style.display = "none"
      filter1.add(checkboxText);
    }

    if (!target.checked) {
      card.classList.remove("hide");
      card.style.display = "flex"
      filter1.delete(checkboxText);
    }

    if (filter1.has(dataCategory) && filter1.has(dataBrand)) {
      card.classList.remove("hide");
      card.style.display = "flex"
      // eslint-disable-next-line no-dupe-else-if
    } else if (filter1.has(dataCategory) || filter1.has(dataBrand)) {
      card.classList.remove("hide");
      card.style.display = "flex"
    } else {
      card.classList.add("hide");
      card.style.display = "none"
    }

    if (card.classList.contains("hide") && filter1.size === 0) {
      card.classList.remove("hide");
      card.style.display = "flex";
    }

    //const a: Element | null = document.querySelector(".found-product");
    //a?.textContent:= `Found: ${Array.from(document.getElementsByClassName("card-product")).length} pcs`;

  });

  console.log("filter1:", filter1);
  console.log("filter2:", filter2);

  const foundProduct = document.querySelector(".found-product");
  found = Array.from(cards).filter(card => card.style.display === "flex").length;
  if (foundProduct != undefined) foundProduct.textContent = `Found: ${found} pcs`;
}))

buttonReset.addEventListener("click", () => {
  // const checkboxes = document.getElementsByClassName("checkbox") as HTMLCollectionOf<HTMLInputElement>;
  // document.querySelectorAll(".card-product") as NodeList<HTMLInputElement>
  Array.from(document.getElementsByClassName("checkbox") as HTMLCollectionOf<HTMLInputElement>).forEach(checkbox => checkbox.checked = false);
  document.querySelectorAll<HTMLElement>(".card-product").forEach((card) => {
    card.classList.remove("hide");
    card.style.display = "flex";
  });
  filter1 = new Set<string>();
  filter2 = new Set<string>();
  //document.querySelector(".min-range-price")?.setAttribute("value", `${priceMin}`);
  //console.log(document.querySelector(".min-range-price"))
});

document.querySelector(".input-search")?.addEventListener("input", (event) => {
  //const cards: HTMLCollectionOf<Element> = document.getElementsByClassName("card-product");
  const cards = document.querySelectorAll<HTMLElement>(".card-product");
  const target = event.target as HTMLInputElement;

  Array.from(cards).forEach((card) => {
    const dataPrice = card.getAttribute("data-price") as string;
    const dataRating = card.getAttribute("data-rating") as string;
    const dataCategory = card.getAttribute("data-category") as string;
    const dataBrand = card.getAttribute("data-brand") as string;

    if (!(dataPrice.includes(target.value) || dataRating.includes(target.value) || dataCategory.includes(target.value.toLocaleUpperCase()) || dataBrand.includes(target.value.toLocaleUpperCase()))) {
      //card.classList.add("hide");
      card.style.display = "none";
    } else {
      card.style.display = "flex";
      //card.classList.remove("hide");
    }
  })
})

document.querySelector(".min-range-price")?.addEventListener("input", (event) => {
  const cards = document.getElementsByClassName("card-product") as HTMLCollectionOf<HTMLElement>;
  const target = event.target as HTMLInputElement;
  const min = document.querySelector<Element>(".min-price");
  if (min != undefined) min.textContent = `$${target.value}`;

  Array.from(cards).forEach((card) => {
    const dataPrice = card.getAttribute("data-price") as string;

    if (Number(target.value) >= Number(dataPrice)) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  })

  count(cards);
})

document.querySelector(".max-range-price")?.addEventListener("input", (event) => {
  const cards = document.getElementsByClassName("card-product") as HTMLCollectionOf<HTMLElement>;
  const target = event.target as HTMLInputElement;
  const max = document.querySelector<Element>(".max-price");
  if (max != undefined) max.textContent = `$${target.value}`;

  Array.from(cards).forEach((card) => {
    const dataPrice = card.getAttribute("data-price") as string;

    if (Number(target.value) <= Number(dataPrice)) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  })

  count(cards);
})

document.querySelector(".min-range-stock")?.addEventListener("input", (event) => {
  const cards = document.getElementsByClassName("card-product") as HTMLCollectionOf<HTMLElement>;
  const target = event.target as HTMLInputElement;
  const min = document.querySelector<Element>(".min-stock");
  if (min != undefined) min.textContent = `${target.value}`;

  Array.from(cards).forEach((card) => {
    const dataStock = card.getAttribute("data-stock") as string;

    if (Number(target.value) >= Number(dataStock)) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  })

  count(cards);
})

document.querySelector(".max-range-stock")?.addEventListener("input", (event) => {
  const cards = document.getElementsByClassName("card-product") as HTMLCollectionOf<HTMLElement>;
  const target = event.target as HTMLInputElement;
  const max = document.querySelector<Element>(".max-stock");
  if (max != undefined) max.textContent = `${target.value}`;

  Array.from(cards).forEach((card) => {
    const dataStock = card.getAttribute("data-stock") as string;

    if (Number(target.value) <= Number(dataStock)) {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  })

  count(cards);
})

export function count(cards: HTMLCollectionOf<HTMLElement>) {
  const foundProduct = document.querySelector(".found-product");
  found = Array.from(cards).filter(card => card.style.display === "flex").length;
  if (foundProduct != undefined) foundProduct.textContent = `Found: ${found} pcs`;
}