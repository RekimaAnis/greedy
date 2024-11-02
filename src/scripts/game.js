import Greedy from "./greedy";
import Hungry from "./hungry";
import KeyManager from "./keyManager";
import Fruits from "./fruits";

export default class Game {

    #canvas;

    constructor(canvas) {
      this.#canvas = canvas;
      this.greedy =  new Greedy(this.#canvas.width/2,this.#canvas.height/2,5,5);
      this.hungry = [new Hungry(this.alea(this.canvas.width-64), this.alea(this.canvas.height - 54),5,5)];
      this.context = this.#canvas.getContext("2d");
      this.keyManager = new KeyManager();
      this.anim = null;
      this.intervall = null;
      this.fruits = [];
      this.point = 0;
      this.life = 3;
      this.best_score = 0;
    }

   /** donne accès au canvas correspondant à la zone de jeu */
    get canvas() {
      return this.#canvas;
    }

    Score(){
      document.getElementById("score").textContent = `${this.point}`;
    }

    animate(){
      this.context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
      this.greedy.handleMoveKeys(this.keyManager);
      this.greedy.move(this.#canvas);
      this.greedy.draw(this.context);
      this.hungry.forEach(hungry =>{
         hungry.draw(this.context);
      });
      this.FindTarget();
      this.DestroyFruit();
      this.DestroyGreedy();
      this.fruits = this.fruits.filter(fruit => !fruit.dispawn && !fruit.collisionWith(this.greedy));
      this.fruits.forEach(fruit=> {
        fruit.draw(this.context);
      });
      this.anim = window.requestAnimationFrame(this.animate.bind(this));
    }

    startAndStop() {
      if(this.anim === null ){
        this.intervall = setInterval(this.addFruit.bind(this),1000);
        this.animate();
      }
      else{
        clearInterval(this.intervall);
        window.cancelAnimationFrame(this.anim);
        this.anim=null
      }
    }

    keyDownActionHandler(event) {
      switch (event.key) {
          case "ArrowLeft":
          case "Left":
              this.keyManager.leftPressed();
              break;
          case "ArrowRight":
          case "Right":
              this.keyManager.rightPressed();
              break;
          case "ArrowUp":
          case "Up":
              this.keyManager.upPressed();
              break;
          case "ArrowDown":
          case "Down":
              this.keyManager.downPressed();
              break;
          default: return;
        }
      event.preventDefault();
    }

    keyUpActionHandler(event) {
      switch (event.key) {
          case "ArrowLeft":
          case "Left":
              this.keyManager.leftReleased();
              break;
          case "ArrowRight":
          case "Right":
              this.keyManager.rightReleased();
              break;
          case "ArrowUp":
          case "Up":
              this.keyManager.upReleased();
              break;
          case "ArrowDown":
          case "Down":
              this.keyManager.downReleased();
              break;
          default: return;
        }
      event.preventDefault();
    }


    alea(n){
        return Math.floor(Math.random()*n);
    }

    DestroyFruit(){
      for(let i in this.fruits){
          const fruit = this.fruits[i];
          if(fruit.collisionWith(this.greedy)){
            this.fruits.splice(i,1);
            this.point +=100;
            this.Score();
          }
          else{
            for(let j in this.hungry){
              if(fruit.collisionWith(this.hungry[j])){
                this.fruits.splice(i,1);
                this.hungry[j].point += 100;
                this.AddHungry();
                break;
              }
            }
          }
      }
    }

    DestroyGreedy(){
      for(let hungry of this.hungry){
        if(hungry.collisionWith(this.greedy) && this.life>0){
          const imageASupprimer = document.getElementById("life-"+`${this.life}`);
          const parentDeImage = imageASupprimer.parentNode;
          parentDeImage.removeChild(imageASupprimer);
          this.life--;
          this.greedy.Restart(this.canvas.width/2, this.canvas.height/2);
          let remove = hungry;
          let index = this.hungry.indexOf(remove);
          if(index !== -1){
            this.hungry.splice(index,1);
            if(this.hungry.length === 0){
              this.hungry.push(new Hungry(this.alea(this.canvas.width-64), this.alea(this.canvas.height - 54),5,5));
            }
          }
        }
        if(this.life==0){
          this.updateBestScore(this.point);  
          alert("tu as perdu avec : "+`${this.point}`+" points et le meilleur score est "+`${this.getBestScore()}`);
          window.location.reload();
        }
      }
    }

    addFruit(){
        const random_x = this.alea(this.canvas.width - 64);
        const random_y = this.alea(this.canvas.height - 64);
        const newfruit = new Fruits(random_x,random_y,64,64);
        this.fruits.push(newfruit);
    }

    FindTarget(){
      if(this.fruits.length < 1){
        this.hungry.forEach(hungry => {
          if(!hungry.target || hungry.target != this.greedy){
            hungry.target = this.greedy;
          }
          hungry.move(hungry.target);
        });
      }
      else{
        this.hungry.forEach(hungry => {
          if(!hungry.target || !this.fruits.includes(hungry.target)){
            hungry.target = this.fruits[this.alea(this.fruits.length)];
          }
          hungry.move(hungry.target);
        });
      }
    }

    AddHungry(){
      for(let i in this.hungry){
        if(this.hungry[i].point > 700){
          this.hungry[i].SetPoint();
          this.hungry.push(new Hungry(this.alea(this.canvas.width-64), this.alea(this.canvas.height - 54),5,5));
        }
      }
    }

    getBestScore(){
      return localStorage.getItem(this.#canvas.id + '_bestScore');
    }

    updateBestScore(newScore){
      const bestScore = parseInt(this.getBestScore()) || 0; 
      if (newScore > bestScore) {
          localStorage.setItem(this.#canvas.id + '_bestScore', newScore);
      }
    }
  
}
