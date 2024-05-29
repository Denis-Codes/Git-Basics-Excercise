'use strict'

function onBallClick(elBall) {
    elBall.style.width = (elBall.offsetWidth + getRandomInt(20, 61)) + 'px'
    elBall.style.height = (elBall.offsetHeight + getRandomInt(20, 61)) + 'px'
    // elBall.innerText = elBall.style.height
    if (elBall.style.height > '400px') {
        elBall.style.width = '100px'
        elBall.style.height = '100px'
    }
}