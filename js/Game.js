class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    Player1= createSprite(100,200);
    Player2= createSprite(200,200);
    Player3= createSprite(300,200);
    Player4= createSprite(400,200);
    Player5= createSprite(500,200);
    Player6= createSprite(600,200);

    Players=[Player1,Player2,Player3,Player4,Player5,Player6]
  }

  play(){
    form.hide();

    textSize(40);
    textFont("Arial Black")
    fill("black")
    stroke("yellow")
    text("Game Has Started!", 550, 600)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 130;
      var index = 0

      //x & y of the Players 
      var x = 0
      var y 
      for(var plr in allPlayers){
        //add one to the index for every loop
        index=index+1

        x = x+200

        /*if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");*/
          y = displayHeight-allPlayers[plr].distance
          Players[index-1].x=x
          Players[index-1].y=y 

        /*display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
       }*/

       if(index===player.index){
         Players[index-1].shapeColor="yellow"
         camera.position.x = displayWidth/2
         camera.position.y = Players[index-1].y
       }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
  drawSprites()
}
}
