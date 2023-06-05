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
    } else if ((player === "Paper" && ai === "Rock") || (player === "Rock" && ai === "Scissors") || (player === "Scissors" && ai === "Paper")) {
        return "win"
    } else {
        return "loss"
    };
};

function publishResult(player, ai, result) {
    document.querySelector("[data-summary=your-choice]").textContent = player;
    document.querySelector("[data-summary=ai-choice]").textContent = ai;
    document.querySelector(".numbers span").textContent = gameSummary.numbers

    if (result === "win") {
        gameSummary.wins++
        document.querySelector(".wins span").textContent = gameSummary.wins
        document.querySelector("[data-summary=who-win]").style.color = "#8fbf60"
        document.querySelector("[data-summary=who-win]").textContent = "You won!"
    } else if (result === "loss") {
        gameSummary.losses++
        document.querySelector(".losses span").textContent = gameSummary.losses
        document.querySelector("[data-summary=who-win]").style.color = "red"
        document.querySelector("[data-summary=who-win]").textContent = "You lose!"
    } else {
        gameSummary.draws++
        document.querySelector(".draws span").textContent = gameSummary.draws
        document.querySelector("[data-summary=who-win]").style.color = "grey"
        document.querySelector("[data-summary=who-win]").textContent = "Draw!"
    }
};

function startGame() {
    if (!game.playerHand) return alert("Choose your hand!");
    gameSummary.numbers++
    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult)
    publishResult(game.playerHand, game.aiHand, gameResult);
};

btn.addEventListener("click", startGame);