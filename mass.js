/*
Mass Clicker - script
*/
var resAmount = 0;
var cps = 0;

var shopOpen = false;
/*Worker Units*/
var workerAmount = 0;
var workerBuyCost = 10;

function addRes() {
    resAmount += 1;
}

function buyWorker() {
    if (resAmount >= workerBuyCost) {
        resAmount -= workerBuyCost;
        workerAmount += 1;
        workerBuyCost += (workerAmount * workerAmount);
    }
}

var tickSpeed = setInterval(gameTick, 1000);

function gameTick() {
    resAmount += workerAmount;
}

function upgradeWorker() {
    if (workers >= upgradeCost) {
        workers -= upgradeCost;        
    }
}

var updateSpeed = setInterval(updateValues, 10);

function updateValues(){
    document.getElementById("res_amount").innerHTML ="$ " + resAmount;
    document.getElementById("worker_price").innerHTML ="$ " + workerBuyCost;
    document.getElementById("worker_amount").innerHTML = workerAmount;
}

function dev() {
    res = res + 999999;
}
