let openedCards = [];
const body = document.querySelector('body');
const memoryGame = document.querySelector('.memory-game');
const congratz = document.querySelector('.congratz');
const audioDone = new Audio('sounds/done.mp3')

function countCards() {
    openedCards.push(firstCard, secondCard);

    console.log(openedCards);

    if (openedCards.length === 16) {
        setTimeout(() => {
            congratz.classList.toggle('visibility');
            body.classList.toggle('opacity');
            memoryGame.classList.toggle('opacity');
            audioDone.play();
        }, 1000);
    }
}