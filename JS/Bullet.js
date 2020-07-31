let Bullet = function(object,shooter,enemy,srcGoRight,srcGoLeft) {
    let _thisRef = this;
    this.shooter = shooter;
    this.image = object;
    this.enemy = enemy;
    this.speed = 35;

    this.setSpeed = function (speed) {
        this.speed = speed;
    }

    this.shoot = function () {
        if (this.shooter.directionX() === 'right') {
            this.image.src = srcGoRight;
            this.x = this.shooter.getLeft()+140;
            this.y = this.shooter.getTop()+85;

            setTimeout(function () {
                ctx.drawImage(_thisRef.image, _thisRef.x, _thisRef.y, 84, 58);
                let timerId = setInterval(function () {
                    ctx.clearRect(_thisRef.x, _thisRef.y, 84, 58);
                    _thisRef.x += _thisRef.speed;
                    if (_thisRef.isHit()) {_thisRef.enemy.decreaseHP();}
                    if ((_thisRef.isHit()) || (_thisRef.x > canvas.width)){
                        ctx.clearRect(_thisRef.x, _thisRef.y, 84, 58);
                        clearInterval(timerId);
                    } else {
                        ctx.drawImage(_thisRef.image, _thisRef.x, _thisRef.y, 84, 58);
                    }
                }, 50)
            }, 680)

        } else {
            this.image.src = srcGoLeft;
            this.x = this.shooter.getLeft()-50;
            this.y = this.shooter.getTop()+85;

            setTimeout(function () {
                ctx.drawImage(_thisRef.image, _thisRef.x, _thisRef.y, 84, 58);
                let timerId = setInterval(function () {
                    ctx.clearRect(_thisRef.x, _thisRef.y, 84, 58);
                    _thisRef.x -= _thisRef.speed;
                    if (_thisRef.isHit()) {_thisRef.enemy.decreaseHP();}
                    if ((_thisRef.isHit()) || (_thisRef.x < 0)) {
                        ctx.clearRect(_thisRef.x, _thisRef.y, 84, 58);
                        clearInterval(timerId);
                    } else {
                        ctx.drawImage(_thisRef.image, _thisRef.x, _thisRef.y, 84, 58);
                    }
                }, 50)
            }, 680)
        }
    }

    this.isHit = function () {
        if (((this.enemy.getLeft() + 60) < (this.x + this.image.width))
            && ((this.enemy.getLeft() + 120) > (this.x + this.image.width))
            && ((this.enemy.getTop() + 90) < (this.y + this.image.height))
            && ((this.enemy.getTop() + 180) > (this.y + this.image.height)))
        {
            return true;
        }
    }
}