let homeDisplay = document.getElementById("home-score")
let awayDisplay = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

function home1() {
    homeScore +=1
    homeDisplay.textContent = homeScore
}

function home2() {
    homeScore +=2
    homeDisplay.textContent = homeScore
}

function home3() {
    homeScore +=3
    homeDisplay.textContent = homeScore
}

function away1() {
    awayScore +=1
    awayDisplay.textContent = awayScore
}

function away2() {
    awayScore +=2
    awayDisplay.textContent = awayScore
}

function away3() {
    awayScore +=3
    awayDisplay.textContent = awayScore
}

function reset() {
    homeScore =0
    homeDisplay.textContent = homeScore
    awayScore =0
    awayDisplay.textContent = awayScore
}