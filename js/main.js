'use strict'

function onBallClick(elBall) {
    elBall.style.width = (elBall.offsetWidth + 50) + 'px';
    elBall.style.height = (elBall.offsetHeight + 50) + 'px';
    // elBall.innerText = elBall.style.height
    if (elBall.style.height > '400px') {
        elBall.style.width = '100px';
        elBall.style.height = '100px';
    }
}