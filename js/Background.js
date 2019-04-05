
class Background{
  constructor(){
  this.image = new Image()
  this.image.src = "./img/city.jpeg"
  this.y = 0
  this.width = CANVAS_WIDTH
  this.height =  CANVAS_HEIGHT

  this.backImg = new Image();
  this.backImg.src = './img/trash2.png'
  this.backImg2 = new Image();
  this.backImg2.src = './img/trash1.png'
  this.monsterImg = new Image();
  this.monsterImg.src = './img/unnamed.png'
  }
  draw(ctx){
    // draw backgroung
  ctx.drawImage(this.image, 0, this.y, this.width, this.height)
  ctx.drawImage(this.backImg, -20, 800, 490,200)
  ctx.drawImage(this.backImg2, 400, 800, 500,200)
  ctx.drawImage(this.monsterImg, 30, -14, 750,150)
  //draw again background above

  }
  
  update(){
  
    }
}

// ctx.drawImage()