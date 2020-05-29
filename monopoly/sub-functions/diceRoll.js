class DiceRoll{
    constructor(){
        this.dice1,this.dice2;
        this.total;
        this.turn;
    }

    linkData(){
        this.turn = database.ref('turn');
        this.turn.on("value",(data)=>{
        this.turn = data.val();
        });
    }

    roll(){
        this.dice1 = round(random(1,6));
        this.dice2 = round(random(1,6));

        this.total = this.dice1 + this.dice2;
    }

    playerMovement(){
        if(this.turn === index){
            playerBlock = playerBlock + this.total;
            this.turn = this.turn + 1;
        }
        if(this.turn > 4){
            this.turn = 1;
        }

        //console.log(this.turn)
    }
}