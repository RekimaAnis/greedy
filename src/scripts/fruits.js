import Item from "./objet";
import ananas from './assets/images/ananas.png';
import citron from './assets/images/citron.png';
import pomme from './assets/images/pomme.png';


export default class Fruits extends Item{

    constructor(x,y,width,height){
        let res = Math.floor(Math.random()*3);
        let img = null;
        if(res === 0){
            img = ananas;
        }
        if(res === 1){
            img = citron;
        }
        if(res === 2){
            img = pomme;
        }
        super(x,y,width,height,img);
        this.dispawn = false;
        this.spawn = setInterval(this.TimeIsOut.bind(this),8000);
    }

    TimeIsOut(){
        this.dispawn = true;
    }
    
}