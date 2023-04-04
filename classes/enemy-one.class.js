class EnemyOne extends Enemy{
    height = 100;
    width = 100;
    y = 350;

    constructor(){
        super().loadImage('./img/Orc/Walking/0_Orc_Walking_000.png');

        this.x = 200 + Math.random() * 500;
    }
}