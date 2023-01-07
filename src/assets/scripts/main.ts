const total = 0;

const fragment = document.createDocumentFragment();
document.body.appendChild(fragment);

const header = document.createElement("HEADER");
header.setAttribute("class", "header");
fragment.appendChild(header);

const headerFrame = document.createElement("DIV");
headerFrame.setAttribute("class", "header-wrapper");
header.appendChild(headerFrame);

const logo = document.createElement("A");
logo.setAttribute("class", "logo");
logo.setAttribute("href", "");
logo.innerHTML = `<img class="logo__img"src="assets/img/logo.png" alt="logo">`;
headerFrame.appendChild(logo);

const title = document.createElement("P");
title.setAttribute("class", "header__p");
title.innerText = `Grand total: $ ${total}`;
headerFrame.appendChild(title);

const shopingCartFragment = document.createElement("div");
shopingCartFragment.setAttribute("class", "shoping-cart");
shopingCartFragment.innerHTML = `<img class="shoping-cart__img" src="assets/img/shopping-cart.png" alt="shopping-cart"> <div class="shoping-cart__number">0</div>`;
headerFrame.appendChild(shopingCartFragment)

const main = document.createElement("MAIN");
main.setAttribute("class", "main");
fragment.appendChild(main);

const footer = document.createElement("FOOTER");
footer.setAttribute("class", "footer");
fragment.appendChild(footer);

const footerFrame = document.createElement("DIV");
footerFrame.setAttribute("class", "footer-wrapper");
footer.appendChild(footerFrame);

const usersGithub = document.createElement("DIV");
usersGithub.setAttribute("class", "users-github");
footerFrame.appendChild(usersGithub);

const github1 = document.createElement("A");
github1.setAttribute("class", "github");
github1.setAttribute("href", "https://github.com/sesychev");
github1.setAttribute("target", "_blank");
github1.innerHTML = `<img class="github__img" src="assets/img/GitHub.png" alt="GitHub">`;
usersGithub.appendChild(github1);

const github2 = document.createElement("A");
github2.setAttribute("class", "github");
github2.setAttribute("href", "https://github.com/VolhaYu");
github2.setAttribute("target", "_blank");
github2.innerHTML = `<img class="github__img" src="assets/img/GitHub.png" alt="GitHub">`;
usersGithub.appendChild(github2);

const year = document.createElement("P");
year.setAttribute("class", "year");
year.innerText = `2022`;
footerFrame.appendChild(year);

const link = document.createElement("A");
link.setAttribute("github", "logo");
link.setAttribute("href", "https://rs.school/js/");
link.setAttribute("target", "_blank");
link.innerHTML = `<img class="link-rsschool__img" src="assets/svg/rs_school_js.svg" alt="rs_school_js">`;
footerFrame.appendChild(link);

document.body.appendChild(fragment);