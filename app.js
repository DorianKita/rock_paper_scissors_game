const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
};

const game = {
    playerHand: "",
    aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
    hands.forEach(hand => hand.style.boxShadow = "")
    game.playerHand = this.dataset.option;
    this.style.boxShadow = "0 0 0 6px pink";
}

hands.forEach(hand => {
    hand.addEventListener("click", handSelection)
})