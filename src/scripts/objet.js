
export default class Item {

    constructor(x, y, width, height, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = this.#createImage(image);
    }

    getwidth() {
        return this.image.width;
    }
    getheight() {
        return this.image.height;
    }

    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    draw(context){
        context.drawImage(this.image,this.x,this.y);
    }

    collisionWith(obstacle){
        const ballTopLeftX = this.x;
        const ballTopLeftY = this.y;
    
        const ballBottomRightX = this.x + this.width;
        const ballBottomRightY = this.y + this.height;
        
        const obstacleTopLeftX = obstacle.x;
        const obstacleTopLeftY = obstacle.y;
    
        const obstacleBottomRightX = obstacle.x + obstacle.width;
        const obstacleBottomRightY = obstacle.y + obstacle.height;
    
        const collision = !(ballBottomRightX < obstacleTopLeftX ||
                 ballTopLeftX > obstacleBottomRightX ||
                 ballBottomRightY < obstacleTopLeftY ||
                 ballTopLeftY > obstacleBottomRightY);
                     
        return collision;
      }
}