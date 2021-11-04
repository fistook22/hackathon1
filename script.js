let tap = document.getElementById("tap");
let score = document.getElementById("score");
let high = document.getElementById("high");
let result = document.getElementById("result");
let clicks = 0;
let time = 0;



function timer() {
    time--;
    if (time -= 0) {
        endGame()

    }

}
document.getElementById("tap").addEventListener("click", (e) => {
    setInterval(() => {
        timer()
    }, 5000);
    clicks += 1;
    document.getElementById("tap").innerHTML = clicks;
});

function endGame() {
    score = alert(clicks)
}