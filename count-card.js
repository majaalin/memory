let openedCards = [];
const congratz = document.querySelector('.congratz');
const audioDone = new Audio('sounds/done.mp3')

function countCards() {
    openedCards.push(firstCard, secondCard);

    console.log(openedCards);

    if (openedCards.length === 16) {
        setTimeout(() => {
            congratz.classList.toggle('visibility');
            audioDone.play();
        }, 1000);
    }
}