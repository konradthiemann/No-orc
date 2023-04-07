class Character extends Creature{
    world;
    recource = 100;
    specialRecource = 100;
    height = 150;
    width = 150;
    x = 50;
    y = 190;
    speed;
    
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
    currentIMG = 0;

    constructor(){
        super().loadImage('./img/Mage/Idle/Idle1.png');
        this.loadImages(this.IMAGES_RUN);

        this.characterRun();
    }

    characterRun(){
        setInterval(() => {
            if (keyboard.RIGHT == true) {
                this.x += 3;
                this.otherDirection = false;
            }

            if (keyboard.LEFT == true) {
                this.x -= 3;
                this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (keyboard.RIGHT == true || keyboard.LEFT == true) {
                let i = this.currentIMG % this.IMAGES_RUN.length;
                let path = this.IMAGES_RUN[i];
                this.img = this.imgCache[path];
    
                this.currentIMG ++; 
            }
        }, 80);
    }

    jump(){
        
    }

    attackTwo(){

    }

    
}