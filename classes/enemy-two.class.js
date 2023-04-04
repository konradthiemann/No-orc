class EnemyTwo extends Enemy{
    height = 250;
    width = 250;
    y = 250;
    constructor(){
        super().loadImage('./img/Orc-Boss/Walk1.png');

        this.x = 200 + Math.random() * 500;
    }
}