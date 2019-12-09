// This will run when you click on the play-again button
function startOver() {
    // Removes the play-again button and change back the opacity
    playAgain.classList.toggle("visible");
    body.classList.toggle("opacity");
    memoryGame.classList.toggle("opacity");

    // Make the counter start over
    openedCards = [];

    // Make all the cards flip back again
    cards.forEach(card => card.classList.toggle("flip"));

    // Shuffle all the cards
    shuffle();

    // Make card flip when you click on them
    cards.forEach(card => card.addEventListener("click", flipCard));
}
