class Level{
    backgroundObjectsHell;
    backgroundObjects;
    tileObjectsHell;
    tileObjects;
    birds;
    enemies;
    projectiles;
    hearts;

    constructor(backgroundObjectsHell, backgroundObjects,tileObjectsHell, tileObjects, birds, enemies, projectiles, hearts){
        this.backgroundObjectsHell = backgroundObjectsHell;
        this.backgroundObjects = backgroundObjects;
        this.tileObjectsHell = tileObjectsHell;
        this.tileObjects = tileObjects;
        this.birds = birds;
        this.enemies = enemies;
        this.projectiles = projectiles;
        this.hearts = hearts;
    }
}