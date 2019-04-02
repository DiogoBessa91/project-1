
class Enemy {

  constructor(){
      this.radius = 30
      this.x = this.radius+Math.floor((CANVAS_HEIGHT-2*this.radius)*Math.random())
      this.y = -10;
      this.vy = 2 // Velocity y
      console.log(this.x, this.y);
 
      this.trashImg = new Image();
      this.trashImg.src = '/trash/maça.png'
  }
 
  draw(ctx){
    ctx.save()
    
    
   
    ctx.drawImage(this.trashImg, this.x-this.radius*2.5/2, this.y-this.radius*2.5/2, this.radius*2.5,this.radius*2.5)
    ctx.restore()
 
 }
 
 update(){
  this.y += this.vy
 }
 
 }




