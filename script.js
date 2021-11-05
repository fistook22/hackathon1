let click = 0;
let outOfTime = false;
let high = document.getElementById("high");
let tap = document.getElementById("tap");
let score = document.getElementById("score");
let reset = document.getElementById("reset");
let timerTag = document.getElementById("timer");


let time = 5;
tap.addEventListener("click", (e) => {
    if (click === 0) {
        timer()
    }
    if (!outOfTime) {
        click += 1;
        document.getElementById("score").innerHTML = click;

    }
});

function timer() {
    let timerId = setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML = time + "s";
        if (time === 0) {
            clearInterval(timerId);
            document.getElementById("timer").innerHTML = "Time's up!";
            outOfTime = true;
            setHigh()
        }
    }, 1000);
}

function setHigh() {
    console.log(score, click)
    if (parseInt(high.innerText) <= click) {
        high.innerHTML = click;
    }
}

reset.addEventListener("click", (e) => {
    time = 5;
    click = 0;
    outOfTime = false;
    timerTag.innerHTML = time + "s";
    score.innerHTML = click;
})