const card = document.getElementsByClassName('card');
const cards = [...card];
const deck = document.getElementsByClassName('deck');
const matchedCard = document.getElementsByClassName('match');

let openedCards = [];

function openCard() {
  openedCards.push(this);
  if (openedCards.length === 2) {
    if (openedCards[0].type === openedCards[1].type) {
      matchedCards();
    } else {
      unmatched();
    }
  }
}

function matchedCards() {
  openedCards[0].classList.add('matched', 'disabled');
  openedCards[1].classList.add('matched', 'disabled');
  openedCards[0].classList.remove('show', 'open', 'no-event');
  openedCards[1].classList.remove('show', 'open', 'no-event');
  openedCards = [];
}

function unmatched() {
  openedCards[0].classList.add('notMatched');
  openedCards[1].classList.add('notMatched');
  disable();
  setTimeout(function() {
    openedCards[0].classList.remove('show', 'open', 'no-event', 'unmatched');
    openedCards[1].classList.remove('show', 'open', 'no-event', 'unmatched');
    enable();
    openedCards = [];
  }, 1000);
}

function disable() {
  Array.prototype.filter.call(cards, function(crd) {
    crd.classList.add('disabled');
  });
}

function enable() {
  Array.prototype.filter.call(cards, function(card) {
    card.classList.remove('disabled');
    for (let i = 0; i < matchedCard.length; i++) {
      matchedCard[i].classList.add('disabled');
    }
  });
}

cards.forEach(data => {
  data.addEventListener('click', showCard);
  data.addEventListener('click', openCard);
});

function showCard() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
}
