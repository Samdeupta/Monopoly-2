class Player {

  constructor(){
    this.index = null;
    this.name = null;
    this.block = 0;
    this.playerIndex
    this.cash = 1500;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  updating(){
    this.playerIndex = 'players/player' + this.index;
    database.ref(this.playerIndex).set({
      name:this.name,
      cash: this.cash,
      block: this.block
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    });
  }

  assign(){
    index = this.index; 
    Cash = this.cash;
    playerBlock = this.block;
    PlayerIndex = this.playerIndex;
  }
  
  // function to update playerBlock
  updateBlock(block){
    database.on(this.playerIndex + 'block').update({
      block: this.block
    });
  
  }
}




