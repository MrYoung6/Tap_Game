const start = document.getElementsByClassName("btn")[0];
let tap = document.getElementsByClassName("nm")[0];
let set = document.getElementById("timer");
let afterSet = document.getElementById("clock");
let topG = document.getElementById("turtle");
let middle = document.querySelector(".race");
let line = document.getElementById("finish");
let end = document.querySelector(".btn-2");

let arr = ["On your mark...", "Get set..", "Go!"];

let i = 0;

let x = 0;

let countDownTime = 30;


function startGame() {
    start.disabled = true;
    document.getElementById("top").style.display = "none";
    setTimeout(getReady, 1500);
    console.log("starting game")
};

function getReady() {
    set.style.display = "flex";
    let go = setTimeout(getReady, 1500);
    set.innerHTML = arr[i];
    i++;
    if (i === 3) {
        clearTimeout(go);
        setTimeout(countdown, 200);
     }
     start.style.display = "none";
};

let countdownIntervalId;
function countdown() {
    countdownIntervalId = setInterval(changeCountdownValue, 1000);
};

function changeCountdownValue() {
    if (countDownTime == -1) {
        clearInterval(countdownIntervalId);

    } else if (countDownTime === 0) {
        resetB4();
        document.body.onkeyup = null;
    } else {
        set.style.display = "none";
        afterSet.style.display = "flex";
        afterSet.innerHTML = countDownTime + "s";
        countDownTime--;
        document.body.onkeyup = function (e) {
            if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32) {
                addKey(e);
            }
        }
    }
    tap.style.display = "flex";
};

function addKey(e) {
    x++;
    renderTaps(e);
    moveIt(e);
    if (x === 222) {
        clearInterval(countdownIntervalId);
        resetB4();
    }
};
function renderTaps(e) {
    tap.innerHTML = x;
};

function moveIt(e) {
    moveRight(topG);
};

function moveRight(topG) {
    topG.style.marginLeft = x * 3 + "px";
};



function resetB4() {
    document.getElementById("top").style.display = "none";
    middle.style.display = "none";
    tap.style.display = "flex";
    document.body.onkeyup = null;
    set.style.display = "none";
    afterSet.style.display = "none";
    start.style.display = "none";
    end.style.display = "block";
};

function resetAfter() {
    window.location.reload();
    start.disabled = true
    return false;
};




