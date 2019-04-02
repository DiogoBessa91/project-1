
class Player{
  constructor(){
    this.radius = 30
    this.x = 340
    this.y = 730;

    this.playerImg = new Image();
    this.playerImg.src = '/img/green.png'
}

draw(ctx){
  ctx.save()
  ctx.drawImage(this.playerImg, this.x, this.y, 150, 300)
  ctx.restore()
}
}