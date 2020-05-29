class Bank{
    constructor(){
        this.cash1;
        this.cash2;
        this.cash3;
        this.cash4;
    }

    linkData(){
        this.cash1 = database.ref('players/player1/cash');
        this.cash1.on("value",(data)=>{
        this.cash1 = data.val()
        });

        this.cash2 = database.ref('players/player2/cash');
        this.cash2.on("value",(data)=>{
        this.cash2 = data.val()
        });

        this.cash3 = database.ref('players/player3/cash');
        this.cash3.on("value",(data)=>{
        this.cash3 = data.val()
        });

        this.cash4 = database.ref('players/player4/cash');
        this.cash4.on("value",(data)=>{
        this.cash4 = data.val()
        });
        
    }

    assign(){
        Cash1 = this.cash1;
        Cash2 = this.cash2;
        Cash3 = this.cash3;
        Cash4 = this.cash4;
    }
    
}