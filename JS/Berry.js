let Berry = function(object,srcImage) {
    this.image = object;
    this.image.src = srcImage;
    this.status = '';

    // Berry Info
    this.x = Math.floor(Math.random()*(canvas.width -200)) + 100;
    this.y = Math.floor(Math.random()*(canvas.height -200)) + 100;
    this.getLeft = function () {
        return this.x;
    }
    this.getTop = function () {
        return this.y;
    }
    this.appear = function () {
        ctx.drawImage(this.image, this.x, this.y, 50, 50);
    }
    this.disappear = function () {
        ctx.clearRect(this.x, this.y, 50, 50);
    }

    // Eaten checking
    this.isEaten = function (eater) {
        return (eater.getLeft() + 20 <= this.getLeft()) && (eater.getLeft() + eater.getWidth() >= this.getLeft() + 50)
            && (eater.getTop() + 20 <= this.getTop()) && (eater.getTop() + eater.getHeight() >= this.getTop() + 50);
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    this.berryEaten = function (eater) {
        if (this.isEaten(eater)) {
            this.disappear();
            this.setStatus('eaten');
            eater.increaseEnergy();
        }
    }
}