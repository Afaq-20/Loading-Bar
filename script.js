const percentEl = document.querySelector(".percent")

const barEl = document.querySelector(".front-bar")

let percentage = 0

function percentUpdate() {
    percentEl.innerText = `${percentage}%`
    if (percentage >= 100) {
        myStopFunction();
    }
    barUpdate();
    percentage++;

}
const myInterval = setInterval(percentUpdate, 50)

function barUpdate() {
    barEl.style.width = `${percentage}%`
}

function myStopFunction() {
    clearInterval(myInterval);
}