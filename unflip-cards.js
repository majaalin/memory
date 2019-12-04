function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.toggle('flip');
        secondCard.classList.toggle('flip');
    
    resetBoard();
    }, 1500);
}