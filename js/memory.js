class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    //add one to pairs clicked
    this.pairsClicked++;

    if(card1 === card2){
      //adding one to pairs guessed
      this.pairsGuessed++;
      return true;
    } else if (this.cards === undefined) {
      return undefined;
      //not working ^
    } else {
      return false;
    } 
  }

  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)){
      return true;
    } else {
      return false;
    }
  }
}