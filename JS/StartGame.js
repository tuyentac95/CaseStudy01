function startGamePvP() {
    window.addEventListener('keydown', moveSelectionP1);
    window.addEventListener('keydown', moveSelectionP2);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    let choice = +prompt("Choose character: 1. Gyarados 2. Lapras");
    switch (choice) {
        case 1:
            mainCharacter = gyarados;
            mainCharacter_bullet_array = gyarados_bullet_array;
            mainCharacter.setSourceImage('Image/Gyarados_right_move.gif');
            enemy = lapras;
            enemy_bullet_array = lapras_bullet_array;
            enemy.setSourceImage('Image/Lapras_left_move.gif');
            break;
        case 2:
            mainCharacter = lapras;
            mainCharacter_bullet_array = lapras_bullet_array;
            mainCharacter.setSourceImage('Image/Lapras_right_move.gif');
            mainCharacter.goLeft(950);
            mainCharacter.goRight(0);
            enemy = gyarados;
            enemy_bullet_array = gyarados_bullet_array;
            enemy.setSourceImage('Image/Gyarados_left_move.gif');
            enemy.goRight(950);
            enemy.goLeft(0);
            break;
    }

    mainCharacter.setHP(150);
    mainCharacter.setHPPosition(20, 580);
    mainCharacter.setEnergy(50);


    enemy.setHP(150);
    enemy.setHPPosition(1230, 580);
    enemy.setEnergy(50);

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
                razz_array[i].berryEaten(mainCharacter);
                razz_array[i].berryEaten(enemy);
            }
        }
    },25)

    let TimeId = setInterval(function () {
        mainCharacter.drawHPBar();
        mainCharacter.drawEnergyBar();
        enemy.drawHPBar();
        enemy.drawEnergyBar();
        if (mainCharacter.isKnocked()) {
            alert('enemy Win');
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        } else if (enemy.isKnocked()) {
            alert('mainCharacter Win');
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        }
    },25);
}

function startGame() {
    window.addEventListener('keydown', moveSelectionP1);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    mainCharacter = gyarados;
    mainCharacter_bullet_array = gyarados_bullet_array;
    mainCharacter.setSourceImage('Image/Gyarados_right_move.gif');
    mainCharacter.setHP(100);
    mainCharacter.setHPPosition(20, 580);
    mainCharacter.setEnergy(30);

    enemy = lapras;
    enemy_bullet_array = lapras_bullet_array;
    enemy.setSourceImage('Image/Lapras_left_move.gif');
    enemy.setHP(100);
    enemy.setHPPosition(1260, 580);

    createRazz();
    razz_array[razz_array.length-1].appear();

    let time = 0;
    let enemyMovement = setInterval(function () {
        if (time < 100) {
            enemy.goUp(2);
        }
        if ((time < 400) && (time >= 100)) {
            enemy.goLeft(3);
        }
        if ((time >= 400) && (time < 800)) {
            enemy.goRight(0);
            enemy.goDown(2);
        }
        if ((time >= 800) && (time < 1100)) {
            enemy.goRight(3);
        }
        if ((time >= 1100) && (time < 1400)) {
            enemy.goLeft(0);
            enemy.goUp(2);
        }
        time++;
        if (time >= 1400) {
            time = 0;
        }
    }, 50);

    let enemyAttack = setInterval(function () {
        enemy.roar();
        createLaprasBullet();
        enemy_bullet_array[enemy_bullet_array.length-1].shoot();
    },3000);

    let CreateRazz = setInterval(function () {
        createRazz();
        razz_array[razz_array.length-1].appear();
    }, 5000);

    let CheckRazz = setInterval(function () {
        for (let i=0; i < razz_array.length; i++) {
            if (razz_array[i].status !== 'eaten') {
                razz_array[i].appear();
                razz_array[i].berryEaten(mainCharacter);
            }
        }
    },25)

    let TimeId = setInterval(function () {
        mainCharacter.drawHPBar();
        mainCharacter.drawEnergyBar();
        enemy.drawHPBar();
        if (mainCharacter.isKnocked()) {
            alert('Game Over');
            clearInterval(enemyMovement);
            clearInterval(enemyAttack);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        } else if (enemy.isKnocked()) {
            alert('You Win');
            let nextEnemy = confirm('Move to next enemy?');
            if (nextEnemy) {
                enemy.goRight(1000 - enemy.getLeft());
                enemy.goLeft(0);
                enemy.goDown(200 - enemy.getTop());
                enemy.goUp(enemy.getTop() - 200);
                alert('Are your ready?');
                startGameLV2();
            }
            else reStart();
            clearInterval(enemyMovement);
            clearInterval(enemyAttack);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        }
    },25);
}

