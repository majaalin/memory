const cards = document.querySelectorAll('.memory-card');
const audioClick = new Audio('sounds/click.mp3');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


// When you click on a card it will flip and you will hear a sound
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    audioClick.play();

        // If hasFlippedCard is false the card you click on will be the firstCard
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;

        // If hasFlippedCard is true the card you click on will be the secondCard
        }   else {
                hasFlippedCard = false;
                secondCard = this;

                // After clicking on two cards the checkForMatch will run
                checkForMatch();
            }
}


// The function flipCard will work on each cards and start when you click on a card
cards.forEach(card => card.addEventListener('click', flipCard));