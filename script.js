// Model

const app = document.getElementById('app')
let seaLevel = 20;


// View

updateView();

function updateView() {
    app.innerHTML = /*html*/`
    <div class="grid">
        <div class="sea" style="height: ${seaLevel}%"></div>
        <div id="greta"></div>
        <div id="oranges" onclick="eat()"></div>
        <div id="pump" onclick="pump()"></div>
    </div>
    <div></div>
    <div></div>
    `
}


// Controller

function increaseSeaLevel() {
    (seaLevel > 50) && gameOver();
    seaLevel += 5;
    updateView();
}
let timer = setInterval(increaseSeaLevel, 5000);

function gameOver() {

}

function eat(){

}

function pump(){
    
}