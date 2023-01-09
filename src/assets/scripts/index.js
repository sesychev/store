// Create a break line element
let total = 0;

let fragment = document.createDocumentFragment();
document.body.appendChild(fragment);

let header = document.createElement('HEADER');
header.setAttribute('class', 'header');
fragment.appendChild(header);

let wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
header.appendChild(wrapper);

let title = document.createElement('H1');
title.setAttribute('class', 'title');
wrapper.appendChild(title);

let text = document.createTextNode('Books shop');
title.appendChild(text);

let main = document.createElement('main');
main.setAttribute('class', 'main');
fragment.appendChild(main);

let mainWrapper = document.createElement('div');
mainWrapper.setAttribute('class', 'wrapper');
main.appendChild(mainWrapper);

let mainOrders = document.createElement('H2');
mainOrders.innerText = 'Book Catalog';
mainOrders.setAttribute('class', 'title');
mainWrapper.appendChild(mainOrders);

let frame = document.createElement('div');
frame.setAttribute('class', 'frame');
mainWrapper.appendChild(frame);

let section = document.createElement('aside');
section.setAttribute('class', 'section droppable');
fragment.appendChild(section);

let div = document.createElement('div');
section.appendChild(div);

let titleOrders = document.createElement('H2');
titleOrders.innerText = 'Oder books';
titleOrders.setAttribute('class', 'title');
div.appendChild(titleOrders);

let confirmOrders = document.createElement('button');
confirmOrders.setAttribute('class', 'bag');
confirmOrders.innerText = `Confirm oder`;
div.appendChild(confirmOrders);

div.appendChild(document.createElement('br'));

let totally = document.createElement('H2');
totally.innerText = `Total: $${total}`;
totally.setAttribute('class', 'total');
div.appendChild(totally);

div.appendChild(document.createElement('br'));
document.body.appendChild(fragment);

//confirmOrders.addEventListener("click", () => myForm());
confirmOrders.addEventListener('click', () => {
  if (total > 0) window.location.href = './form.html';
});

let books = fetch('./books.json') //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((books) => {
    for (const book of books) {
      let divBook = document.createElement('div');
      divBook.setAttribute('class', 'book');
      divBook.setAttribute('draggable', 'true');
      divBook.setAttribute('name', 'book');

      let author = document.createElement('div'); // The child element
      author.innerText = `${book.author}`;
      author.setAttribute('class', 'book-author');
      divBook.appendChild(author);

      let imageLink = document.createElement('img'); // The child element
      imageLink.setAttribute('class', 'book-border');
      imageLink.src = `${book.imageLink}`;
      imageLink.width = 200;
      imageLink.height = 250;
      divBook.appendChild(imageLink);

      let title = document.createElement('div'); // The child element
      title.innerText = `${book.title}`;
      title.setAttribute('class', 'book-title');
      divBook.appendChild(title);

      let price = document.createElement('div'); // The child element
      price.setAttribute('class', 'book-price');
      price.innerText = `Price: $${book.price}`;
      divBook.appendChild(price);

      let showButton = document.createElement('button');
      showButton.setAttribute('class', 'button');
      showButton.innerText = `Show more`;
      divBook.appendChild(showButton);

      let addButton = document.createElement('button');
      addButton.setAttribute('class', 'bag');
      addButton.innerText = `Add to bag`;
      divBook.appendChild(addButton);

      frame.appendChild(divBook);

      showButton.addEventListener('click', (e) => {
        e.preventDefault();
        showMore(book.description);
        console.log(book.description);
      });

      addButton.addEventListener('click', () => {
        oder(book);
      });

      //dragging
      const dropArea = document.getElementsByClassName('section')[0];

      divBook.addEventListener('dragstart', () => {
        dropArea.addEventListener('drop', (event) => {
          oder(book);
          console.log(event.target);
        });
      });

      dropArea.addEventListener(
        'dragenter',
        () => {
          dropArea.style.background = '#E0E0E0';
        },
        false
      );

      dropArea.addEventListener(
        'dragleave',
        () => {
          dropArea.style.background = 'none';
        },
        false
      );

      dropArea.addEventListener(
        'dragover',
        (event) => {
          event.preventDefault();
        },
        false
      );
    }
    //
  });

//
function showMore(text) {
  let popupBg = document.createElement('div');
  popupBg.setAttribute('class', 'popup__bg');
  popupBg.classList.add('act');

  let popup = document.createElement('div');
  popup.setAttribute('class', 'popup');
  popup.classList.add('act');
  popup.innerHTML = `<div>${text}</div>`;

  let showButton = document.createElement('button');
  showButton.setAttribute('class', 'close-popup');
  showButton.innerText = `Close`;

  popup.appendChild(showButton);
  popupBg.appendChild(popup);
  document.body.appendChild(popupBg);

  showButton.addEventListener('click', () => {
    popupBg.remove();
  });
}

//
function oder(book) {
  let aside = document.getElementsByClassName('section')[0];

  let divOder = document.createElement('div');
  divOder.setAttribute('class', 'oder');

  let author = document.createElement('div'); // The child element
  author.innerText = `${book.author}`;
  author.setAttribute('class', 'oder-author');
  divOder.appendChild(author);

  let imageLink = document.createElement('img'); // The child element
  imageLink.setAttribute('class', 'book-border');
  imageLink.src = `${book.imageLink}`;
  imageLink.width = 100;
  imageLink.height = 125;
  divOder.appendChild(imageLink);

  let title = document.createElement('div'); // The child element
  title.innerText = `${book.title}`;
  title.setAttribute('class', 'oder-title');
  divOder.appendChild(title);

  let price = document.createElement('div'); // The child element
  price.setAttribute('class', 'book-price');
  price.innerText = `Price: $${book.price}`;
  divOder.appendChild(price);

  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'bag');
  deleteButton.innerText = `Delete`;
  divOder.appendChild(deleteButton);

  let description = document.createElement('p'); // The child element
  description.innerText = `${book.description}`;
  divOder.appendChild(document.createElement('br'));
  aside.appendChild(divOder);

  total += book.price;
  totally.innerText = `Total: $${total}`;

  deleteButton.addEventListener('click', () => {
    total -= book.price;
    totally.innerText = `Total: $${total}`;
    divOder.remove();
  });
}
