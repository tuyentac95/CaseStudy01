let Character = function (id,srcGoRight,srcGoLeft,srcRoarRight,srcRoarLeft) {
    let _thisRef = this;
    this.character = document.getElementById(id);
    this.x = parseInt(this.character.style.left);
    this.y = parseInt(this.character.style.top);

    // HP setting
    this.setHP = function (HP) {
        this.HP = HP;
        this.maxHP = HP;
    }
    this.getHP = function () {
        return this.HP;
    }
    this.decreaseHP = function () {
        if (this.getHP() > 0) {
            this.HP -= 10;
            this.drawHPBar();
        }
    }
    this.isKnocked = function () {
        if (this.getHP() > 0) {
            return false;
        } else return true;
    }
    this.setHPPosition = function (x, y) {
        this.HPPositionX = x;
        this.HPPositionY = y;
    }
    this.drawHPBar = function () {
        // ctx.rect(this.HPPositionX-1, this.HPPositionY+1, 22, -2.5*(this.maxHP+0.5));
        // ctx.stroke();
        ctx.clearRect(this.HPPositionX, this.HPPositionY,20,-2.5*(this.maxHP));
        if (this.HP < 0.5*this.maxHP) {
            ctx.fillStyle = 'red';
        } else {ctx.fillStyle = 'green';}
        ctx.fillRect(this.HPPositionX, this.HPPositionY,20,-2.5*this.getHP());
    }

    // Energy setting
    this.maxEnergy = 100;
    this.setEnergy = function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.increaseEnergy = function () {
        if (this.getEnergy() < this.maxEnergy) {
            this.energy += 10;
            this.drawEnergyBar();
        }
    }
    this.decreaseEnergy = function () {
        if (this.getEnergy() > 0) {
            this.energy -= 10;
            this.drawEnergyBar();
        }
    }
    this.drawEnergyBar = function () {
        this.EnergyPositionX = this.HPPositionX + 30;
        this.EnergyPositionY = this.HPPositionY;
        // ctx.rect(this.EnergyPositionX-1, this.EnergyPositionY+1, 22, -2.5*(this.maxEnergy+0.75));
        // ctx.stroke();
        ctx.clearRect(this.EnergyPositionX, this.EnergyPositionY, 20, -2.5*this.maxEnergy);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.EnergyPositionX, this.EnergyPositionY, 20, -2.5*this.energy);
    }

    // Basic Info
    this.setSourceImage = function (src) {
        this.character.src = src;
    }
    this.directionX = function () {
        if (this.character.src.match('right')) {
            return 'right';
        } else return 'left';
    }
    this.getLeft = function () {
        return parseInt(this.character.style.left);
    }
    this.getTop = function () {
        return parseInt(this.character.style.top);
    }
    this.setLeft = function () {
        this.character.style.left = this.x + 'px';
    }
    this.setTop = function () {
        this.character.style.top = this.y + 'px';
    }
    this.getWidth = function () {
        return this.character.width;
    }
    this.getHeight = function () {
        return this.character.height;
    }

    // Movements
    this.goRight = function (value) {
        if (this.directionX() === 'left') {
            this.character.src = srcGoRight;
        }
        if (this.x + this.getWidth() < canvas.width) {
            this.x += value;
            this.setLeft();
        }
    }
    this.goLeft = function (value) {
        if (this.directionX() === 'right') {
            this.character.src = srcGoLeft;
        }
        if (this.x > 0) {
            this.x -= value;
            this.setLeft();
        }
    }
    this.goUp = function (value) {
        if (this.y > 0) {
            this.y -= value;
            this.setTop();
        }
    }
    this.goDown = function (value) {
        if (this.y + this.getHeight() < canvas.height) {
            this.y += value;
            this.setTop();
        }
    }
    this.roar = function () {
        if (this.directionX() === 'right') {
            this.character.src = srcRoarRight;
            setTimeout(function () {
                _thisRef.character.src = srcGoRight;
            },1500)
        } else {
            this.character.src = srcRoarLeft;
            setTimeout(function () {
                _thisRef.character.src = srcGoLeft;
            }, 1500);
        }
    }
}