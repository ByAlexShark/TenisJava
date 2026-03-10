import TennisGame from "../src/tennis.js";

describe("Tennis Game", () => {

  test("Empieza el game", () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe("Love-Love");
  });

  test("Jugador 1 anota", () => {
    const game = new TennisGame();
    game.player1Scores();
    expect(game.getScore()).toBe("15-Love");
  });

  test("Jugador 2 anota", () => {
    const game = new TennisGame();
    game.player1Scores();
    game.player2Scores();
    expect(game.getScore()).toBe("15-15");
  });

  test("30-15", () => {
    const game = new TennisGame();

    game.player1Scores();
    game.player1Scores();
    game.player2Scores();

    expect(game.getScore()).toBe("30-15");
  });

  test("Deuce", () => {
    const game = new TennisGame();

    game.player1Scores();
    game.player1Scores();
    game.player1Scores();

    game.player2Scores();
    game.player2Scores();
    game.player2Scores();

    expect(game.getScore()).toBe("Deuce");
  });

  test("Advantage Player 1", () => {
    const game = new TennisGame();

    for (let i = 0; i < 3; i++) {
      game.player1Scores();
      game.player2Scores();
    }

    game.player1Scores();

    expect(game.getScore()).toBe("Advantage Player 1");
  });

});