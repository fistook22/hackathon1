// let tap = document.getElementById("tap");
// let score = document.getElementById("score");
// let high = document.getElementById("high");
// let result = document.getElementById("result");
// let clicks = 0;
// let time = 0;



// function timer() {
//     time--;
//     if (time -= 0) {
//         endGame()

//     }

// }
// document.getElementById("tap").addEventListener("click", (e) => {
//     setInterval(() => {
//         timer()
//     }, 5000);
//     clicks += 1;
//     document.getElementById("tap").innerHTML = clicks;
// });

// function endGame() {
//     score = alert(clicks)
// }


let click = 0;
let outOfTime = false;
let high = document.getElementById("high");
let tap = document.getElementById("tap");
let score = document.getElementById("score");
let reset = document.getElementById("reset");


// function hi() {
//     if (!outOfTime) {
//         click += 1;
//         document.getElementById("score").innerHTML = click;

//     }
// }
let time = 5; //time in seconds
tap.addEventListener("click", (e) => {
    timer
    if (!outOfTime) {
        click += 1;
        document.getElementById("score").innerHTML = click;

    }
});
let timer = setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = time + "s";
    if (time == 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's up!";
        outOfTime = true;
    }
}, 1000);

function setHigh() {
    if (score <= click) {
        high.innerHTML(click);
    }
}
reset.addEventListener("click", (e) => {

})