class OptionWindow{
    constructor(){
        this.optionWindow;

        this.diceButton = createButton("ROLL DICE");
        this.tradeButton = createButton("TRADE");
        this.mortgageButton = createButton("MORTGAGE");
    }

    button(){
        this.diceRoll = new DiceRoll();
        this.diceRoll.linkData();

        this.diceButton.mousePressed(()=>{
            this.diceRoll.roll();
            this.diceRoll.playerMovement();
        });
        

    }

    display(){
        this.diceButton.position((displayWidth/2) - 161,displayHeight-150);
        this.tradeButton.position((displayWidth/2) - 31,displayHeight-150);
        this.mortgageButton.position((displayWidth/2) + 69,displayHeight-150);

        this.optionWindow = createSprite(displayWidth/2,displayHeight-100,350,150);
        
    }
}