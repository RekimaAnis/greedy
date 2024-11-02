import Item from "./objet";

export default class Player extends Item{
    constructor(x, y,width,height, deltaX, deltaY, image){
        super(x,y,width, height,image);
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }

}