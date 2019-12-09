// All card will change position
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

// The shuffle function will run everytime you refresh the page
window.onload = shuffle();
