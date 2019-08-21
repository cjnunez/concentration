const card = document.getElementsByClassName('card');
let cards = [...card];
const deck = document.getElementById('deck');
const matchedCard = document.getElementsByClassName('match');

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
      console.log(item);
      deck.appendChild(item);
    });
    cards[i].classList.remove('show', 'open', 'matched', 'disabled');
  }
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

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == '49') {
    document.getElementById('c1').click();
  } else if (key.keyCode == '50') {
    document.getElementById('c2').click();
  } else if (key.keyCode == '51') {
    document.getElementById('c3').click();
  } else if (key.keyCode == '52') {
    document.getElementById('c4').click();
  } else if (key.keyCode == '81') {
    document.getElementById('c5').click();
  } else if (key.keyCode == '87') {
    document.getElementById('c6').click();
  } else if (key.keyCode == '69') {
    document.getElementById('c7').click();
  } else if (key.keyCode == '82') {
    document.getElementById('c8').click();
  } else if (key.keyCode == '65') {
    document.getElementById('c9').click();
  } else if (key.keyCode == '83') {
    document.getElementById('c10').click();
  } else if (key.keyCode == '68') {
    document.getElementById('c11').click();
  } else if (key.keyCode == '70') {
    document.getElementById('c12').click();
  } else if (key.keyCode == '90') {
    document.getElementById('c13').click();
  } else if (key.keyCode == '88') {
    document.getElementById('c14').click();
  } else if (key.keyCode == '67') {
    document.getElementById('c15').click();
  } else if (key.keyCode == '86') {
    document.getElementById('c16').click();
  }
}

function showCard() {
  this.classList.toggle('open');
  this.classList.toggle('show');
  this.classList.toggle('disabled');
}
