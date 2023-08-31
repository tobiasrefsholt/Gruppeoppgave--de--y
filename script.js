// Model

const app = document.getElementById('app')
let seaLevel = 20;
let scurvy = 0;
let lastSeaLevel;
let lastScurvy;


// View

updateView();

function updateView() {
    app.innerHTML = /*html*/`
    <div class="grid">
    <div id="header"> Fix Global Warming!</div>
        <div class="sea" style="height: ${seaLevel}%"></div>
        <div>My scurvy is: ${scurvy} </div>
        <div id="pictures">
            <div id="oranges" onclick="eat()"></div>
            <div id="greta"></div>
            <div id="snorkel"></div>
            <div id="howdare"></div>
            <div id="pump" onclick="pump()"></div>
        </div>

    </div>
    <div></div>
    <div></div>
    `
}


// Controller

let timerSea = setInterval(increaseSeaLevel, 500);
let timerScurvy = setInterval(increaseScurvy, 2500);

function increaseSeaLevel() {
    if (seaLevel >= 67) {
        gameOver();
    } else {
    lastSeaLevel = seaLevel;
    seaLevel += 1;
}
    updateView();
}


function increaseScurvy() {
    if (scurvy >= 100) {
        gameOver();
    } else {
        lastScurvy = scurvy;
        scurvy += 10;
    }
    updateView();
}

function eat() {
    scurvy = 0;
    updateView();
}

function pump(){
    seaLevel += -3;
    updateView();
}

function gameOver() {
    if(seaLevel >= 67 && lastSeaLevel < 67){
        alert("You drowned");
        updateView();
        return;
    }
    if (scurvy >= 100 && lastScurvy < 100){
        alert("You died of scurvy");
        updateView();
        return;
    }
}