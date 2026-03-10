import TennisGame from "../src/tennis.js";

describe("Tennis Game", () => {
  test("Empieza el game", () => {
    const game = new TennisGame();
    expect(game.getScore()).toBe("Love-Love");
  });
});