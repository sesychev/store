//
const openPopup = document.querySelectorAll(".select-testimonial");
const popup = document.querySelector(".popup");
const popupBg = document.querySelector(".popup__bg"); // Фон попап окна
const closePopup = document.querySelector(".close-popup");
const array = document.querySelectorAll(".select-testimonial");

//open/close
function toggleTestimonial() {
  popupBg.classList.add("act"); // Добавляем класс 'act' для фона
  popup.classList.add("act"); // И для самого окна

  const stylesPopup = `
  overflow: visible;
  padding: 15px 14px 19px 16px;
  margin-top: 20px;
  margin-right: 36px;
  margin-bottom: 17px;
  margin-left: 17px;
	max-width: 100%;
	height: 391px;
  background: rgba(241,243,242,1);`;
  const testStyles = `margin-bottom: 14px;`;

  document.querySelector(".testimonial").style = stylesPopup;
  document.querySelector(".test").style = testStyles;
}

function func(index) {
  if (index === 0) {
    document.querySelector(".abc").src = "../../assets/icons/user_icon.svg";
    document.querySelector(".testimonial-name").innerHTML = "Michael John";
    document.querySelector(".gray-text").innerHTML = "Local Austria • Today";
    document.querySelector(
      ".testimonial-text"
    ).innerHTML = `The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`;
  } else if (index === 1) {
    document.querySelector(".abc").src = "../../assets/icons/oscar.svg";
    document.querySelector(".testimonial-name").innerHTML = "Oskar Samborsky";
    document.querySelector(".gray-text").innerHTML =
      "Local Austria • Yesterday";
    document.querySelector(
      ".testimonial-text"
    ).innerHTML = `My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`;
  } else if (index === 2) {
    document.querySelector(".abc").src = "../../assets/icons/fredericka.svg";
    document.querySelector(".testimonial-name").innerHTML =
      "Fredericka Michelin";
    document.querySelector(".gray-text").innerHTML =
      "Local Austria • Yesterday";
    document.querySelector(
      ".testimonial-text"
    ).innerHTML = `Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
`;
  } else {
    document.querySelector(".abc").src = "../../assets/icons/mila.svg";
    document.querySelector(".testimonial-name").innerHTML = "Mila Riksha";
    document.querySelector(".gray-text").innerHTML =
      "Local Austria • Yesterday";
  }
}

//"click" on testimonial
openPopup.forEach((item, index) =>
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    toggleTestimonial();
    func(index);
  })
);

closePopup.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("act"); // Убираем активный класс с фона
  popup.classList.remove("act"); // И с окна
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фон, то:
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.remove("act"); // Убираем активный класс с фона
    popup.classList.remove("act"); // И с окна
  }
});
