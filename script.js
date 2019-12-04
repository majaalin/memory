const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    audioClick.play();


    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
    }

cards.forEach(card => card.addEventListener('click', flipCard));