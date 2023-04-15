class Character extends Creature{
    world;
    recource = 100;
    specialRecource = 100;
    height = 150;
    width = 150;
    x = 101;
    y = 100;
    speed = 3;
    thresholdReached;
    idleIntervalSet = false;
    idleImageCount;
    IMAGES_RUN = [
        './img/Mage/Run/run1.png',
        './img/Mage/Run/run2.png',
        './img/Mage/Run/run3.png',
        './img/Mage/Run/run4.png',
        './img/Mage/Run/run5.png',
        './img/Mage/Run/run6.png',
        './img/Mage/Run/run7.png',
        './img/Mage/Run/run8.png'
    ];
    IMAGES_IDLE = [
        './img/Mage/Idle/idle1.png',
        './img/Mage/Idle/idle2.png',
        './img/Mage/Idle/idle3.png',
        './img/Mage/Idle/idle4.png',
        './img/Mage/Idle/idle5.png',
        './img/Mage/Idle/idle6.png',
        './img/Mage/Idle/idle7.png',
        './img/Mage/Idle/idle8.png',
        './img/Mage/Idle/idle9.png',
        './img/Mage/Idle/idle10.png',
        './img/Mage/Idle/idle11.png',
        './img/Mage/Idle/idle12.png',
        './img/Mage/Idle/idle13.png',
        './img/Mage/Idle/idle14.png'
    ];
    IMAGES_JUMPING = [
        './img/Mage/Jump/jump1.png',
        './img/Mage/Jump/jump2.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump4.png',
        './img/Mage/Jump/jump5.png',
        './img/Mage/Jump/jump6.png',
        './img/Mage/Jump/jump7.png',
    ];
    currentIMG = 0;
    speedY = 0;
    acceleration = 2;
    jumpAnimationCounter = 0;

    constructor(){
        super().loadImage('./img/Mage/Idle/Idle1.png');
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.characterRun();
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                console.log(this.speedY);
                this.y -= this.speedY;
                this.speedY -=this.acceleration;
                if (this.y >= 310) {
                    this.speedY = 0;
                    this.jumpAnimationCounter = 0;
                }
            }
        }, 20);
    }

    isAboveGround(){
        return this.y < 310;
    }

    characterRun(){
        setInterval(() => {
            if (keyboard.LEFT == false && keyboard.RIGHT == false && this.idleImageCount == 0 && !this.isAboveGround()) {
                this.loadImage('./img/Mage/Idle/Idle1.png');
            }

            if (keyboard.LEFT == true) {
                if (this.x >= -20) {
                    this.moveLeft();
                }
                this.otherDirection = true;
                this.thresholdReached = 0;
            }

            if (keyboard.RIGHT == true) {
                if (this.x <= 2140) {
                   this.moveRight();
                }
                this.otherDirection = false;
                this.thresholdReached = 1;
            }

            if (keyboard.UP == true  && !this.isAboveGround()) {
                this.jump();
            }

            if (keyboard.SPACE == true  && !this.isAboveGround()) {
                this.jump();
            }

            if (this.x + this.world.camera_x <= 100  && this.thresholdReached !== 1 && this.x >= 100) {
                this.world.camera_x = -this.x + 101;
                this.thresholdReached = true;
            }
            if (this.x + this.world.camera_x >= 350  && this.thresholdReached == 1 && this.x <= 2000) {
                this.world.camera_x = -this.x + 351;
                this.thresholdReached = true;
            }
            
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround() && this.jumpAnimationCounter < this.IMAGES_JUMPING.length) {
                let i = this.currentIMG % this.IMAGES_JUMPING.length;
                let path = this.IMAGES_JUMPING[i];
                this.img = this.imgCache[path];
    
                this.currentIMG ++; 
                this.jumpAnimationCounter ++;
            }else{
                if (keyboard.RIGHT == true || keyboard.LEFT == true) {
                    this.playAnimation(this.IMAGES_RUN);
                }
            }
        }, 80);

        setInterval(() => {
            if (keyboard.RIGHT == false && keyboard.LEFT == false && this.idleIntervalSet == false && !this.isAboveGround()) {
                this.loadImage('./img/Mage/Idle/Idle1.png');
                this.idleIntervalSet = true;
                let idleInterval = 3000 + Math.random() * 5000;
                this.idleImageCount = 0;
                setTimeout(() => {
                    let idleCharacter = setInterval(() => {
                        let path = this.IMAGES_IDLE[this.idleImageCount];
                        this.img = this.imgCache[path];

                        if (this.idleImageCount == this.IMAGES_IDLE.length || keyboard.LEFT == true || keyboard.RIGHT == true || keyboard.UP == true) {
                            this.idleIntervalSet = false;
                            this.idleImageCount = 0;
                            this.loadImage('./img/Mage/Idle/Idle1.png');
                            clearInterval(idleCharacter);
                        }

                        this.idleImageCount++;
                    }, 80);
                }, idleInterval);
            }
        }, 80);
    }

    jump(){
        this.speedY = 28;
    }

    attackTwo(){

    }

    
}