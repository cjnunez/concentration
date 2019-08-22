const card = document.getElementsByClassName('card');
let cards = [...card];
const deck = document.getElementById('deck');
const matchedCard = document.getElementsByClassName('match');
const winnerModal = document.getElementsByClassName('winner-modal');
const matchedCardArray = [];

let openedCards = [];

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.body.onload = startGame();

function startGame() {
  // empty the array
  openedCards = [];

  // shuffle the deck
  cards = shuffle(cards);

  // remove all existing classes form cards
  for (let i = 0; i < cards.length; i++) {
    deck.innerHTML = '';
    [].forEach.call(cards, function(item) {
      deck.appendChild(item);
    });
    cards[i].classList.remove('show', 'open', 'matched', 'disabled');
  }

  winnerModal[0].classList.remove('show');
}

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
  matchedCardArray.push('1');
  matchedCardArray.push('1');
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

function checkWinner() {
  console.log(matchedCardArray.length);
  if (matchedCardArray.length === 16) {
    console.log(winnerModal);
    winnerModal[0].classList.add('show');
  }
}

cards.forEach(data => {
  data.addEventListener('click', showCard);
  data.addEventListener('click', openCard);
  data.addEventListener('click', checkWinner);
});

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == '49') {
    const c1 = document.getElementById('c1');
    if (!c1.classList.contains('disabled')) c1.click();
  } else if (key.keyCode == '50') {
    const c2 = document.getElementById('c2');
    if (!c2.classList.contains('disabled')) c2.click();
  } else if (key.keyCode == '51') {
    const c3 = document.getElementById('c3');
    if (!c3.classList.contains('disabled')) c3.click();
  } else if (key.keyCode == '52') {
    const c4 = document.getElementById('c4');
    if (!c4.classList.contains('disabled')) c4.click();
  } else if (key.keyCode == '81') {
    const c5 = document.getElementById('c5');
    if (!c5.classList.contains('disabled')) c5.click();
  } else if (key.keyCode == '87') {
    const c6 = document.getElementById('c6');
    if (!c6.classList.contains('disabled')) c6.click();
  } else if (key.keyCode == '69') {
    const c7 = document.getElementById('c7');
    if (!c7.classList.contains('disabled')) c7.click();
  } else if (key.keyCode == '82') {
    const c8 = document.getElementById('c8');
    if (!c8.classList.contains('disabled')) c8.click();
  } else if (key.keyCode == '65') {
    const c9 = document.getElementById('c9');
    if (!c9.classList.contains('disabled')) c9.click();
  } else if (key.keyCode == '83') {
    const c10 = document.getElementById('c10');
    if (!c10.classList.contains('disabled')) c10.click();
  } else if (key.keyCode == '68') {
    const c11 = document.getElementById('c11');
    if (!c11.classList.contains('disabled')) c11.click();
  } else if (key.keyCode == '70') {
    const c12 = document.getElementById('c12');
    if (!c12.classList.contains('disabled')) c12.click();
  } else if (key.keyCode == '90') {
    const c13 = document.getElementById('c13');
    if (!c13.classList.contains('disabled')) c13.click();
  } else if (key.keyCode == '88') {
    const c14 = document.getElementById('c14');
    if (!c14.classList.contains('disabled')) c14.click();
  } else if (key.keyCode == '67') {
    const c15 = document.getElementById('c15');
    if (!c15.classList.contains('disabled')) c15.click();
  } else if (key.keyCode == '86') {
    const c16 = document.getElementById('c16');
    if (!c16.classList.contains('disabled')) c16.click();
  }
}

function showCard() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
}
