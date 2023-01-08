// Create a break line element
let br = document.createElement("br");

function myForm() {
  let popupBg = document.createElement("div");
  popupBg.setAttribute("class", "popup__bg");
  popupBg.classList.add("act");

  // Create a form dynamically
  let form = document.createElement("form");
  //form.setAttribute("method", "get");
  //form.setAttribute("action", "get");
  form.setAttribute("class", "form");
  form.classList.add("act");
  form.setAttribute("onsubmit", "return false");
  form.required = true;

  // Create an input element for Name
  let divName = document.createElement("div");
  divName.setAttribute("class", "form-field");
  let name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("name", "Name");
  name.setAttribute("placeholder", "Name");
  name.setAttribute("minlength", "4");
  name.setAttribute("class", "name");
  //name.setAttribute("onkeypress", "return validName(event)");
  name.setAttribute("onkeypress", "checkName(event)");
  name.required = true;
  name.setAttribute("autocomplete", "off");

  // Create an input element for Surname
  let divSurname = document.createElement("div");
  divSurname.setAttribute("class", "form-field");
  let surname = document.createElement("input");
  surname.setAttribute("type", "text");
  surname.setAttribute("name", "Surname");
  surname.setAttribute("placeholder", "Surname");
  surname.setAttribute("minlength", "5");
  surname.id = "surname";
  //surname.setAttribute("onkeypress", "return validName(event)");
  surname.setAttribute("onkeypress", "checkSurname(event)");
  surname.required = true;
  surname.setAttribute("autocomplete", "off");

  // Create an input element for date of birth
  let data = document.createElement("input");
  data.setAttribute("type", "date");
  data.setAttribute("name", "Date");
  data.setAttribute("placeholder", "Delivery date");
  data.required = true;

  // Create an input element for Street
  let divStreet = document.createElement("div");
  divStreet.setAttribute("class", "form-field");
  let street = document.createElement("input");
  street.setAttribute("type", "text");
  street.setAttribute("name", "Street");
  street.setAttribute("placeholder", "Street");
  street.setAttribute("minlength", "5");
  street.id = "street";
  //street.setAttribute("onkeypress", "return validStreet(event)");
  street.setAttribute("onkeypress", "checkStreet(event)");
  street.required = true;
  street.setAttribute("autocomplete", "off");

  // Create an input element for House
  let divHouse = document.createElement("div");
  divHouse.setAttribute("class", "form-field");
  let house = document.createElement("input");
  house.setAttribute("type", "number");
  house.setAttribute("name", "House");
  house.setAttribute("placeholder", "House number");
  house.setAttribute("min", "1");
  house.id = "house";
  //house.setAttribute("onkeypress", "return validHouse(event)");
  house.setAttribute("onkeypress", "checkHouse(event)");
  house.required = true;
  house.setAttribute("autocomplete", "off");

  // Create an input element for House
  let divFlat = document.createElement("div");
  divFlat.setAttribute("class", "form-field");
  let flat = document.createElement("input");
  flat.setAttribute("type", "text");
  flat.setAttribute("name", "Flat");
  flat.setAttribute("placeholder", "Flat number");
  flat.setAttribute("min", "1");
  flat.id = "flat";
  //flat.setAttribute("onkeypress", "return validFlat(event)");
  flat.setAttribute("onkeypress", "checkFlat(event)");
  flat.required = true;
  flat.setAttribute("autocomplete", "off");

  // Create a form dynamically
  let formRadio = document.createElement("form");
  formRadio.setAttribute("action", "#");

  // Create an input element for Payment
  let paymentCash = document.createElement("label");
  paymentCash.innerHTML = `<input type="radio" name="payment" value="Cash" /> Cash`;

  formRadio.appendChild(paymentCash);

  // Create an input element for Payment
  let paymentCard = document.createElement("label");
  paymentCard.innerHTML = `<input type="radio" name="payment" value="Card" checked="checked"/> Card`;

  formRadio.appendChild(paymentCard);

  // Create an input element for gifts
  let gift = document.createElement("label");
  gift.innerHTML = `<input type="checkbox" name="Gift" value="Gift"/> Gift`;

  // Create an input element for postcard
  let postcard = document.createElement("label");
  postcard.innerHTML = `<input type="checkbox" name="Postcard" value="Postcard"/> Postcard`;

  // Create an input element for 2% discount
  let discount = document.createElement("label");
  discount.innerHTML = `<input type="checkbox" name="Discount" value="Discount"/> 2% discount`;

  // Create an input element for branded pen or pencil
  let brand = document.createElement("label");
  brand.innerHTML = `<input type="checkbox" name="Brand" value="Brand"/> Branded pen or pencil`;

  // create a submit button
  let divSubmit = document.createElement("div");
  divSubmit.setAttribute("class", "form-field");
  let submit = document.createElement("input");
  submit.setAttribute("class", "submit");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Complete");
  //submit.disabled = true;

  // Append inputs to the form
  divName.appendChild(name);
  divName.appendChild(document.createElement("small"));
  form.appendChild(divName);
  form.appendChild(br.cloneNode());

  divSurname.appendChild(surname);
  divSurname.appendChild(document.createElement("small"));
  form.appendChild(divSurname);
  form.appendChild(br.cloneNode());

  divStreet.appendChild(street);
  divStreet.appendChild(document.createElement("small"));
  form.appendChild(divStreet);
  form.appendChild(br.cloneNode());

  divHouse.appendChild(house);
  divHouse.appendChild(document.createElement("small"));
  form.appendChild(divHouse);
  form.appendChild(br.cloneNode());

  divFlat.appendChild(flat);
  divFlat.appendChild(document.createElement("small"));
  form.appendChild(divFlat);
  form.appendChild(br.cloneNode());

  form.appendChild(formRadio);
  form.appendChild(br.cloneNode());

  form.appendChild(data);
  form.appendChild(br.cloneNode());

  form.appendChild(gift);
  form.appendChild(br.cloneNode());
  form.appendChild(postcard);
  form.appendChild(br.cloneNode());
  form.appendChild(discount);
  form.appendChild(br.cloneNode());
  form.appendChild(brand);
  form.appendChild(br.cloneNode());

  form.appendChild(br.cloneNode());
  divSubmit.appendChild(submit);
  form.appendChild(divSubmit);

  //logic
  submit.addEventListener("click", () => {
    let form = document.getElementsByClassName("form")[0];

    if (form.checkValidity()) {
      popupBg.remove();
      information(name, surname, street, house, flat);
    }
  });

  //the end
  popupBg.appendChild(form);
  document.body.appendChild(popupBg);
  //document.getElementsByTagName("body")[0].appendChild(form);
}

