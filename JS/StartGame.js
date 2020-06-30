function startGamePvP() {
    window.addEventListener('keydown', moveSelectionP1);
    window.addEventListener('keydown', moveSelectionP2);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    gyarados.setSourceImage('Image/Gyarados_right_move.gif');
    gyarados.setHP(200);
    gyarados.setHPPosition(20, 580);
    gyarados.setEnergy(50);

    lapras.setSourceImage('Image/Lapras_left_move.gif');
    lapras.setHP(200);
    lapras.setHPPosition(1230, 580);
    lapras.setEnergy(50);

    createRazz();
    razz_array[razz_array.length-1].appear();

    let CreateRazz = setInterval(function () {
        createRazz();
        razz_array[razz_array.length-1].appear();
    }, 4200);

    let CheckRazz = setInterval(function () {
        for (let i=0; i < razz_array.length; i++) {
            if (razz_array[i].status !== 'eaten') {
                razz_array[i].appear();
                razz_array[i].berryEaten(gyarados);
                razz_array[i].berryEaten(lapras);
            }
        }
    },5)

    let TimeId = setInterval(function () {
        gyarados.drawHPBar();
        gyarados.drawEnergyBar();
        lapras.drawHPBar();
        lapras.drawEnergyBar();
        if (gyarados.isKnocked()) {
            alert('Lapras Win');
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        } else if (lapras.isKnocked()) {
            alert('Gyarados Win');
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        }
    },5);
}

function startGame() {
    window.addEventListener('keydown', moveSelectionP1);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    gyarados.setSourceImage('Image/Gyarados_right_move.gif');
    gyarados.setHP(100);
    gyarados.setHPPosition(20, 580);
    gyarados.setEnergy(30);

    lapras.setSourceImage('Image/Lapras_left_move.gif');
    lapras.setHP(200);
    lapras.setHPPosition(1260, 580);

    createRazz();
    razz_array[razz_array.length-1].appear();

    let time = 0;
    let LaprasMovement = setInterval(function () {
        if (time < 100) {
            lapras.goUp(2);
        }
        if ((time < 400) && (time >= 100)) {
            lapras.goLeft(3);
        }
        if ((time >= 400) && (time < 800)) {
            lapras.goRight(0);
            lapras.goDown(2);
        }
        if ((time >= 800) && (time < 1100)) {
            lapras.goRight(3);
        }
        if ((time >= 1100) && (time < 1400)) {
            lapras.goLeft(0);
            lapras.goUp(2);
        }
        time++;
        if (time >= 1400) {
            time = 0;
        }
    }, 50);

    let LaprasAttack = setInterval(function () {
        lapras.roar();
        createEnemyBullet();
        lapras_bullet_array[lapras_bullet_array.length-1].shoot();
    },3000);

    let CreateRazz = setInterval(function () {
        createRazz();
        razz_array[razz_array.length-1].appear();
    }, 5000);

    let CheckRazz = setInterval(function () {
        for (let i=0; i < razz_array.length; i++) {
            if (razz_array[i].status !== 'eaten') {
                razz_array[i].appear();
                razz_array[i].berryEaten(gyarados);
            }
        }
    },5)

    let TimeId = setInterval(function () {
        gyarados.drawHPBar();
        gyarados.drawEnergyBar();
        lapras.drawHPBar();
        if (gyarados.isKnocked()) {
            alert('Game Over');
            clearInterval(LaprasMovement);
            clearInterval(LaprasAttack);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        } else if (lapras.isKnocked()) {
            alert('You Win');
            clearInterval(LaprasMovement);
            clearInterval(LaprasAttack);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        }
    },5);
}

function howToPlay() {
    alert('P1: Press arrow key to move. Press P to shoot');
    alert('P2: Press A S D W to move. Press H to shoot');
    alert('Eat berry to get more energy');
}