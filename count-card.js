let openedCards = [];
const body = document.querySelector("body");
const memoryGame = document.querySelector(".memory-game");
const playAgain = document.querySelector(".play-again");
const audioDone = new Audio("sounds/done.mp3");

// Counts the pairs
function countCards() {
    // When you get a pair these cards will be pushed into the openCards array
    openedCards.push(firstCard, secondCard);

    // When it's 16 cards in the openCards array the play-again button will show, opacity change and you will hear a sound
    if (openedCards.length === 16) {
        setTimeout(() => {
            playAgain.classList.toggle("visible");
            body.classList.toggle("opacity");
            memoryGame.classList.toggle("opacity");
            audioDone.play();
        }, 1000);
    }
}
