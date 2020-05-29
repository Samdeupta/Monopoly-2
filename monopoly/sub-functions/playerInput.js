class PlayerInput {

  constructor() {
    this.inputImg = loadImage('images/inputWindow/registerWindow.png');
    this.waitingImg = loadImage('images/inputWindow/waitingWindow.png');

    this.input = createInput("Name");
    this.button = createButton("PLAY");
    this.window;
  } 

  destroy(){
    this.window.destroy();
  }

  display(){
    this.window = createSprite(displayWidth/2,(displayHeight-111)/2);
    this.window.addImage(this.inputImg);

    this.input.position(displayWidth/2 -100, (displayHeight-111)/2 + 30);
    this.button.position(displayWidth/2 +100, (displayHeight-111)/2 + 30);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      player.name = this.input.value();
      playerCount +=1;
      player.index = playerCount; 
      player.updating();
      player.updateCount(playerCount);

      //assigning value and updating player block
      playerBlock = 12;
      player.updateBlock(block)

      if(allPlayers === undefined){
        this.window.addImage(this.waitingImg);
      }
    }); 
  }

  
}
