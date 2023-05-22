let canvas;
let world;
let keyboard = new Keyboard();

let screenExpanded = false;
let gameStarted = false;
let soundMuted;
let soundSelected = false;
let victoryScreenSet = false;
let startscreen_sound = new Audio('./audio/background-startscreen.mp3');
let ingame_sound_one = new Audio('./audio/background-ingame.mp3');
let ingame_lose_sound = new Audio('./audio/background-sound2.mp3');
let musicPlayingNow;

/**
 * initialation function
 * 
 */
function init() {
    showStartScreen();
    showSoundSelection();
    startTouchEventListener();
}

/**
 * show starting screen
 * 
 */
function showStartScreen() {
    musicPlayingNow = startscreen_sound;
    document.getElementById('fullscreen').innerHTML += showStartScreenHTML();
    document.getElementById('fullscreen').innerHTML += showButtonsHTML();
    document.getElementById("startScreen").style.display = "flex";
    document.getElementById("fullscreenBtn").style.display = "none";
}

/**
 * creates window for player to choose for playing with or without sound
 * 
 */
function showSoundSelection() {
    document.getElementById('fullscreen').innerHTML += showSoundSelectionHTML();
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
            <button class="btnSoundSelection" id="btnSoundSelection1" onclick=commitSound(startscreen_sound)>yes</button>
            <button class="btnSoundSelection" id="btnSoundSelection2" onclick=muteSound()>no</button>
            </div>
        </div>
    `;
}

/**
 * close sound selection and play sound for starting screen
 * 
 */
function commitSound(sound) {
    soundSelected = true;
    soundMuted = false;
    musicPlayingNow = sound;
    closeSoundSelectionWindow();
    playSound(sound, true);
}

/**
 * close sound selection without playing sound for starting screen
 */
function muteSound(musicPlayingNow) {
    soundSelected = true;
    pauseSound(musicPlayingNow);
    soundMuted = true;
    closeSoundSelectionWindow();
}

/**
 * play sound if sound isnt muted
 * @param {string} soundPath
 * @param {boolean} boolean 
 */
function playSound(soundPath, boolean) {
    if (soundMuted == false) {
        soundPath.loop = boolean;
        soundPath.play();
    }
}

/**
 * pause sound if sound isnt muted
 * @param {string} soundPath 
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
 * HTML part for starting screen window
 * @returns HTML code
 */
function showStartScreenHTML() {
    return /*html*/`
        <div class="startScreen" id="startScreen">
            <img src="./img/game-ui/PNG/19/StartscreenEnter.png">  
            <button class="enterBtn" onclick=checkForStartedGame()>Start</button>
        </div>
    `;
}

/**
 * 
 * @returns html code
 */
function showButtonsHTML() {
    return /*html */ `
        <div class="buttons" id='buttons'>
            <button class="enterBtn" id="enterBtn" onclick=checkForStartedGame()>Enter</button>
            <button class="movingBtn" id="btnRight"  style="bottom: 30px; left:100px;"><img src="./img/game-ui/PNG/17Icons/play_button1.png"></button>
            <button class="movingBtn" id="btnLeft" onclick=btnLeft() style="bottom: 30px; left:30px;"><img src="./img/game-ui/PNG/17Icons/play_button2.png"></button>
            <button class="movingBtn" id="btnUp" onclick=btnUp() style="bottom: 100px; right: 100px;"><img src="./img/game-ui/PNG/17Icons/play_button3.png"></button>
            <button class="attackBtn" id="btnAttack" onclick=btnAttack() style="bottom: 30px; right: 30px;"><img src="./img/game-ui/PNG/17Icons/magic_button.png"></button>
            <button class="soundBtn" id="fullscreenBtn" onclick=fullscreen()  style="right:91px; display:none;"><img src="./img/game-ui/PNG/19/expand-32.png"></button>
            <button class="soundBtn" id="commitSoundBtn" onclick=commitSound(musicPlayingNow) style="right:52px;"><img src="./img/game-ui/PNG/19/audio-add.png"></button>
            <button class="soundBtn" id="muteSoundBtn" onclick=muteSound(musicPlayingNow) style="right:13px;"><img src="./img/game-ui/PNG/19/audio-remove.png"></button>
        </div>
    `;
}

/**
 * toggle canvas non-/fullscreen
 */
function fullscreen() {
    let fullscreen = document.getElementById('canvas');

    if (!document.fullscreenElement) {
        fullscreen.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

/**
 * starts Game, close start screen, create new World slass 
 */
function startGame() {
    pauseSound(startscreen_sound);
    playSound(ingame_sound_one, true);
    musicPlayingNow = ingame_sound_one;
    document.getElementById('enterBtn').style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("fullscreenBtn").style.display = "flex";
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function styleEnterBtn(){

}

/**
 * check if game already started
 */
function checkForStartedGame() {
    if (gameStarted == false && soundSelected == true) {
        gameStarted = true;
        startGame();
    } else if(gameStarted == true && (world.character.characterIsDead == true || victoryScreenSet == true)){
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

/**
 * start eventlistener for mobilde devices
 */
function startTouchEventListener(){
    btnLeft();
    btnRight();
    btnUp();
    btnAttack();
}

/**
 * moving on mobile device
 */
function btnLeft() {
    document.getElementById("btnLeft").addEventListener("touchstart", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.LEFT = true;
    });

    document.getElementById("btnLeft").addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.LEFT = false;
    });
}

/**
 * moving on mobile device
 */
function btnRight() {
    document.getElementById("btnRight").addEventListener("touchstart", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        } 
        keyboard.RIGHT = true;

    });

    document.getElementById("btnRight").addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.RIGHT = false;
    });

    document.getElementById("btnRight").addEventListener('touchmove', function(e) {
        e.preventDefault(); 
    });
}

/**
 * moving on mobile device
 */
function btnUp() {
    document.getElementById("btnUp").addEventListener("touchstart", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.UP = true;
    });

    document.getElementById("btnUp").addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.UP = false;
    });
}

/**
 * shooting on mobile device
 */
function btnAttack() {
    document.getElementById("btnAttack").addEventListener("touchstart", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.X = true;
    });

    document.getElementById("btnAttack").addEventListener("touchend", function (e) {
        if (e.cancelable) {
            e.preventDefault(); 
        }
        keyboard.X = false;
    });
}