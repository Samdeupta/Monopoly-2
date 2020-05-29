class Chance{
    constructor(){
        this.chance1Img = loadImage('images/chance/chance1.png');
        this.chance2Img = loadImage('images/chance/chance2.png');
        this.chance3Img = loadImage('images/chance/chance3.png');
        this.chance4Img = loadImage('images/chance/chance4.png');
        this.chance5Img = loadImage('images/chance/chance5.png');
        this.chance6Img = loadImage('images/chance/chance6.png');
        this.chance7Img = loadImage('images/chance/chance7.png');
        this.chance8Img = loadImage('images/chance/chance8.png');
        this.chance9Img = loadImage('images/chance/chance9.png');
        this.chance10Img = loadImage('images/chance/chance10.png');

        this.randomize;
        this.chance;
    }

    fate(){
        this.randomize = round(random(1,10));

        if(this.randomize === 1){
            Cash = Cash - 15;
        }else if(this.randomize === 2){
            playerBlock = 0;
        }else if(this.randomize === 3){
            playerBlock = 39;
        }else if(this.randomize === 4){
            Cash = Cash + 150;
        }else if(this.randomize === 5){
            playerBlock = 24;
        }else if(this.randomize === 6){
            Cash = Cash + 50;
        }else if(this.randomize === 7){

        }else if(this.randomize === 8){
            playerBlock = playerBlock - 3;
        }else if(this.randomize === 9){
            Cash = cash + 50;
        }else if(this.randomize === 10){
            Cash = Cash - 200;

            Cash1 = Cash1 + 50;
            Cash2 = Cash2 + 50;
            Cash3 = Cash3 + 50;
            Cash4 = Cash4 + 50;
        }
    }
}