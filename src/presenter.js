import TennisGame from "./tennis.js";

const game = new TennisGame();

const scoreElement = document.querySelector("#score");
const player1Button = document.querySelector("#p1");
const player2Button = document.querySelector("#p2");

player1Button.addEventListener("click", () => {
  game.player1Scores();
  scoreElement.innerHTML = game.getScore();
});

player2Button.addEventListener("click", () => {
  game.player2Scores();
  scoreElement.innerHTML = game.getScore();
});