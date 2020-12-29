const modal = document.querySelector('.search-modal');
const button = document.querySelector('.search-button');


button.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('search-modal-hidden');
  modal.classList.toggle('search-modal-visible');
})
