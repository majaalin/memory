const audioYay = new Audio('sounds/yay.wav');

// Do the card match?
function checkForMatch() {
    // It's a match
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards() 
    // It's not a match
    } else {
        unflipCards()
    }
}


// When it's a match
function disableCards() {
    // The card will not flip anymore when you click on them
    firstCard.removeEventListener('click', flipCard);  
    secondCard.removeEventListener('click', flipCard);

    // You will here a sound
    setTimeout(() => {
        audioYay.play();
    }, 300);
   
    countCards()
    resetBoard();
}


// When it's not a match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        // The card will flip back again 
        firstCard.classList.toggle('flip');
        secondCard.classList.toggle('flip');
    
    resetBoard();
    }, 1500);
}


// Make it possible to pick new cards
function resetBoard() {
    [hasFlippedCard,lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}