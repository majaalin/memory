//Function that makes cards turn on click

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

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