function startGameLV2() {
    window.addEventListener('keydown', moveSelectionP1);
    ctx.clearRect(0,0,canvas.width,canvas.height);

    mainCharacter = gyarados;
    mainCharacter_bullet_array = gyarados_bullet_array;
    mainCharacter.setSourceImage('Image/Gyarados_right_move.gif');
    mainCharacter.setHP(100);
    mainCharacter.setHPPosition(20, 580);
    mainCharacter.setEnergy(30);

    enemy = wartortle;
    enemy_bullet_array = wartortle_bullet_array;
    enemy.setSourceImage('Image/Wartortle_left_move.gif');
    enemy.setHP(150);
    enemy.setHPPosition(1260, 580);
    enemy.goLeft(0);

    createRazz();
    razz_array[razz_array.length-1].appear();

    let enemyAttack = function () {
        enemy.roar();
        createWartortleBullet();
        enemy_bullet_array[enemy_bullet_array.length-1].shoot();
    }

    let time = 0;
    let enemyMovement = setInterval(function () {
        if (time <= 80 && time % 40 == 0) {
            enemy.goLeft(0);
            enemyAttack();
        }
        if (time >= 100 && time < 160) enemy.goDown(2);
        if (time >= 160 && time <= 240 && time % 40 == 0) enemyAttack();
        if (time >= 260 && time < 320) enemy.goUp(2);
        if (time >= 320 && time <= 400 && time % 40 == 0) enemyAttack();
        if (time >= 420 && time < 480) enemy.goUp(2);
        if (time >= 480 && time <= 560 && time % 40 == 0) enemyAttack();
        if (time >= 580 && time < 640) enemy.goDown(2);
        if (time >= 640 && time <= 720 && time % 40 == 0) enemyAttack();
        if (time >= 740 && time < 840) enemy.goDown(2);
        if (time >= 840 && time <= 1040) {
            enemy.goUp(2);
            if (time % 40 == 0) enemyAttack();
        }
        if (time >= 1040 && time < 1140) enemy.goDown(2);
        if (time >= 1141) time = 0;
        time++;
    }, 50);

    let CreateRazz = setInterval(function () {
        createRazz();
        razz_array[razz_array.length-1].appear();
    }, 5000);

    let CheckRazz = setInterval(function () {
        for (let i=0; i < razz_array.length; i++) {
            if (razz_array[i].status !== 'eaten') {
                razz_array[i].appear();
                razz_array[i].berryEaten(mainCharacter);
            }
        }
    },25)

    let TimeId = setInterval(function () {
        mainCharacter.drawHPBar();
        mainCharacter.drawEnergyBar();
        enemy.drawHPBar();
        if (mainCharacter.isKnocked()) {
            alert('Game Over');
            clearInterval(enemyMovement);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        } else if (enemy.isKnocked()) {
            alert('You Win');
            clearInterval(enemyMovement);
            clearInterval(CreateRazz);
            clearInterval(CheckRazz);
            clearInterval(TimeId);
        }
    },25);
}

function howToPlay() {
    alert('P1: Press arrow key to move. Press P to shoot');
    alert('P2: Press A S D W to move. Press H to shoot');
    alert('Eat berry to get more energy');
}

function reStart() {
    window.location.reload();
}