var botaoPonto
var pontos = 0
var multiplicadorBox1, multiplicadorBox2, multiplicadorBox3
var multiplicadorBase = 1
var c = 0, b = 0, a = 0, d = 0, g = 0
var highest = 0
var restarurante1, restarurante2, restarurante3, restarurante4
var sellButton

function preload(){}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(100)


  botaoPonto = createSprite(windowWidth/2, windowHeight/2, 150,150)
  fill('black')
  botaoPonto.shapeColor = "yellow"
  botaoPonto.depth -1
  
  multiplicadorBox1 = createSprite(100, 80, 100,100)
  multiplicadorBox1.shapeColor = 'red'
  multiplicadorBox2 = createSprite(220, 80, 100,100)
  multiplicadorBox2.shapeColor = 'red'
  multiplicadorBox3 = createSprite(340, 80, 100,100)
  multiplicadorBox3.shapeColor = 'red'
  multiplicadorBox4 = createSprite(460, 80, 100,100)
  multiplicadorBox4.shapeColor = 'red'

  restarurante1 = createSprite(1100,80,100,100)
  restarurante2 = createSprite(1220,80,100,100)
  restarurante3 = createSprite(1340,80,100,100)
  restarurante4 = createSprite(1460,80,100,100)

  restarurante1.shapeColor = 'blue'
  restarurante2.shapeColor = 'blue'
  restarurante3.shapeColor = 'blue'
  restarurante4.shapeColor = 'blue'

  sellButton = createSprite(botaoPonto.x, botaoPonto.y+30, 20,20)
  sellButton.shapeColor = 'lime'
}

function draw() {
  
  push()
  textSize(30)
  text("Multiplicadores", 180,200)
  pop()

 
  

  drawSprites()
  text("Biscoitos: "+pontos,botaoPonto.position.x-30,botaoPonto.position.y )
  text("Q", sellButton.x-5, sellButton.y+3)
  ganharPonto()
  unlock()
  vender()
}
















