function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
   
    countCards()
    resetBoard();
    setTimeout(() => {
        audioYay.play();
    }, 500);

}