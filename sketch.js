var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Player1, Player2, Player3, Player4, Player5, Player6;
var Players;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 6){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
