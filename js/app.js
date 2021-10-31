// Filter Project Selectors
const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('.filter-btn');
const searchBar = document.querySelector('#search-item');
// Modal Project Selectors
let imageArray = [];
let initIndex = 0;
const images = document.querySelectorAll('.store-img');
const lightBox = document.querySelector('.lightbox-container');
const lightBoxItem = document.querySelector('.lightbox-item');
const closeBtn = document.querySelector('.lightbox-close');
const controls = document.querySelectorAll('.lightbox-control');

// Filter Project
btns.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const mainFilter = e.target.dataset.filter;
    console.log(mainFilter);
    cards.forEach((card) => {
      if (mainFilter === 'all') {
        card.style.display = 'block';
      } else if (card.classList.contains(mainFilter)) {
        console.log(card);
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

searchBar.addEventListener('input', (e) => {
  const searchFilter = e.target.value;
  console.log(searchFilter);
  cards.forEach((card) => {
    if (card.classList.contains(searchFilter) || searchFilter === '') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Modal Project

images.forEach((img) => {
  imageArray.push(img.src);
});
console.log(imageArray);

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('store-img')) {
      let img = e.target.src;
      initIndex = imageArray.indexOf(img);
      lightBoxItem.style.backgroundImage = `url(${img})`;
      lightBox.classList.add('show');
      console.log(e.target.classList);
      console.log(img);
      console.log(initIndex);
    }
  });
});

closeBtn.addEventListener('click', () => {
  lightBox.classList.contains('show')
    ? lightBox.classList.remove('show')
    : null;
});

controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    let id = e.target.id;
    console.log(id);
    id === 'right' ? initIndex++ : initIndex--;
    if (initIndex >= imageArray.length) {
      initIndex = 0;
    } else if (initIndex < 0) {
      initIndex = imageArray.length - 1;
    }
    lightBoxItem.style.backgroundImage = `url(${imageArray[initIndex]})`;
    console.log(initIndex);
    console.log(imageArray[initIndex]);
  });
});
