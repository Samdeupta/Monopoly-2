class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
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
      inputWindow = new PlayerInput();
      inputWindow.display();

      //playerBlock = 12;
      //player.updateBlock(playerBlock)
    }
  }

  async playUpdate(){
    bank = new Bank();
    bank.linkData();
    bank.assign();

    player.updating();
    player.assign();

  }
} 