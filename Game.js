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
      //player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("car1",car1img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4img);
    cars = [car1,car2,car3,car4];
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if(allPlayers!==undefined){
      background("#B39066");
      image(trackimg,0,-windowHeight*4,windowWidth,windowHeight*5);
      var index = 0;
      var x = 210;
      var y = 0;
      //var displayPosition = 130;
      for(var i in allPlayers){
        index = index+1;
        x = x+300;
        y = windowHeight - allPlayers[i].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index === player.index){
          strokeWeight(4);
          stroke("black");
          fill("yellow");
          ellipse(x,y,60,60);
          cars[index-1].shapeColor = "red";
          camera.position.x = windowWidth/2;
          camera.position.y = cars[index-1].y;
        }
        
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }
    if(player.distance>3860){
      gameState = 2;
      player.rank = player.rank+1;
      Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
  }
  end(){
    console.log("game has ended");
    console.log(player.rank);
    textSize(30);
    text("your Rank: "+player.rank,windowWidth/2,360);
  }
}
