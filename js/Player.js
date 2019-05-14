
class Player {
  constructor() {
    this.radius = 90
    this.direction // Possible values: undefined, "right", "left"
    this.speed = 6
    this.width = 2*this.radius
    this.height = 3*this.radius
    this.x = 340
    this.y = CANVAS_HEIGHT - this.height + this.radius
    this.color = "grey"

    this.playerImg = new Image();
    this.playerImg.src = './img/green.png'

    this.playerImg2 = new Image();
    this.playerImg2.src = './img/blue.png'

    this.playerImg3 = new Image();
    this.playerImg3.src = './img/grey.png'

    this.playerImg4 = new Image();
    this.playerImg4.src = './img/yellow.png'


    // this.playerImg5 = new Image();
    // this.playerImg5.src = './img/logo-ironhack-blue.png'

    document.onkeydown = event => {
      event.preventDefault()
      console.log(event.keyCode)
      if (event.keyCode === 37) { // left
        this.direction = "left"
      }
      if (event.keyCode === 39) { // right
        this.direction = "right"
      }
      
     if (event.keyCode === 38) { 
        
        switch(this.color){
          case 'grey': {
            this.color = "blue"
            break;
          }
          case 'blue': {
            this.color = "yellow"
            break;

          }
          case 'yellow': {
            this.color = "green"
            break;

          }
          case 'green': {
            this.color = "grey"
            break;

          }
        }

      }
      if (event.keyCode === 40) { 
        // "down"
        switch(this.color){
          case 'grey': {
            this.color = "green"
            break;

          }
          case 'green': {
            this.color = "yellow"
            break;

          }
          case 'yellow': {
            this.color = "blue"
            break;

          }
          case 'blue': {
            this.color = "grey"
            break;
          }
        }
      }
    }


    document.onkeyup = event => {
      if ((event.keyCode === 37 && this.direction === "left") || (event.keyCode === 39 && this.direction === "right")) {
        this.direction = undefined
      }
    }
  }
  draw(ctx) {
    ctx.save()
    if (DEBUG) {
      ctx.globalAlpha = 0.7
      ctx.save()
      ctx.fillStyle = "grey"
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
      ctx.fill()
      ctx.restore()
    }
    
    switch(this.color){
      case 'grey': {
        ctx.drawImage(this.playerImg3, this.x-this.radius, this.y-this.radius, this.width, this.height)
        ctx.restore()
        break;

      }
      case 'green': {
        ctx.drawImage(this.playerImg, this.x-this.radius, this.y-this.radius, this.width, this.height)
        ctx.restore()
        
        break;

      }
      case 'yellow': {
        ctx.drawImage(this.playerImg4, this.x-this.radius, this.y-this.radius, this.width, this.height)
        ctx.restore()
        break;

      }
      case 'blue': {
        ctx.drawImage(this.playerImg2, this.x-this.radius, this.y-this.radius, this.width, this.height)
        ctx.restore()
        break;
      }
      // case 'logo': {
      //   ctx.drawImage(this.playerImg5, this.x-this.radius, this.y-this.radius, this.width, this.height-10)
      //   ctx.restore()
      //   break;
      // }
    }
  }
  update() {
    if (this.direction === "right") {
      this.x += this.speed
    }
    if (this.direction === "left") {
      this.x -= this.speed
    }
    // Stop at the left
    if (this.x < this.radius) {
      this.x = this.radius
    }
    // Stop at the right
    if (this.x > CANVAS_WIDTH - this.radius) {
      this.x = CANVAS_WIDTH - this.radius
    }
  }
}