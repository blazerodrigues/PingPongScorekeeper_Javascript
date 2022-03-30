//Creating p1 and p2 objects (player1 and player2 respectively)
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        if (player.score !== winningScore) { //will allow to increment till winning score is reached
            player.score += 1;

            if (player.score === winningScore) {
                isGameOver = true;
                player.display.classList.add("has-text-success");
                opponent.display.classList.add("has-text-danger");
                player.button.disabled = true;
                opponent.button.disabled = true;
            }

            player.display.textContent = player.score;
        }
    }
}

p1.button.addEventListener("click", function () {
    updateScores(p1,p2);
})

p2.button.addEventListener("click", function () {
    updateScores(p2,p1);
})

//change event compares initial and after blur values. triggered if the value changes
winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;

    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }

}
