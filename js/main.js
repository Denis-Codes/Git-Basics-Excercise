'use strict'

function onBallClick(elBall) {
    elBall.style.width = (elBall.offsetWidth + 50) + 'px';
    elBall.style.height = (elBall.offsetHeight + 50) + 'px';
    // elBall.innerText = elBall.style.height
    if (parseInt(elBall.style.height) > 400) {
        elBall.style.width = '100px';
        elBall.style.height = '100px';
    }
}