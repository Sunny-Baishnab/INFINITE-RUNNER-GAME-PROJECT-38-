var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game , rankgreeting;
var allPlayers;
var distance = 0;

var car1 , car2 , car3 , car4;
var car1img , car2img , car3img , car4img , groundimg , trackimg;
var cars;
function preload(){
   car1img = loadImage("giphy.gif");
   car2img = loadImage("giphy.gif");
   car3img = loadImage("giphy.gif");
   car4img = loadImage("giphy.gif");

   groundimg = loadImage("ground.png");
   trackimg = loadImage("track.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth-50,windowHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("#B39066");
  
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    
  }
}
