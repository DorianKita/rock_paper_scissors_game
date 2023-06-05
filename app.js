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
const btn = document.querySelector(".start");

function handSelection() {
    hands.forEach(hand => hand.style.boxShadow = "")
    game.playerHand = this.dataset.option;
    this.style.boxShadow = "0 0 0 6px pink";
};

hands.forEach(hand => {
    hand.addEventListener("click", handSelection)
});

function aiChoice() {
    const index = Math.floor(Math.random() * 3)
    const aiHand = hands[index].dataset.option
    return aiHand
};

function checkResult(player, ai) {
    if (player == ai) {
        return "draw"
    } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
        return "win"
    } else {
        return "loss"
    };
};

function startGame() {
    if (!game.playerHand) return alert("Choose your hand!");

    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);

};

btn.addEventListener("click", startGame);