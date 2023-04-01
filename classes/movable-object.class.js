class MovableObject {
    x = 150;
    y = 200;
    img;

    loadImage(path){
        this.img = new Image(); 
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving Right');    
    }

    moveLeft(){
        
    }
}