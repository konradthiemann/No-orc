let canvas;
let ctx;

let world = new World();
character = new Character();
enemies = [
    new EnemyOne(),
    new EnemyTwo(),
    new EnemyThree()
]


function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    console.log('My Character is', world.character)
}