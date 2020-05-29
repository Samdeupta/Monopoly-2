// game basic elements
var gameState = 0;
var playerCount = 0;
var turn = 1;
var database;

//player elements
var allPlayers,player;
var index,PlayerIndex;
var playerBlock;

//player cash
var Cash;
var Cash1,Cash2,Cash3,Cash4;

//board
var board,boardImg;

//sub functoin variables
var inputWindow,optionWindow,game,bank;

//charecters
var plane,car,hat,ship;


function preload(){
  //board image
  boardImg = loadImage('images/monopolyBoard.png');
  
  //peices images
  car = loadImage('images/peices/car.png');
  hat = loadImage('images/peices/hat.png');
  plane = loadImage('images/peices/plane.png');
  ship = loadImage('images/peices/ship.png');
}


function setup() {
  createCanvas(displayWidth,displayHeight-111);

  database = firebase.database();
    
  game = new Game();
  game.getState();
  game.start();
  
  //player peice.scale = 0.4
  
  

}

function draw() {
  background('black');

  console.log(playerBlock);
  game.playUpdate();
  
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    inputWindow.destroy();

    optionWindow = new OptionWindow();
    optionWindow.display();
    optionWindow.button();
    
  }

  
  drawSprites();
}