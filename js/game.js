let canvas;
let world;
let keyboard = new Keyboard();

let gameStarted = false;
let soundMuted = false;
let startscreen_sound = new Audio('./audio/background-startscreen.mp3');
let ingame_sound_one = new Audio('./audio/background-ingame.mp3');
let ingame_lose_sound = new Audio('./audio/background-sound2.mp3');

/**
 * initialation function
 * 
 */
function init() {
    showStartScreen();
    showSoundSelection();
}

/**
 * show starting screen
 * 
 */
function showStartScreen() {
    document.body.innerHTML += showStartScreenHTML();
    document.getElementById("startScreen").style.display = "flex";
}

/**
 * creates window for player to choose for playing with or without sound
 * 
 */
function showSoundSelection() {
    document.body.innerHTML += showSoundSelectionHTML();
}

/**
 * create HTML part for sound decision
 * @returns HTML part for sound decision
 */
function showSoundSelectionHTML() {
    return /*html*/ `
        <div class="soundSelection" id="soundSelection">
            <h2>Do you want to play with sound?</h2>
            <div class=btnContainer>                
            <button class="btnSoundSelection" id="btnSoundSelection1" onclick=commitSound()>yes</button>
            <button class="btnSoundSelection" id="btnSoundSelection2" onclick=muteSound()>no</button>
            </div>
        </div>
    `;
}

/**
 * close sound selection and play sound for starting screen
 * 
 */
function commitSound() {
    closeSoundSelectionWindow();
    playSound(startscreen_sound, true);
}

/**
 * close sound selection without playing sound for starting screen
 */
function muteSound() {
    soundMuted = true;
    closeSoundSelectionWindow();
}

/**
 * play sound if sound isnt muted
 * @param {*} soundPath 
 */
function playSound(soundPath, boolean) {
    if (soundMuted == false) {
        soundPath.loop = boolean;
        soundPath.play();
    }
}

/**
 * pause sound if sound isnt muted
 * @param {*} soundPath 
 */
function pauseSound(soundPath) {
    if (soundMuted == false && soundPath.play()) {
        soundPath.pause();
    }
}

/**
 * HTML part for closing sound selection window
 */
function closeSoundSelectionWindow() {
    document.getElementById('soundSelection').style.display = 'none';
}

/**
 * create losing screen and changes music
 */
function showLosingScreen() {
    pauseSound(ingame_sound_one);
    playSound(ingame_lose_sound, true);
    document.getElementById("startScreen").style.display = "flex";
    document.getElementById("startScreen").innerHTML = showLosingScreenHTML();
}

/**
 * HTML part for starting screen window
 * @returns HTML code
 */
function showStartScreenHTML() {
    return /*html*/`
        <div class="startScreen" id="startScreen">
            <img src="./img/game-ui/PNG/19/StartscreenEnter.png" >  
        </div>
    `;
}

/**
 * create victory screen  and changes music
 * @returns HTML code
 */
function showLosingScreenHTML() {
    return /*html*/`
        <img src="./img/game-ui/PNG/19/youLoseEnter5.png" >  
    `;
}

/**
 * HTML part for starting screen window
 */
function showVictoryScreen() {
    pauseSound(ingame_sound_one);
    document.body.innerHTML += showVictoryScreenHTML();
}

/**
 * HTML part for victry screen window
 * @returns HTML code
 */
function showVictoryScreenHTML() {
    return /*html*/`
        <div class="victoryScreen" id="victoryScreen">
            <img src="./img/game-ui/PNG/19/victory2.png" alt="">
            <h2>VICTORY</h2>
            <p>press ENTER for play again!</p>
        </div>
    `;
}

/**
 * starts Game, close start screen, create new World slass 
 */
function startGame() {
    pauseSound(startscreen_sound);
    playSound(ingame_sound_one, true);
    document.getElementById("startScreen").style.display = "none";
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * check if game already started
 */
function checkForStartedGame() {
    if (gameStarted == false) {
        gameStarted = true;
        startGame();
    } else {
        gameStarted = false;
        location.reload();
    }
}

/**
 * keyboard event listener on keydown
 */
window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }

    if (e.key == 'ArrowUp') {
        keyboard.UP = true;
    }

    if (e.key === 'ArrowRight') {
        keyboard.RIGHT = true;
    }

    if (e.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }

    if (e.key == ' ') {
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

    if (e.key == 'Enter') {
        checkForStartedGame();
        keyboard.ENTER = true;
    }
});

/**
 * keyboard event listener on keyup
 */
window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }

    if (e.key == 'ArrowUp') {
        keyboard.UP = false;
    }

    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }

    if (e.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }

    if (e.key == ' ') {
        keyboard.SPACE = false;
    }

    if (e.key == 'y') {
        keyboard.Y = false;
    }

    if (e.key == 'x') {
        keyboard.X = false;
    }

    if (e.key == 'c') {
        keyboard.C = false;
    }

    if (e.key == 'Enter') {
        keyboard.ENTER = false;
    }
});
