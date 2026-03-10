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

    const scoreNames = ["Love", "15", "30", "40"];

    return scoreNames[this.player1] + "-" + scoreNames[this.player2];

  }

}

export default TennisGame;