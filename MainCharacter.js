let MainCharacter = function (id,srcGoRight,srcGoLeft,srcRoarRight,srcRoarLeft,srcBiteRight,srcBiteLeft) {
    let _thisRef = this;
    this.character = document.getElementById(id);
    this.x = parseInt(this.character.style.left);
    this.y = parseInt(this.character.style.top);
    this.setSourceImage = function (src) {
        this.character.src = src;
    }
    this.direction = function () {
        if (this.character.src.match('right')) {
            return 'right';
        } else return 'left';
    }
    this.getWidth = function () {
        return this.character.width;
    }
    this.getHeight = function () {
        return this.character.height;
    }
    this.setLeft = function () {
        this.character.style.left = this.x + 'px';
    }
    this.setTop = function () {
        this.character.style.top = this.y + 'px';
    }
    this.goRight = function (value) {
        if (this.direction() === 'left') {
            this.character.src = srcGoRight;
        }
        if (this.x + this.getWidth() < canvas.width) {
            this.x += value;
            this.setLeft();
        }
    }
    this.goLeft = function (value) {
        if (this.direction() === 'right') {
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
        if (this.direction() === 'right') {
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
    this.bite = function () {
        if (this.direction() === 'right') {
            this.character.src = srcBiteRight;
            setTimeout(function () {
                _thisRef.character.src = srcGoRight;
            },1500)
        } else {
            this.character.src = srcBiteLeft;
            setTimeout(function () {
                _thisRef.character.src = srcGoLeft;
            }, 1500);
        }
    }
}