function information(name, surname, street, house, flat) {
  let popupBg = document.createElement("div");
  popupBg.setAttribute("class", "popup__bg");
  popupBg.classList.add("act");

  const inf = document.createElement("div");
  inf.setAttribute("class", "inf");
  inf.classList.add("act");

  inf.innerHTML = `<p>The order is created.</p>
  <br>
  <p>The delivery address:</p>
  <p>${street.value} street;</p>
  <p>${house.value} house;</p>
  <p>${flat.value} flat.</p>
  <p>Customer's full name is ${name.value} ${surname.value}</p>`;

  popupBg.appendChild(inf);
  document.getElementsByTagName("body")[0].appendChild(popupBg);
  /*console.log(
    `The order is created. The delivery address is ${street.value}, street house ${house.value}, and flat ${flat.value}. Customer's full name is ${name.value} ${surname.value}`
  );
  */

  let small = document.createElement("small");
  inf.appendChild(br.cloneNode());
  inf.appendChild(small);
  //small.innerText = `Close by click`;

  inf.addEventListener("click", () => {
    popupBg.remove();
  });
}

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min) => length >= min;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkName = (event) => {
  let valid = false;
  const min = 3;
  let regex = /^[A-Za-z]*$/;

  if (event.target.value.length === 0) {
    showError(event.target, "Name cannot be blank.");
  } else if (!onlyLetters(event)) {
    showError(event.target, `Strings only, without spaces`);
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Name must be minimum 4 symbols`);
  } else if (!regex.test(event.target.value)) {
    showError(event.target, `Warning! Only strings are allowed`);
  } else {
    showSuccess(event.target);
    valid = true;
  }

  return valid;
};

const checkSurname = (event) => {
  let valid = false;
  const min = 4;
  let regex = /^[A-Za-z]*$/;

  if (event.target.value.length === 0) {
    showError(event.target, "Surname cannot be blank.");
  } else if (!onlyLetters(event)) {
    showError(event.target, `Strings only, without spaces`);
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Surname must be minimum 5 symbols`);
  } else if (!regex.test(event.target.value)) {
    showError(event.target, `Warning! Only strings are allowed`);
  } else {
    showSuccess(event.target);
    valid = true;
  }

  return valid;
};

