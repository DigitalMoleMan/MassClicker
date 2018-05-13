/*
Mass Clicker - script
*/

//money
var resAmount = 0;

/*Worker Units*/
var workerAmount = 0;
var workerBuyCost = 10;

/*Banker Units (Clicker Upgrades)*/
var clickerUpgradeAmount = 0;
var clickerMultiplier = 1;
var clickerUpgradeCost = 1000;

//adds money on click
function addRes() {
    resAmount += (1 * clickerMultiplier);
}

//adds a worker and increases the worker price uppon passing a money check
function buyWorker() {
    if (resAmount >= workerBuyCost) {
        resAmount -= workerBuyCost;
        workerAmount += 1;
        workerBuyCost += (workerAmount * 2);
    }
}

function buyClickerUpgrade() {
    if (resAmount >= clickerUpgradeCost) {
        resAmount -= clickerUpgradeCost;
        clickerUpgradeAmount += 1;
        clickerMultiplier *= 2;
        clickerUpgradeCost *= clickerMultiplier;
    }
}
//timer for how often workers produce money
setInterval(gameTick, 10);

function gameTick() {
    resAmount += ((workerAmount * clickerMultiplier) / 100);
}

//updates all values seen on screen
var updateSpeed = setInterval(updateValues, 10);

function updateValues(){
    document.getElementById("res_amount").innerHTML ="$ " + Math.round(resAmount);
    document.getElementById("worker_price").innerHTML ="$ " + workerBuyCost;
    document.getElementById("worker_amount").innerHTML = workerAmount;
    document.getElementById("clicker_upgrade_amount").innerHTML = clickerUpgradeAmount;
    document.getElementById("clicker_upgrade_price").innerHTML ="$ " + clickerUpgradeCost;
}

function dev() {
    resAmount = 100000;
}