const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const audioClick = new Audio('sounds/click.mp3');

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    audioClick.play();


    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
        } else {
            //second click
            hasFlippedCard = false;
            secondCard = this;

            checkForMatch();
        }
    }

cards.forEach(card => card.addEventListener('click', flipCard));