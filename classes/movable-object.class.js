class MovableObject {
    x ;
    y ;
    img;
    imgCache = {};
    speed;
    otherDirection = false;

    loadImage(path){
        this.img = new Image(); 
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    moveRight() {
            this.x = this.x + this.speed;
    }

    moveLeft(){
            this.x = this.x - this.speed;
    }
}