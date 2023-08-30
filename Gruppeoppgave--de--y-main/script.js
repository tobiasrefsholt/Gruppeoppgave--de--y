// Model

const app = document.getElementById('app')
let seaLevel = 20;
let scurvy = 0;
let lastSeaLevel;


// View

updateView();

function updateView() {
    app.innerHTML = /*html*/`
    <div class="grid">
        <div class="sea" style="height: ${seaLevel}%"></div>
        <div>My scurvy is: ${scurvy}</div>
        <div id="pictures">
            <div id="oranges" onclick="eat()"></div>
            <div id="greta"></div>
            <div id="pump" onclick="pump()"></div>
        </div>

    </div>
    <div></div>
    <div></div>
    `
}


// Controller

let timerSea = setInterval(increaseSeaLevel, 500);
let timerScurvy = setInterval(increaseScurvy, 5000);

function increaseSeaLevel() {
    (seaLevel > 50) && gameOver();
    lastSeaLevel = seaLevel;
    seaLevel += 1;
    updateView();
}


function increaseScurvy() {
    scurvy += 5;
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
    if(seaLevel >=50 && lastSeaLevel <= 50){
        alert("You lose");
    } 
    updateView();
}