const checkStreet = (event) => {
  let valid = false;
  const min = 4;
  let regex = /[^'\x22]*$/;

  if (event.target.value.length === 0) {
    showError(event.target, "Street cannot be blank.");
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Street must be minimum 5 symbols`);
  } else if (!onlyLettersNumbers(event)) {
    //showError(event.target, `Only numbers and letters are allowed`);
  } else if (!regex.test(event.target.value)) {
    //showError(event.target, `Warning! Only numbers and letters are allowed`);
  } else {
    showSuccess(event.target);
    valid = true;
  }

  return valid;
};

const checkHouse = (event) => {
  let valid = false;

  if (event.target.value.length === 0) {
    showError(event.target, "House cannot be blank.");
  } else if (!onlyNumbers(event)) {
    showError(event.target, `Рositive numbers only`);
  } else {
    showSuccess(event.target);
    valid = true;
  }

  return valid;
};

const checkFlat = (event) => {
  let valid = false;

  if (event.target.value.length === 0) {
    showError(event.target, "Flat cannot be blank.");
  } else if (!onlyNumbersdash(event)) {
    showError(
      event.target,
      `Positive numbers only, the dash symbol are allowed`
    );
  } else if (event.target.value.indexOf("-") === 0) {
    showError(event.target, `Warning! The first dash symbol is not allowed`);
  } else {
    showSuccess(event.target);
    valid = true;
  }

  return valid;
};

function onlyLetters(event) {
  let char = String.fromCharCode(event.keyCode); // Get the character
  return /^[A-Za-z]*$/.test(char);
}

function onlyNumbers(event) {
  let char = String.fromCharCode(event.keyCode); // Get the character
  return /^[1-9]*$/.test(char);
}

function onlyLettersNumbers(event) {
  let char = String.fromCharCode(event.keyCode); // Get the character
  return /^[A-Za-z0-9]*$/.test(char);
}

function onlyNumbersdash(event) {
  let char = String.fromCharCode(event.keyCode); // Get the character
  return /^[1-9]+[0-9]*$/.test(char);
  //return event.target.value.match(/^[^\-].+[1-9]*$/); // Match with regex
}

document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "popup__bg") {
    e.target.remove();
  }
});

//check limit
document.querySelectorAll(".check").forEach((element) =>
  element.addEventListener("click", (event) => {
    if (document.querySelectorAll(".check:checked").length > 2)
      event.target.checked = false;
  })
);

//data
let day = new Date().getDate() + 1;
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let value = `${year}-${month}-${day}`;
document.getElementById("date").setAttribute("min", value);

//logic
document.getElementsByClassName("submit")[0].addEventListener("click", () => {
  let form = document.getElementsByClassName("form")[0];

  if (form.checkValidity()) {
    //popupBg.remove();
    information(name, surname, street, house, flat);
  }
});

Array.from(document.getElementsByClassName("form-field")).forEach((element) =>
  element.addEventListener("click", emptyInput)
);

function emptyInput(event) {
  if (event.target.value.length === 0)
    showError(event.target, "Street cannot be blank.");
}
