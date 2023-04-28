const healthBar = new StatusBar (
    [
        new StatusBarFrameObject('./img/game-ui/PNG/16Inner_Interface/hp_bar_bg.png', 20, 20),
    ],
    [
        
    ],
    [
        new StatusBarFrameObject('./img/game-ui/PNG/16Inner_Interface/hp_bar_border.png', 20, 20),
    ],

)

    // x = 50;
    // y = 50;
    // width = 200;
    // height = 80;

    // hpBarBackground = './img/game-ui/PNG/16Inner_Interface/hp_bar_bg.png';
    // hpBarFront = './img/game-ui/PNG/16Inner_Interface/hp_bar_border.png';
    // hpCornerLeft = './img/game-ui/PNG/16Inner_Interface/hp_corner1.png';
    // hpPoint = './img/game-ui/PNG/16Inner_Interface/hp_point.png';
    // hpCornerRight = './img/game-ui/PNG/16Inner_Interface/hp_corner2.png';

    // amountHpPoints = [];

    // completeHpBar = [
    //     this.hpBarBackground,
    //     this.hpCornerLeft,
    //     [],
    //     this.hpCornerRight,
    //     this.hpBarFront2
    // ];

    // Load HP-Bar: Background -> CornerLeft -> Array mit hp Points -> CornerRight -> hpBarFront
    // max 99 hp points -> for(i = 0, i< world.character.health - 1, i++)
    // character 100hp

    // constructor(){
    //     super().loadImage('./img/game-ui/PNG/16Inner_Interface/hp_bar_bg.png');
    //     this.calcHpPoints();
    // }

    // calcHpPoints(){
    //     setInterval(() => {
    //         this.completeHpBar[2].splice(0, completeHpBar[2].lenght);
    //         for (let i = 0; i < world.character.health - 1; i++) {
    //         this.completeHpBar[2].push(this.hpPoint);
    //     }
    //     }, 10);
        
    // }
