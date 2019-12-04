function checkForMatch() {
    if (firstCard.dataset.framework ===
    secondCard.dataset.framework) {
        disableCards() 
    } else {
        unflipCards()
    }
}