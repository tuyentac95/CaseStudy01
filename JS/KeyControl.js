// KeyControl P1
function moveSelectionP1(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
        case 80:
            pPressed();
            break;
    }
}

function rightArrowPressed() {
    gyarados.goRight(20);
}
function leftArrowPressed() {
    gyarados.goLeft(20);
}
function upArrowPressed() {
    gyarados.goUp(20);
}
function downArrowPressed() {
    gyarados.goDown(20);
}
function pPressed() {
    gyarados.roar();
    if (gyarados.getEnergy() > 0) {
        createBullet();
        gyarados_bullet_array[gyarados_bullet_array.length-1].shoot();
        gyarados.decreaseEnergy();
    }
}

//Key Control P2
function moveSelectionP2(evt) {
    switch (evt.keyCode) {
        case 65:
            aPressed();
            break;
        case 87:
            wPressed();
            break;
        case 68:
            dPressed();
            break;
        case 83:
            sPressed();
            break;
        case 72:
            hPressed();
            break;
    }
}

function dPressed() {
    lapras.goRight(20);
}
function aPressed() {
    lapras.goLeft(20);
}
function wPressed() {
    lapras.goUp(20);
}
function sPressed() {
    lapras.goDown(20);
}
function hPressed() {
    lapras.roar();
    if (lapras.getEnergy() > 0) {
        createEnemyBullet();
        lapras_bullet_array[lapras_bullet_array.length-1].shoot();
        lapras.decreaseEnergy();
        console.log(lapras.getEnergy())
    }
}
