class Purple1{
    constructor(){
        this.block1Img = loadImage('deeds/mediterrneanA');

        this.block1Owner = undefined;
        this.block1Price = 60;
        this.block1Rent = 10;
        this.block1;
        this.color = "purple";
    }

    linkData(){
        this.block1Owner = database.ref('properties/mediterrneanA/owner');
        this.block1Price = database.ref('properties/mediterrneanA/price');
        this.block1Rent = database.ref('properties/mediterrneanA/rent');
    }

    buy(){
        if(PlayerIndex === index && this.block1Owner === undefined && Cash >= this.block1Price){
            Cash = Cash - this.block1Price;
            this.block1Owner = PlayerIndex;
        }
    }

    rent(){
        if(this.block1Owner === database.ref('players/player1')){
            PlayerIndex.Cash = Cash - this.block1Rent;
            this.block1Owner.Cash1 = Cash1 + this.block1Rent; 
        }
        else if(this.block1Owner === database.ref('players/player2')){
            PlayerIndex.Cash = Cash - this.block1Rent;
            this.block1Owner.Cash2 = Cash2 + this.block1Rent; 
        }
        else if(this.block1Owner === database.ref('players/player3')){
            PlayerIndex.Cash = Cash - this.block1Rent;
            this.block1Owner.Cash3 = Cash3 + this.block1Rent; 
        }
        else if(this.block1Owner === database.ref('players/player4')){
            PlayerIndex.Cash = Cash - this.block1Rent;
            this.block1Owner.Cash4 = Cash4 + this.block1Rent; 
        }
    }

}