class World{
    ctx;

    backgroundObjects =[
        new BackgroundObject('./img/Background/Bright/sky.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer2.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer1.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/coluds_small.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/mountains.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/trees.png', 0, 0),
    ];
    tileObjects = [
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 0, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 50, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 100, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 150, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 200, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 250, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 300, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 350, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 400, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 450, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 500, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 550, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 600, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 650, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 700, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0022_tile.png', 75, 310),
    ];
    birds = [
        new Bird(),
    ];
    character = new Character();
    enemies = [
        new EnemyOne(),
        new EnemyTwo(),
        new EnemyThree(),
    ];
    canvas;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.tileObjects);
        this.addObjectToMap(this.birds);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);        

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}