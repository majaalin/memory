function startOver(){
    playAgain.classList.toggle('visible');
    body.classList.toggle('opacity');
    memoryGame.classList.toggle('opacity');

    openedCards = [];

    cards.forEach(card => card.classList.toggle('flip'));

    shuffle();

    cards.forEach(card => card.addEventListener('click', flipCard));

} 