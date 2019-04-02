
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

//constants
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

let frame = 0 //the frame counter
let enemies= [new Enemy]
let player = new Player()

let bg = new Background()


function drawEverything() {
  ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
  
  bg.draw(ctx)
  
  for (let i = 0; i < enemies.length; i++){
    enemies[i].draw(ctx)
  }
 
  player.draw(ctx)
}

function updateEverything() {
  frame++
 if (frame % 100 === 0){ // When the frame is multiple of 120
   enemies.push(new Enemy())
   console.log('enemies push')
   console.log(enemies)
 }
 
 for (let i = 0; i < enemies.length; i++){
   enemies[i].update()
 }
//  player.update()
}
 
   
  



function animation() {
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}
  animation()
