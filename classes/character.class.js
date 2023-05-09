class Character extends MovableObject {
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
    characterIsDead = false;

    walking_sound = new Audio('./audio/walking-sound.mp3');
    jumping_sound = new Audio('./audio/jumping.mp3');
    hurt_sound = new Audio('./audio/character-hurt.mp3');
    jump_on_enemy_sound = new Audio('./audio/punch-boss.mp3');

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
        './img/Mage/Jump/jump6.png',
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

    constructor() {
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
        this.checkForIdle();
        this.chooseJumpAnimation();
        this.setHealthPoints();
        this.setManaPoints();
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.setCharacterOnGround();
            }
            if (!this.isAboveGround()) {
                this.resetJumpCounter();
            }
        }, 20);
    }

    setCharacterOnGround() {
        if (this.y >= 300) {
            this.speedY = 0;
            this.y = 306;
        }
    }

    resetJumpCounter() {
        this.jumpAnimationCounter = 0;
        this.highJumpAnimationCounter = 0;
        this.highJumpAnimationSet = false;
        this.jumpCounter = 0;
    }

    isAboveGround() {
        return this.y < 299;
    }

    characterRun() {
        setInterval(() => {
            this.pauseWalkingSound();
            this.checkCharOnGround();
            this.choseDirection();
            this.checkForJumping();
            this.checkForPossibleAttack();
            this.moveWorldCamera();
        }, 1000 / 60);
    }

    checkCharOnGround() {
        if (keyboard.LEFT == false && keyboard.RIGHT == false && this.idleImageCount == 0 && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && (this.health > 0) && world.characterIsFalling == false) {
            this.loadImage('./img/Mage/Idle/idle1.png');
        }

    }

    choseDirection() {
        if (keyboard.LEFT == true) {
            if (this.x >= -20) {
                this.playWalkingSound();
                this.moveLeft();
            }
            this.otherDirection = true;
            this.thresholdReached = 0;
        }

        if (keyboard.RIGHT == true) {
            if (this.x <= 2140) {
                this.playWalkingSound();
                this.moveRight();
            }
            this.otherDirection = false;
            this.thresholdReached = 1;
        }
    }

    playWalkingSound() {
        if (!this.isAboveGround() && soundMuted == false) {
            this.walking_sound.play();
        }
    }

    pauseWalkingSound() {
        if (soundMuted == false && (this.isAboveGround() || this.speedY > 0)) {
            this.walking_sound.pause();
        }
    }

    checkForJumping() {
        if (((keyboard.UP == true || keyboard.SPACE == true) && !this.isAboveGround()) || (keyboard.UP == true && this.jumpCounter == 1 && this.speedY < 0)) {
            this.setHighJumpAnimation();
            playSound(this.jumping_sound, false);
            this.jump();
        }
    }

    setHighJumpAnimation() {
        if (this.jumpCounter == 1) {
            this.highJumpAnimationSet = true;
        }
    }

    checkForPossibleAttack() {
        if (keyboard.X == true && this.attackAnimationStarted == false && this.hurtAnimationStarted == false && this.dyingAnimationStarted == false && world.characterIsFalling == false) {
            this.attackAnimationStarted = true;
            this.attackOne();
        }
    }

    moveWorldCamera() {
        if (this.x + this.world.camera_x <= 220 && this.thresholdReached !== 1 && this.x >= 220) {
            this.world.camera_x = -this.x + 221;
            this.thresholdReached = true;
        }
        if (this.x + this.world.camera_x >= 350 && this.thresholdReached == 1 && this.x <= 2000) {
            this.world.camera_x = -this.x + 351;
            this.thresholdReached = true;
        }
    }

    chooseJumpAnimation() {
        setInterval(() => {
            if (this.isAboveGround() && (this.jumpAnimationCounter < this.IMAGES_JUMPING.length) && this.highJumpAnimationSet == false && world.characterIsFalling == false) {
                this.animateJump();
            }
            else if (this.isAboveGround() && (this.highJumpAnimationCounter < this.IMAGES_HIGH_JUMPING.length) && this.highJumpAnimationSet == true && world.characterIsFalling == false) {
                this.animateHighJump();
            }
            else if ((keyboard.RIGHT == true || keyboard.LEFT == true) && !this.isAboveGround() && this.attackAnimationStarted == false && world.characterIsFalling == false) {
                this.playAnimation(this.IMAGES_RUN);
            }
        }, 80);
    }

    animateJump() {
        this.jumpCounter = 1;
        let path = this.IMAGES_JUMPING[this.jumpAnimationCounter];
        this.img = this.imgCache[path];
        this.currentIMG++;
        this.jumpAnimationCounter++;
    }

    animateHighJump() {
        this.jumpCounter = 2;
        let path = this.IMAGES_HIGH_JUMPING[this.highJumpAnimationCounter];
        this.img = this.imgCache[path];
        this.currentIMG++;
        this.highJumpAnimationCounter++;
    }

    checkForIdle() {
        setInterval(() => {
            if (keyboard.RIGHT == false && keyboard.LEFT == false && this.idleIntervalSet == false && !this.isAboveGround() && this.hurtAnimationStarted == false && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && this.health > 0 && world.characterIsFalling == false) {
                this.loadImage('./img/Mage/Idle/idle1.png');
                this.idleIntervalSet = true;
                let idleInterval = 3000 + Math.random() * 5000;
                this.idleImageCount = 0;
                this.animateIdle(idleInterval);
            }
        }, 30);
    }

    animateIdle(idleInterval) {
        setTimeout(() => {
            let idleCharacter = setInterval(() => {
                let path = this.IMAGES_IDLE[this.idleImageCount];
                this.img = this.imgCache[path];
                this.interruptIdle(idleCharacter);
                this.idleImageCount++;
            }, 80);
        }, idleInterval);
    }

    interruptIdle(idleCharacter) {
        if ((this.idleImageCount == this.IMAGES_IDLE.length) || keyboard.LEFT == true || keyboard.RIGHT == true || keyboard.UP == true || this.hurtAnimationStarted == true || this.isAboveGround() || this.attackAnimationStarted == true || this.dyingAnimationStarted == true || (this.health <= 0) || world.characterIsFalling == true) {
            this.idleIntervalSet = false;
            this.idleImageCount = 0;
            this.loadImage('./img/Mage/Idle/idle1.png');
            clearInterval(idleCharacter);
        }
    }

    jump() {
        this.speedY = 21;
    }

    hurt(dmg) {
        let hurtImageCount = 0;
        this.hurtAnimationStarted = true;
        let characterHurt = setInterval(() => {
            let path = this.IMAGES_HURT[hurtImageCount];
            this.img = this.imgCache[path];
            this.stopHurtAnimation(characterHurt, hurtImageCount, dmg);
            hurtImageCount++;
        }, 100);
    }

    stopHurtAnimation(characterHurt, hurtImageCount, dmg) {
        if (hurtImageCount == this.IMAGES_HURT.length) {
            this.hurtAnimationStarted = false;
            this.loadImage('./img/Mage/Idle/idle1.png');
            this.health = this.health - dmg;
            clearInterval(characterHurt);
            this.checkLife();
        }
    }

    attackOne() {
        if (this.hurtAnimationStarted == false && this.dyingAnimationStarted == false) {
            this.attackImageCount = 0;
            let animationAttackOne = setInterval(() => {
                let path = this.IMAGES_ATTACK[this.attackImageCount];
                this.img = this.imgCache[path];
                this.interruptAttack(animationAttackOne);
                this.createFireball();
                this.stopAttackAnimation(animationAttackOne);
                this.attackImageCount++;
            }, 80);
        }
    }

    interruptAttack(animationAttackOne) {
        if (this.hurtAnimationStarted == true) {
            this.attackAnimationStarted = false;
            this.loadImage('./img/Mage/Idle/idle1.png');
            clearInterval(animationAttackOne);
        }
    }

    createFireball() {
        if (this.attackImageCount == 6 && this.mana >= 20) {
            world.projectiles.push(new AttackOne());
            this.mana = this.mana - 20;
        }
    }

    stopAttackAnimation(animationAttackOne) {
        if (this.attackImageCount == this.IMAGES_ATTACK.length) {
            this.attackAnimationStarted = false;
            this.loadImage('./img/Mage/Idle/idle1.png');
            clearInterval(animationAttackOne);
        }
    }

    setHealthPoints() {
        setInterval(() => {
            let healthPoint;
            this.world.hpPoints.splice(0, this.world.hpPoints.length);
            this.createCornerLeftHealthPointElement();
            this.createHealthPointElement(healthPoint);
            this.createCornerRightHealthPointElement(healthPoint);
        }, 1000 / 20);
    }

    createCornerLeftHealthPointElement() {
        let healthPoint = new Healthpoint(this.hpCornerLeft, 25, 23)
        this.world.hpPoints.push(healthPoint);
    }

    createHealthPointElement(healthPoint) {
        for (let i = 0; i < this.health - 1; i++) {
            if (i > 0 && i < this.health - 1) {
                let x = 25 + i * 2;
                healthPoint = new Healthpoint(this.hpPoint, x, 23)
                this.world.hpPoints.push(healthPoint);
            }
        }
    }

    createCornerRightHealthPointElement(healthPoint) {
        if (this.health <= 0) {
            this.health = 0;
            let x = 25 + this.health * 2;
            healthPoint = new Healthpoint(this.hpCornerRight, x, 23)
            this.world.hpPoints.push(healthPoint);
        }
        else {
            let x = 23 + this.health * 2;
            healthPoint = new Healthpoint(this.hpCornerRight, x, 23)
            this.world.hpPoints.push(healthPoint);
        }
    }

    setManaPoints() {
        this.createManaBar();
        this.fillManaBar();
    }

    createManaBar() {
        setInterval(() => {
            let manaPoint;
            this.world.manaPoints.splice(0, this.world.manaPoints.length);
            this.createCornerLeftManaPointElement(manaPoint);
            this.createManaPointElement(manaPoint);
            this.createCornerRightManaPointElement(manaPoint);
        }, 500);
    }

    createCornerLeftManaPointElement(manaPoint) {
        manaPoint = new Healthpoint(this.manaCornerLeft, 25, 50)
        this.world.manaPoints.push(manaPoint);
    }

    createManaPointElement(manaPoint) {
        for (let i = 0; i < this.mana - 1; i++) {
            if (i > 0 && i < this.mana - 1) {
                let x = 25 + i * 2;
                manaPoint = new Healthpoint(this.manaPoint, x, 50)
                this.world.manaPoints.push(manaPoint);
            }
        }
    }

    createCornerRightManaPointElement(manaPoint) {
        let x = 23 + this.mana * 2;
        manaPoint = new Healthpoint(this.manaCornerRight, x, 50)
        this.world.manaPoints.push(manaPoint);
    }

    fillManaBar(){
        setInterval(() => {
            if (this.mana <= 86 && this.manaIntervalSet == false) {
                this.manaIntervalSet = true;
                let setManaInterval = setInterval(() => {
                    if (this.mana > 86) {
                        this.manaIntervalSet = false;
                        clearInterval(setManaInterval);
                    }
                    this.mana = this.mana + 1;
                }, 200);
            }
        }, 1000 / 20);
    }

    checkLife() {
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.dyingAnimationStarted = true;
        let dyingImageCount = 0;
        let dying = setInterval(() => {
            let path = this.IMAGES_DYING[dyingImageCount];
            this.img = this.imgCache[path];
            if (dyingImageCount == this.IMAGES_DYING.length) {
                this.loadImage(this.IMAGES_DYING[this.IMAGES_DYING.length - 1]);
                dyingImageCount = 0;
                this.characterIsDead = true;
                showLosingScreen();
                clearInterval(dying);
            }
            dyingImageCount++;
        }, 1000 / 20);
    }
}