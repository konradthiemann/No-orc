class Level{
    backgroundObjectsHell;
    backgroundObjects;
    tileObjectsHell;
    tileObjects;
    birds;
    enemies;
    projectiles;
    hearts;
    screens;

    constructor(backgroundObjectsHell, backgroundObjects,tileObjectsHell, tileObjects, birds, enemies, projectiles, hearts, screens){
        this.backgroundObjectsHell = backgroundObjectsHell;
        this.backgroundObjects = backgroundObjects;
        this.tileObjectsHell = tileObjectsHell;
        this.tileObjects = tileObjects;
        this.birds = birds;
        this.enemies = enemies;
        this.projectiles = projectiles;
        this.hearts = hearts;
        this.screens = screens;
    }
}