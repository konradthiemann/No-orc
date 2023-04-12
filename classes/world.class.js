class World{
    ctx;

    backgroundObjects =[
        new BackgroundObject('./img/Background/Bright/sky.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer2.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer1.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/coluds_small.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/mountains.png', 0, 0),
        new BackgroundObject('./img/Background/Bright/trees.png', 0, 0),

        new BackgroundObject('./img/Background/Bright/sky.png', 719, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer2.png', 719, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer1.png', 719, 0),
        new BackgroundObject('./img/Background/Bright/coluds_small.png', 719, 0),
        new BackgroundObject('./img/Background/Bright/mountains.png', 719, 0),
        new BackgroundObject('./img/Background/Bright/trees.png', 719, 0),

        new BackgroundObject('./img/Background/Bright/sky.png', 719*2, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer2.png', 719*2, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer1.png', 719*2, 0),
        new BackgroundObject('./img/Background/Bright/coluds_small.png', 719*2, 0),
        new BackgroundObject('./img/Background/Bright/mountains.png', 719*2, 0),
        new BackgroundObject('./img/Background/Bright/trees.png', 719*2, 0),

        new BackgroundObject('./img/Background/Bright/sky.png', 719*3, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer2.png', 719*3, 0),
        new BackgroundObject('./img/Background/Bright/clouds_back_layer1.png', 719*3, 0),
        new BackgroundObject('./img/Background/Bright/coluds_small.png', 719*3, 0),
        new BackgroundObject('./img/Background/Bright/mountains.png', 719*3, 0),
        new BackgroundObject('./img/Background/Bright/trees.png', 719*3, 0),
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

        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 750, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 800, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 850, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 900, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 950, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1000, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1050, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1100, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1150, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1200, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1250, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1300, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1350, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1400, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1450, 430),

        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1500, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1550, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1600, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1650, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1700, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1750, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1800, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1850, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1900, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 1950, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 2000, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 2050, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 2100, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 2150, 430),
        new TileObject('./img/Background/Tiles/Ground_grass_0001_tile.png', 2200, 430),

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
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.tileObjects);
        this.addObjectToMap(this.birds);
        this.addObjectToMap(this.enemies);
        this.addToMap(this.character);
        
        this.ctx.translate(-this.camera_x, 0);

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
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width - 50, 0);
            this.ctx.scale(-1,1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}