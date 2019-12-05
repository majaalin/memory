let openedCards = [];
const body = document.querySelector('body');
const memoryGame = document.querySelector('.memory-game');
const playAgain = document.querySelector('.play-again');
const audioDone = new Audio('sounds/done.mp3')

function countCards() {
    openedCards.push(firstCard, secondCard);

    console.log(openedCards);

    if (openedCards.length === 16) {
        setTimeout(() => {
            playAgain.classList.toggle('visible');
            body.classList.toggle('opacity');
            memoryGame.classList.toggle('opacity');
            audioDone.play();
        }, 1000);
    }
}