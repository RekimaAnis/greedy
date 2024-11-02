import img from './assets/images/greedy.png';
import Player from './player';

export default class Greedy extends Player{

    constructor(x, y, deltaX, deltaY){
        super(x, y,64,64, deltaX, deltaY, img);
    }

    Restart(x, y){
        this.x = x;
        this.y = y;
    }

    moveLeft() {              
        this.deltaX = this.deltaX - 10;   
    }
    moveRight() {
        this.deltaX = this.deltaX + 10;   
    }
    moveUp(){
        this.deltaY = this.deltaY - 10;
    }
    moveDown(){
        this.deltaY = this.deltaY + 10;
    }

    stopMoving() {
        this.deltaX = 0;
        this.deltaY = 0;
    }
    move(box) {              
        this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY));
    }
    handleMoveKeys(keyManager) {
        this.stopMoving();    
        if (keyManager.left)  
           this.moveLeft();
        if (keyManager.right) 
           this.moveRight();
        if (keyManager.up) 
           this.moveUp();
        if (keyManager.down) 
           this.moveDown();
    }
    
}