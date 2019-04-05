
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

//constants
const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height
const DEBUG = false

let frame = 0 //the frame counter
let score = 100
let enemies = [new Enemy('./trash/maça.png')]
let player = new Player()
let bg = new Background()

let eatTrash = new Audio();
let badTrash= new Audio();
let over = new Audio();
let won = new Audio();



eatTrash.src = "./som/Cartoon Fall Sound Effects (mp3cut.net).mp3";
over.src = "./som/Funny laugh sound effect for your vlog (1) (mp3cut.net).mp3";
won.src = "./som/Kids Cheering Sound Effect.mp3";
badTrash.src = "./som/Wrong Buzzer Sound Effect (mp3cut.net) (mp3cut.net).mp3"

let backSound = new Audio();
backSound.src = "./som/Funny Moments Music  Funny Background Music - Fun Instrumental Comedy Music.mp3"

function drawEverything() {
  backSound.play()
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  
  bg.draw(ctx)
  
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw(ctx)
  }
  
  player.draw(ctx)
  
  drawScore()
}

function updateEverything() {
  frame++
  if (frame % 150 === 0) {
    let arrayImg= ['./trash/maça.png', './trash/garrafa.png', './trash/papel.png', './trash/vidro.png', './img/iron_jo.png', './img/iron_max.png', './img/iron_most.png']
    let randomImg = Math.floor((Math.random() * arrayImg.length));
    enemies.push(new Enemy(arrayImg[randomImg]))
    // console.log('enemies push')
    // console.log(enemies)
  }



  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update()
  }

  for (let i = 0; i < enemies.length; i++) {
    if (checkCollision(player, enemies[i])) {
      player.score += enemies[i].score
      console.log(enemies[i])
      enemies.splice(i, 1)  
    }
  }
  player.update()
}

function checkCollision(player, enemy) {
  let decreaseScore = false
  let removeIndex = 0
  let distance = Math.sqrt((enemy.x - player.x) ** 2 + (enemy.y - player.y) ** 2)
  if(player.radius > distance){
    console.log(player, enemy);
    if(enemy.trashType === player.color){
    score +=10;
    eatTrash.play()}
    else {
    score -= 10;
    badTrash.play()}
  }
  enemies.forEach((enemy, index) => {
    if (enemy.y+10 > CANVAS_HEIGHT){
      decreaseScore = true
      removeIndex = index
    }
  });
  if(decreaseScore){
    enemies[removeIndex].y = CANVAS_HEIGHT-30
    enemies[removeIndex].vy = 0
    score -= 10;
  }
  return player.radius > distance
}

function drawScore() {
  ctx.save()
  ctx.font = "40px Arial"
  ctx.fillStyle = "white"
  ctx.lineWidth = 5
  ctx.strokeText("Score: "+score, CANVAS_WIDTH-220, 130)
  ctx.fillText("Score: "+score, CANVAS_WIDTH-220, 130)
  ctx.restore()
}


function animation() {
  if (0 < score && score < 200) {
    updateEverything()
    drawEverything()
    window.requestAnimationFrame(animation)
  }
  else if (score <= 0) {
    displayGameLost()
  }
  else {
    displayGameWon()
  }
}


let gameOverImg = new Image()
gameOverImg.src = './img/gameover.png'

let gameOverImg2 = new Image()
gameOverImg2.src = './img/Slimygloop_BrandPage_footer_goop.png'

function displayGameLost(){
  over.play()
  ctx.fillStyle = "white"
  ctx.font = "60px Arial"
  ctx.fillRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(gameOverImg2, 0, -2 , CANVAS_WIDTH, CANVAS_HEIGHT/2)
  ctx.drawImage(gameOverImg, 10, 500 , CANVAS_WIDTH/2, CANVAS_HEIGHT/2)
  ctx.fillStyle = "black"
  ctx.fillText("GAME OVER", CANVAS_WIDTH/2, CANVAS_HEIGHT/2)
  ctx.font = "40px Arial"
  ctx.fillText("the little Bit** won", 420, 600)
}

let gameWonImg = new Image()
gameWonImg.src = './img/won.png'

let gameWonImg2 = new Image()
gameWonImg2.src = './img/spark.jpg'

function displayGameWon(){
  won.play()
  ctx.fillStyle = "white"
ctx.font = "60px Arial"
ctx.fillRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT)
ctx.drawImage(gameWonImg2, 0, -2 , CANVAS_WIDTH, CANVAS_HEIGHT/2)
ctx.drawImage(gameWonImg, 10, 500 , CANVAS_WIDTH/2, CANVAS_HEIGHT/2)
 ctx.fillStyle = "black"
 ctx.fillText("CONGRATS", CANVAS_WIDTH/2, CANVAS_HEIGHT/2)
 ctx.font = "40px Arial"
  ctx.fillText("You cleaned the city!!", 410, 600)
}



//buttons
let playid = document.getElementById('playid')
// var myAudio = document.getElementById('myAudio');

playid.onclick = function(){
  document.getElementById('startid').style.display = "none"
  animation()
}


document.getElementById('instructions-button').onclick = function () {
  document.getElementById('startid').style.display = "none"
  document.getElementById('instructions').style.display = "block"

}

document.getElementById('goback').onclick = function () {
  document.getElementById('instructions').style.display = "none"
  document.getElementById('startid').style.display = "block"
}

document.getElementById('retry').onclick = function () {
  window.location.reload(true)
}
