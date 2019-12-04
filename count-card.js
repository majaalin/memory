function countCards() {
    openedCards.push(firstCard, secondCard);

    if (openedCards.length === 16) {
        setTimeout(() => {
            congratz.classList.toggle('visibility');
            audioDone.play();
        }, 1000);
    }
}