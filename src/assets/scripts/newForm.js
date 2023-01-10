const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min) => length >= min;

const showError = (input, message) => {
  input.parentElement.querySelector("small").textContent = message;
};

const showSuccess = (input) => {
  input.parentElement.querySelector("small").textContent = "";
};

const checkName = (event) => {
  const min = 4;
  const regex = /^[A-Za-z]*$/;

  if (event.target.checkValidity()) {
    showSuccess(event.target);
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Name must be minimum 4 symbols`);
  } else if (!regex.test(event.target.value)) {
    showError(event.target, `Warning! Only strings are allowed`);
  }
};

const checkSurname = (event) => {
  const min = 5;
  const regex = /^[A-Za-z]*$/;

  if (event.target.checkValidity()) {
    showSuccess(event.target);
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Surname must be minimum 5 symbols`);
  } else if (!regex.test(event.target.value)) {
    showError(event.target, `Warning! Only strings are allowed`);
  }
};

const checkStreet = (event) => {
  const min = 5;
  const regex = /[1-9A-Za-z/-]*$/;
  //showError(event.target, `The field is invalid`);
  if (event.target.checkValidity()) {
    showSuccess(event.target);
  } else if (!isBetween(event.target.value.length, min)) {
    showError(event.target, `Street must be minimum 5 symbols`);
  } else if (!onlyLettersNumbers(event)) {
    showError(event.target, `Only numbers and letters are allowed`);
  } else if (!regex.test(event.target.value)) {
    showError(event.target, `Warning! Only numbers and letters are allowed`);
  }
};

const checkHouse = (event) => {
  if (event.target.checkValidity()) {
    showSuccess(event.target);
  } else if (!onlyNumbers(event)) {
    showError(event.target, `Рositive numbers only`);
  }
};

const checkFlat = (event) => {
  const regex = /^[1-9-]+[0-9-]*$/;
  if (event.target.checkValidity()) {
    showSuccess(event.target);
  } else if (!onlyNumbersdash(event) || !regex.test(event.target.value)) {
    showError(
      event.target,
      `Warning! Only positive numbers and dash symbol are allowed`
    );
  }
};

Array.from(document.getElementsByClassName("form-field")).forEach((element) =>
  element.addEventListener("click", emptyInput)
);

function emptyInput(event) {
  if (event.target.value === "")
    showError(event.target, "Field can not be blank");
}

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
  return /[1-9A-Za-z/-]*$/.test(char);
}

function onlyNumbersdash(event) {
  let char = String.fromCharCode(event.keyCode); // Get the character
  return /^[1-9-]+[0-9-]*$/.test(char);
}

//data
let day = new Date().getDate() + 1;
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

let value = `${year}-${month}-${day}`;
document.getElementById("date").setAttribute("min", value);

//check limit
document.querySelectorAll(".check").forEach((element) =>
  element.addEventListener("click", (event) => {
    if (document.querySelectorAll(".check:checked").length > 2)
      event.target.checked = false;
  })
);

//disabled
document.getElementsByClassName("form")[0].addEventListener("change", () => {
  document.getElementsByClassName("submit")[0].disabled = !document
    .getElementsByClassName("form")[0]
    .checkValidity();
});

//new form
document.getElementsByClassName("submit")[0].addEventListener("click", () => {
  let form = document.getElementsByClassName("form")[0];
  if (form.checkValidity()) information(nic, surname, street, house, flat);
});

function information(name, surname, street, house, flat) {
  let popupBg = document.createElement("div");
  popupBg.setAttribute("class", "popup__bg");
  popupBg.classList.add("act");

  const inf = document.createElement("div");
  inf.setAttribute("class", "inf");
  inf.classList.add("act");

  inf.innerHTML = `<p>The order is created.</p>
  <p>The delivery address:</p>
  <p>${street.value} street;</p>
  <p>${house.value} house;</p>
  <p>${flat.value} flat.</p>
  <p>Customer's full name is ${name.value} ${surname.value}.</p>`;

  popupBg.appendChild(inf);
  document.getElementsByTagName("body")[0].appendChild(popupBg);

  let small = document.createElement("small");
  inf.appendChild(small);

  inf.addEventListener("click", () => {
    popupBg.remove();
  });
}

//close form
document.addEventListener("click", (e) => {
  if (e.target.classList[0] === "popup__bg") e.target.remove();
});
