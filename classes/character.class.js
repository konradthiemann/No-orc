class Character extends MovableObject{
    world;
    health = 100;
    recource = 100;
    specialRecource = 100;
    height = 150;
    width = 150;
    x = 101;
    y = 306;
    speed = 3;
    thresholdReached;
    idleIntervalSet = false;
    idleImageCount;
    hurtAnimationStarted = false;
    currentIMG = 0;
    speedY = 0;
    acceleration = 1.5;
    jumpAnimationCounter = 0;
    highJumpAnimationCounter = 0;
    highJumpAnimationSet = false;
    jumpCounter = 0;
    attackImageCount = 0;
    attackAnimationStarted = false;
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
        // './img/Mage/Jump/jump1.png',
        // './img/Mage/Jump/jump2.png',
        // './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump4.png',
        './img/Mage/Jump/jump5.png',
        './img/Mage/Jump/jump6.png',
        './img/Mage/Jump/jump6.png',
        // './img/Mage/Jump/jump6.png',
        // './img/Mage/Jump/jump6.png',
        './img/Mage/Jump/jump7.png',
    ];
    IMAGES_HIGH_JUMPING = [
        // './img/Mage/High_Jump/high_jump1.png',
        // './img/Mage/High_Jump/high_jump2.png',
        // './img/Mage/High_Jump/high_jump3.png',
        // './img/Mage/High_Jump/high_jump4.png',
        './img/Mage/High_Jump/high_jump5.png',
        './img/Mage/High_Jump/high_jump6.png',
        './img/Mage/High_Jump/high_jump7.png',
        './img/Mage/High_Jump/high_jump8.png',
        './img/Mage/High_Jump/high_jump9.png',
        './img/Mage/High_Jump/high_jump10.png',
        './img/Mage/High_Jump/high_jump11.png',
        // './img/Mage/High_Jump/high_jump12.png',
    ];
    IMAGES_HURT = [
        './img/Mage/Hurt/hurt1.png',
        './img/Mage/Hurt/hurt2.png',
        './img/Mage/Hurt/hurt3.png',
        './img/Mage/Hurt/hurt4.png',
    ];
    IMAGES_ATTACK = [
        './img/Mage/Attack/attack1.png',
        './img/Mage/Attack/attack2.png',
        './img/Mage/Attack/attack3.png',
        './img/Mage/Attack/attack4.png',
        './img/Mage/Attack/attack5.png',
        './img/Mage/Attack/attack6.png',
        './img/Mage/Attack/attack7.png',
    ];
    

    constructor(){
        super().loadImage('./img/Mage/Idle/Idle1.png');
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HIGH_JUMPING);
        this.loadImages(this.IMAGES_ATTACK);
        this.applyGravity();
        this.characterRun();
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -=this.acceleration;
                // console.log(this.speedY);
                if (this.y >= 300) {
                    this.speedY = 0;
                    this.y = 306;
                }
            }
            if(!this.isAboveGround()){
                this.jumpAnimationCounter = 0;
                this.highJumpAnimationCounter = 0;
                this.highJumpAnimationSet = false;
                this.jumpCounter = 0;
            }
        }, 20);
    }

    isAboveGround(){
        return this.y < 299;
    }

    characterRun(){
        setInterval(() => {
            if (keyboard.LEFT == false && keyboard.RIGHT == false && this.idleImageCount == 0 && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false) {
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

            if ((keyboard.UP == true  && !this.isAboveGround()) || (keyboard.UP == true  && this.jumpCounter == 1 && this.speedY < 0)) {
                if (this.jumpCounter == 1) {
                    this.highJumpAnimationSet = true;
                }
                this.jump();
            }

            if (keyboard.SPACE == true  && !this.isAboveGround() || (keyboard.SPACE == true  && this.jumpCounter == 1 && this.speedY < 0)) {
                if (this.jumpCounter == 1) {
                    this.highJumpAnimationSet = true;
                }
                this.jump();
            }

            if (keyboard.X == true && this.attackAnimationStarted == false && this.hurtAnimationStarted == false) {
                this.attackAnimationStarted = true;
                this.attackOne();
                // console.log('attack one done');
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
            if (this.isAboveGround() && (this.jumpAnimationCounter < this.IMAGES_JUMPING.length) &&  this.highJumpAnimationSet == false) { 
                this.jumpCounter = 1;
                let path = this.IMAGES_JUMPING[this.jumpAnimationCounter];
                this.img = this.imgCache[path];

                this.currentIMG ++; 
                this.jumpAnimationCounter ++;
            }
            else if (this.isAboveGround() && (this.highJumpAnimationCounter < this.IMAGES_HIGH_JUMPING.length) &&  this.highJumpAnimationSet == true) { 
                this.jumpCounter = 2;
                let path = this.IMAGES_HIGH_JUMPING[this.highJumpAnimationCounter];
                this.img = this.imgCache[path];

                this.currentIMG ++; 
                this.highJumpAnimationCounter ++;
            }else{
                if ((keyboard.RIGHT == true || keyboard.LEFT == true) && !this.isAboveGround() && this.attackAnimationStarted == false) {
                    this.playAnimation(this.IMAGES_RUN);
                }
            }
        }, 80);

        setInterval(() => {
            
            if (keyboard.RIGHT == false && keyboard.LEFT == false && this.idleIntervalSet == false && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false) {
                // console.log('characterRest');
                this.loadImage('./img/Mage/Idle/Idle1.png');
                this.idleIntervalSet = true;
                let idleInterval = 3000 + Math.random() * 5000;
                this.idleImageCount = 0;

                setTimeout(() => {
                    let idleCharacter = setInterval(() => {
                        let path = this.IMAGES_IDLE[this.idleImageCount];
                        this.img = this.imgCache[path];

                        if ((this.idleImageCount == this.IMAGES_IDLE.length) || keyboard.LEFT == true || keyboard.RIGHT == true || keyboard.UP == true || this.hurtAnimationStarted == true || this.isAboveGround() || this.attackAnimationStarted == true) {
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
        this.speedY = 21;
    }

    hurt(dmg) {
        let hurtImageCount = 0;
        this.hurtAnimationStarted = true;
        let characterHurt = setInterval(() => {
            let path = this.IMAGES_HURT[hurtImageCount];
            this.img = this.imgCache[path];
                if (hurtImageCount == this.IMAGES_HURT.length) {
                    this.hurtAnimationStarted = false;
                    hurtImageCount = 0;
                    this.loadImage('./img/Mage/Idle/idle1.png');
                    this.health = this.health - dmg;
                    clearInterval(characterHurt);
                }
            hurtImageCount++;
        }, 100);
    }

    attackOne(){
        if (this.hurtAnimationStarted == false) {

            this.attackImageCount = 0;

            let animationAttackOne = setInterval(() => {
            
                let path = this.IMAGES_ATTACK[this.attackImageCount];
                this.img = this.imgCache[path];

                if (this.hurtAnimationStarted == true) {
                    this.attackAnimationStarted = false;
                    this.loadImage('./img/Mage/Idle/idle1.png');
                    clearInterval(animationAttackOne);
                }
                if (this.attackImageCount == this.IMAGES_ATTACK.length) {    
                    
                                
                    this.attackAnimationStarted = false;

                    this.loadImage('./img/Mage/Idle/idle1.png');
                    
                    world.projectiles.push(new AttackOne());
                    console.log(world.projectiles.length);   
                    clearInterval(animationAttackOne);
                }

                this.attackImageCount++;
            }, 80);
        }
    }
}