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

    if (this.player1 >= 3 && this.player2 >= 3) {

      if (this.player1 === this.player2) {
        return "Deuce";
      }

      if (this.player1 === this.player2 + 1) {
        return "Advantage Player 1";
      }

      if (this.player2 === this.player1 + 1) {
        return "Advantage Player 2";
      }

      if (this.player1 >= this.player2 + 2) {
        return "Game for Player 1";
      }

      if (this.player2 >= this.player1 + 2) {
        return "Game for Player 2";
      }

    }

    const scoreNames = ["Love", "15", "30", "40"];

    return scoreNames[this.player1] + "-" + scoreNames[this.player2];

  }

}

export default TennisGame;