class AttackOne extends MovableObject{
    height = 50;
    width = 50;
    speed = 20;
    // x = (world.character.x + world.character.with / 2);
    // y = (world.character.y + world.character.height / 2);
    animationImageCounter = 0;
    otherDirection = false;

    IMAGES_ATTACK = [
        './img/Mage/Fire/fire1.png',
        './img/Mage/Fire/fire2.png',
        './img/Mage/Fire/fire3.png',
        './img/Mage/Fire/fire4.png',
        './img/Mage/Fire/fire5.png',
        './img/Mage/Fire/fire6.png',
        './img/Mage/Fire/fire7.png',
        './img/Mage/Fire/fire8.png',
        './img/Mage/Fire/fire9.png',
    ]

    constructor(){
        super().loadImage('./img/Mage/Fire/fire1.png');
        this.loadImages(this.IMAGES_ATTACK);

        this.x = (world.character.x - 20 );
        this.y = (world.character.y + world.character.height /2 - 15);
        
        setTimeout(() => {
            this.moveAttack(); 
        }, 50);
        
    }

    chooseDirection(){
        if (world.character.otherDirection == true) {
            this.otherDirection = true;
        }else{
            this.otherDirection = false;
        }
    }

    moveAttack(){
        console.log('moveAttack function')
        this.chooseDirection();

        let animateAttackOne = setInterval(() => {
            let path = this.IMAGES_ATTACK[this.animationImageCounter];
            this.img = this.imgCache[path];
            console.log(this.x);
            console.log(this.y);

            if (this.otherDirection = true) {
                this.moveLeft();
            }

            if (this.otherDirection = false){
                this.moveRight();
                console.log('projectile moving right');
            }

            if (this.animationImageCounter == this.IMAGES_ATTACK.length) {
                this.removeProjectile(this);
                clearInterval(animateAttackOne);
            }

            this.animationImageCounter ++;
        }, 1000/20);
    }
}