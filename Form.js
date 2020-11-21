class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting  = createElement('h2');
    this.reset = createButton("Reset");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2-50, 0);
    
    this.input.position(windowWidth/2-40, 160);
    this.button.position(windowWidth/2+30, 200);
    this.reset.position(windowWidth-100,30);

    

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(windowWidth/2-50, 160);
    });
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      carsAtEnd.update(0);
    });
  }
}
