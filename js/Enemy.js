
class Enemy {

  constructor(trashgroup){
      this.radius = 30
      this.x = this.radius+Math.floor((CANVAS_WIDTH-2*this.radius)*Math.random())
      this.y = -2*this.radius;
      this.vy = 2 // Velocity y
 
      this.trashImg = new Image();
      this.trashImg.src = trashgroup

      if(trashgroup.includes('maça')){
        this.trashType = 'grey'
      } else if(trashgroup.includes('garrafa')){
        this.trashType = 'yellow'
      }else if(trashgroup.includes('vidro')){
        this.trashType = 'green'
      }else if (trashgroup.includes('papel')){
        this.trashType = 'blue'
      }else if (trashgroup.includes('iron')){
        this.trashType = 'logo'
      }
  }
 
  draw(ctx){
    ctx.save()
    
    if (DEBUG) {
      ctx.save()
      ctx.globalAlpha = 0.7
      ctx.fillStyle = "red"
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
      ctx.fill()
      ctx.restore()

    }
   
    ctx.drawImage(this.trashImg, this.x-this.radius*2.5/2, this.y-this.radius*2.5/2, this.radius*2.5,this.radius*2.5)
    
    
    
    ctx.restore()
 
 }
 
 update(){
  this.y += this.vy
 }
 
 }




