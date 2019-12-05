const audioYay = new Audio('sounds/yay.wav');

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    setTimeout(() => {
        audioYay.play();
    }, 300);
   
    countCards()
    resetBoard();
}
