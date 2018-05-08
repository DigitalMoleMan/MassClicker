/*
Mass Clicker - script
*/
var resAmount = 0;

/*Worker Units*/
var workerAmount = 0;
var workerBuyCost = 10;

var workerUpgrades = 0;
var workerUpgradeCost = 3;


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
    resAmount += (workerAmount * (workerUpgrades + 1));
}

function upgradeWorker() {
    if (workers >= upgradeCost) {
        workers -= upgradeCost;        
    }
}

var updateSpeed = setInterval(updateValues, 1);

function updateValues(){
    document.getElementById("res_amount").innerHTML = resAmount + " RES";
    document.getElementById("workers_c").innerHTML = "Cost: " + workerBuyCost + " RES";
    document.getElementById("workers_a").innerHTML = "Have: " + workerAmount;
}

function dev() {
    res = res + 999999;
}
