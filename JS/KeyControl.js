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
    mainCharacter.goRight(20);
}
function leftArrowPressed() {
    mainCharacter.goLeft(20);
}
function upArrowPressed() {
    mainCharacter.goUp(20);
}
function downArrowPressed() {
    mainCharacter.goDown(20);
}
function pPressed() {
    mainCharacter.roar();
    if (mainCharacter.getEnergy() > 0) {
        if (mainCharacter == gyarados) createBullet();
        if (mainCharacter == lapras) createLaprasBullet();
        if (mainCharacter == wartortle) createWartortleBullet();
        if (mainCharacter == wailord) createWailordBullet();
        mainCharacter_bullet_array[mainCharacter_bullet_array.length-1].shoot();
        mainCharacter.decreaseEnergy();
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
    enemy.goRight(20);
}
function aPressed() {
    enemy.goLeft(20);
}
function wPressed() {
    enemy.goUp(20);
}
function sPressed() {
    enemy.goDown(20);
}
function hPressed() {
    enemy.roar();
    if (enemy.getEnergy() > 0) {
        if (enemy == gyarados) createBullet();
        if (enemy == lapras) createLaprasBullet();
        if (enemy == wartortle) createWartortleBullet();
        if (enemy == wailord) createWailordBullet();
        enemy_bullet_array[enemy_bullet_array.length-1].shoot();
        enemy.decreaseEnergy();
    }
}
