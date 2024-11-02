import img from './assets/images/hungry.png';
import Player from './player';

export default class Hungry extends Player{

    constructor(x, y, deltaX, deltaY){
        super(x, y,64,64, deltaX, deltaY, img);
        this.point = 0;
        this.target = null;
    }

    move(cible){
        let directionX = cible.x - this.x;
        let directionY = cible.y - this.y;
        let distance = Math.sqrt((directionX**2) + (directionY**2));
        directionX /= distance;
        directionY /= distance;
        let moveX = directionX * this.deltaX/2;
        let moveY = directionY * this.deltaY/2;
        this.x += moveX;
        this.y += moveY;
    }

    alea(n){
        return Math.floor(Math.random()*n);
    }

    SetPoint(){
        this.point = 0;
    }
     
}