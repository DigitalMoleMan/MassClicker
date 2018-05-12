/*
Mass Clicker - script
*/

//money
var resAmount = 0;

/*Worker Units*/
var workerAmount = 0;
var workerBuyCost = 10;

//adds money on click
function addRes() {
    resAmount += 1;
}

//adds a worker and increases the worker price uppon passing a money check
function buyWorker() {
    if (resAmount >= workerBuyCost) {
        resAmount -= workerBuyCost;
        workerAmount += 1;
        workerBuyCost += (workerAmount * workerAmount);
    }
}
//timer for how often workers produce money
var tickSpeed = setInterval(gameTick, 1000);

function gameTick() {
    resAmount += workerAmount;
}

//updates all values seen on screen
var updateSpeed = setInterval(updateValues, 10);

function updateValues(){
    document.getElementById("res_amount").innerHTML ="$ " + resAmount;
    document.getElementById("worker_price").innerHTML ="$ " + workerBuyCost;
    document.getElementById("worker_amount").innerHTML = workerAmount;
}