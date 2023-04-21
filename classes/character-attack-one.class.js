class AttackOne extends MovableObject{
    height = 50;
    with = 50;
    speed = 10;
    animationImageCounter = 0;

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

        this.x = world.character.x + world.character.with / 2;
        this.y = world.character.y + world.character.height / 2;

        
        this.moveAttack();
    }

    chooseDirection(){
        if (world.character.otherDirection == true) {
            this.otherDirection = true;
        }else{
            this.otherDirection = false;
        }
    }

    moveAttack(){
        this.chooseDirection();
        let animateAttackOne = setInterval(() => {
            
            let path = this.IMAGES_ATTACK[this.animationImageCounter];
            this.img = this.imgCache[path];

            if (this.otherDirection = true) {
                this.moveLeft();
            }

            if (this.otherDirection = false){
                this.moveRight();
            }

            if (this.animationImageCounter == this.IMAGES_ATTACK.length) {
                removeProjectile(this);
                clearInterval(animateAttackOne);
            }

            this.animationImageCounter ++;
        }, 1000/60);
    }
}