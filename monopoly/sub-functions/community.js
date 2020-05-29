class Community{
    constructor(){
        this.community1Img = loadImage('images/community/community1.png');
        this.community2Img = loadImage('images/community/community2.png');
        this.community3Img = loadImage('images/community/community3.png');
        this.community4Img = loadImage('images/community/community4.png');
        this.community5Img = loadImage('images/community/community5.png');
        this.community6Img = loadImage('images/community/community6.png');
        this.community7Img = loadImage('images/community/community7.png');
        this.community8Img = loadImage('images/community/community8.png');
        this.community9Img = loadImage('images/community/community9.png');
        this.community10Img = loadImage('images/community/community10.png');

        this.randomize;
        this.community;
    }

    fate(){
        this.randomize = round(random(1,10));

        if(this.randomize === 1){
            Cash = Cash +20;
        }else if(this.randomize === 2){
            Cash = Cash + 200;
            Cash1 = Cash1 - 50;
            Cash2 = Cash2 - 50;
            Cash3 = Cash3 - 50;
            Cash4 = Cash4 - 50;
        }else if(this.randomize === 3){
            Cash = Cash - 150;
        }else if(this.randomize === 4){
            Cash = Cash - 50;
        }else if(this.randomize === 5){
            Cash = Cash + 100;
        }else if(this.randomize === 6){
            
        }else if(this.randomize === 7){
            Cash = Cash + 200;
        }else if(this.randomize === 8){
            playerBlock = 0;
        }else if(this.randomize === 9){
            Cash = Cash + 100;
        }else if(this.randomize === 10){
            Cash = Cash - 100;
        }
    }
}