const cards = document.querySelectorAll('.store-item');
const btns = document.querySelectorAll('.filter-btn');
const searchBar = document.querySelector('#search-item');

btns.forEach((button) => {
  button.addEventListener('click', (el) => {
    el.preventDefault();
    const mainFilter = el.target.dataset.filter;
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
