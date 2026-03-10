class TennisGame {

  constructor() {
    this.player1 = 0;
    this.player2 = 0;
  }

  player1Scores() {
    this.player1++;
  }

  player2Scores() {
    this.player2++;
  }

  getScore() {

    if (this.player1 === 1 && this.player2 === 0) {
      return "15-Love";
    }

    if (this.player1 === 1 && this.player2 === 1) {
      return "15-15";
    }

    return "Love-Love";

  }

}

export default TennisGame;