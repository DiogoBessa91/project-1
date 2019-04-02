
class Background{
  constructor(){
  this.image = new Image()
  this.image.src = "./../img/city.jpeg"
  this.y = 0
  this.width = CANVAS_WIDTH
  this.height =  CANVAS_HEIGHT

  this.backImg = new Image();
  this.backImg.src = '/img/trash2.png'
  this.backImg2 = new Image();
  this.backImg2.src = '/img/trash1.png'
  }
  draw(ctx){
    // draw backgroung
  ctx.drawImage(this.image, 0, this.y, this.width, this.height)
  ctx.drawImage(this.backImg, 0, 800, 400,200)
  ctx.drawImage(this.backImg2, 420, 800, 400,200)
  //draw again background above

  }
  
  update(){
  
    }
}

// ctx.drawImage()