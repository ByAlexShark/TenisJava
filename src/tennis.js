class TennisGame {

  constructor() {
    this.player1 = 0;
  }

  player1Scores() {
    this.player1++;
  }

  getScore() {

    if (this.player1 === 1) {
      return "15-Love";
    }

    return "Love-Love";
  }

}

export default TennisGame;