let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

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

function guest1() {
    guestScore +=1
    guestDisplay.textContent = guestScore
}

function guest2() {
    guestScore +=2
    guestDisplay.textContent = guestScore
}

function guest3() {
    guestScore +=3
    guestDisplay.textContent = guestScore
}

function reset() {
    homeScore =0
    homeDisplay.textContent = homeScore
    guestScore =0
    guestDisplay.textContent = guestScore
}