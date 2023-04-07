let canvas;
let world;
let keyboard = new Keyboard();


function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    
    
    console.log('My Character is', world.character)
}

window.addEventListener('keydown', (e)=>{
    console.log(e.key);
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }

    if (e.key == 'ArrowUp') {
        keyboard.UP = true;
    }

    if (e.key === 'ArrowRight') {
        keyboard.RIGHT = true;
        console.log(keyboard.RIGHT);
    }

    if (e.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }

    if (e.key == '') {
        keyboard.SPACE = true;
    }

    if (e.key == 'y') {
        keyboard.Y = true;
    }

    if (e.key == 'x') {
        keyboard.X = true;
    }

    if (e.key == 'c') {
        keyboard.C = true;
    }
});

window.addEventListener('keyup', (e)=>{
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
        console.log(keyboard.LEFT);
    }

    if (e.key == 'ArrowUp') {
        keyboard.UP = false;
        console.log(keyboard.LEFT);
    }

    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
        console.log(keyboard.RIGHT);
    }

    if (e.key == 'ArrowDown') {
        keyboard.DOWN = false;
        console.log(keyboard.DOWN);
    }

    if (e.key == '') {
        keyboard.SPACE = false;
        console.log(keyboard.SPACE);
    }

    if (e.key == 'y') {
        keyboard.Y = false;
        console.log(keyboard.Y);
    }

    if (e.key == 'x') {
        keyboard.X = false;
        console.log(keyboard.X);
    }

    if (e.key == 'c') {
        keyboard.C = false;
        console.log(keyboard.C);
    }
});
