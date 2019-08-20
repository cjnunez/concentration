const card = document.getElementsByClassName('card');
const cards = [...card];

cards.forEach(data => {
  data.addEventListener('click', showCard);
});

function showCard() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
}
