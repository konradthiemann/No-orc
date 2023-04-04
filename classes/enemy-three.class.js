class EnemyThree extends Enemy{
    height = 100;
    width = 100;
    y = 350;

    constructor(){
        super().loadImage('./img/Goblin/Walking/0_Goblin_Walking_000.png');

        this.x = 200 + Math.random() * 500;
    }
}