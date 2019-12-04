// do the card match?

function checkForMatch() {
    // it's a match
    if (firstCard.dataset.framework ===
    secondCard.dataset.framework) {
        disableCards() 
    } 
    // it's not a match
    else {
        unflipCards()
    }
}