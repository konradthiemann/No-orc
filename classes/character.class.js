class Character extends MovableObject{
    world;
    health = 87;
    mana = 87;
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
    manaIntervalSet = false;
    dyingAnimationStarted = false;

    hpCornerLeft = './img/game-ui/PNG/16Inner_Interface/hp_corner1.png';
    hpPoint = './img/game-ui/PNG/16Inner_Interface/hp_point.png';
    hpCornerRight = './img/game-ui/PNG/16Inner_Interface/hp_corner2.png';

    manaCornerLeft = './img/game-ui/PNG/16Inner_Interface/loading_blue_corner1.png';
    manaPoint = './img/game-ui/PNG/16Inner_Interface/loading_blue_point.png';
    manaCornerRight = './img/game-ui/PNG/16Inner_Interface/loading_blue_corner2.png';
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
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump3.png',
        './img/Mage/Jump/jump4.png',
        './img/Mage/Jump/jump5.png',
        './img/Mage/Jump/jump6.png',
        './img/Mage/Jump/jump6.png',
        './img/Mage/Jump/jump7.png',
    ];
    IMAGES_HIGH_JUMPING = [
        './img/Mage/High_Jump/high_jump5.png',
        './img/Mage/High_Jump/high_jump6.png',
        './img/Mage/High_Jump/high_jump7.png',
        './img/Mage/High_Jump/high_jump8.png',
        './img/Mage/High_Jump/high_jump9.png',
        './img/Mage/High_Jump/high_jump10.png',
        './img/Mage/High_Jump/high_jump11.png',
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
    IMAGES_DYING = [
        './img/Mage/Death/death1.png',
        './img/Mage/Death/death2.png',
        './img/Mage/Death/death3.png',
        './img/Mage/Death/death4.png',
        './img/Mage/Death/death5.png',
        './img/Mage/Death/death6.png',
        './img/Mage/Death/death7.png',
        './img/Mage/Death/death8.png',
        './img/Mage/Death/death9.png',
        './img/Mage/Death/death10.png',
    ];

    constructor(){
        super().loadImage('./img/Mage/Idle/idle1.png');
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_HIGH_JUMPING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DYING);
        this.applyGravity();
        this.characterRun();
        this.setHealthPoints();
        this.setManaPoints();
    }

    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -=this.acceleration;
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
            if (keyboard.LEFT == false && keyboard.RIGHT == false && this.idleImageCount == 0 && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && (this.health > 0) && world.characterIsFalling == false) {
                this.loadImage('./img/Mage/Idle/idle1.png');
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

            if (keyboard.X == true && this.attackAnimationStarted == false && this.hurtAnimationStarted == false && this.dyingAnimationStarted == false && world.characterIsFalling == false) {
                this.attackAnimationStarted = true;
                this.attackOne();
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
            if (this.isAboveGround() && (this.jumpAnimationCounter < this.IMAGES_JUMPING.length) &&  this.highJumpAnimationSet == false && world.characterIsFalling == false) { 
                this.jumpCounter = 1;
                let path = this.IMAGES_JUMPING[this.jumpAnimationCounter];
                this.img = this.imgCache[path];

                this.currentIMG ++; 
                this.jumpAnimationCounter ++;
            }
            else if (this.isAboveGround() && (this.highJumpAnimationCounter < this.IMAGES_HIGH_JUMPING.length) &&  this.highJumpAnimationSet == true && world.characterIsFalling == false) { 
                this.jumpCounter = 2;
                let path = this.IMAGES_HIGH_JUMPING[this.highJumpAnimationCounter];
                this.img = this.imgCache[path];

                this.currentIMG ++; 
                this.highJumpAnimationCounter ++;
            }else{
                if ((keyboard.RIGHT == true || keyboard.LEFT == true) && !this.isAboveGround() && this.attackAnimationStarted == false && world.characterIsFalling == false) {
                    this.playAnimation(this.IMAGES_RUN);
                }
            }
        }, 80);

        setInterval(() => {
            
            if (keyboard.RIGHT == false && keyboard.LEFT == false && this.idleIntervalSet == false && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && (this.health > 0) && world.characterIsFalling == false) {
                this.loadImage('./img/Mage/Idle/idle1.png');
                this.idleIntervalSet = true;
                let idleInterval = 3000 + Math.random() * 5000;
                this.idleImageCount = 0;

                setTimeout(() => {
                    let idleCharacter = setInterval(() => {
                        let path = this.IMAGES_IDLE[this.idleImageCount];
                        this.img = this.imgCache[path];

                        if ((this.idleImageCount == this.IMAGES_IDLE.length) || keyboard.LEFT == true || keyboard.RIGHT == true || keyboard.UP == true || this.hurtAnimationStarted == true || this.isAboveGround() || this.attackAnimationStarted == true || this.dyingAnimationStarted == true || (this.health <= 0) || world.characterIsFalling == true) {
                            this.idleIntervalSet = false;
                            this.idleImageCount = 0;
                            this.loadImage('./img/Mage/Idle/idle1.png');
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
                    this.checkLife();
                }
            hurtImageCount++;
        }, 100);
    }

    attackOne(){
        if (this.hurtAnimationStarted == false ) {

            this.attackImageCount = 0;

            let animationAttackOne = setInterval(() => {
            
                let path = this.IMAGES_ATTACK[this.attackImageCount];
                this.img = this.imgCache[path];

                if (this.hurtAnimationStarted == true) {
                    this.attackAnimationStarted = false;
                    this.loadImage('./img/Mage/Idle/idle1.png');
                    clearInterval(animationAttackOne);
                }
                if (this.attackImageCount == 6  && this.mana >= 20) {     
                    world.projectiles.push(new AttackOne());
                    this.mana = this.mana - 20;
                }

                if (this.attackImageCount == this.IMAGES_ATTACK.length) {                                 
                    this.attackAnimationStarted = false;
                    this.loadImage('./img/Mage/Idle/idle1.png');  
                    clearInterval(animationAttackOne);
                }

                this.attackImageCount++;
            }, 80);
        }
    }


    setHealthPoints(){
        setInterval(() => {
            this.world.hpPoints.splice(0, this.world.hpPoints.length);
            let healthPoint = new Healthpoint(this.hpCornerLeft, 25, 23)
            this.world.hpPoints.push(healthPoint);
            for (let i = 0; i < this.health - 1; i++) {
                
                if (i > 0 && i < this.health - 1) {
                    let x = 25 + i * 2;
                    let healthPoint = new Healthpoint(this.hpPoint, x, 23)
                    this.world.hpPoints.push(healthPoint);
                }
            }    
            let x = 23 + this.health * 2;
            healthPoint = new Healthpoint(this.hpCornerRight, x, 23)
            this.world.hpPoints.push(healthPoint); 
            
           
        }, 20);
    }

    checkLife(){
        if (this.health <= 0) {
            this.die();
        }
    }

    die(){
        this.dyingAnimationStarted = true;
        let dyingImageCount = 0;
        let dying = setInterval(() => {
            let path = this.IMAGES_DYING[dyingImageCount];
            this.img = this.imgCache[path];
                if (dyingImageCount == this.IMAGES_DYING.length) {
                    this.loadImage(this.IMAGES_DYING[this.IMAGES_DYING.length - 1]);
                    dyingImageCount = 0;
                    clearInterval(dying);
                }
                dyingImageCount++; 
                }, 80);
               
    }

    
    setManaPoints(){
        setInterval(() => {
            this.world.manaPoints.splice(0, this.world.manaPoints.length);
            let manaPoint = new Healthpoint(this.manaCornerLeft, 25, 50)
            this.world.manaPoints.push(manaPoint);
            for (let i = 0; i < this.mana - 1; i++) {
                
                if (i > 0 && i < this.mana - 1) {
                    let x = 25 + i * 2;
                    let manaPoint = new Healthpoint(this.manaPoint, x, 50)
                    this.world.manaPoints.push(manaPoint);
                }
            }    
            let x = 23 + this.mana * 2;
            manaPoint = new Healthpoint(this.manaCornerRight, x, 50)
            this.world.manaPoints.push(manaPoint);        
        }, 20);

        setInterval(() => {
            if (this.mana <= 86 && this.manaIntervalSet == false) {
                this.manaIntervalSet = true;
                let setManaInterval = setInterval(() => {
                    if (this.mana >= 86) {
                        this.manaIntervalSet = false;
                        clearInterval(setManaInterval);
                    }
                    this.mana = this.mana + 0.5;
                }, 100);
            }
        }, 20);
        
    }
}