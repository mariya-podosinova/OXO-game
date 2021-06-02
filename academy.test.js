const academy = require("./academy");

let board = [
  ["cross", null, null],
  [null, "cross", null],
  [null, null, "cross"],
];
const checkForWinner = (noughts, crosses) => {
  if (crosses.length === 3) {
    return "crosses";
  }
  if (noughts.length === 3) {
    return "noughts";
  }
  return null;
};
const diagonalChecking = () => {
  board.forEach((row, i) => {
    if (i !== 1) {
      let j = 2 - i;
      const diagonalArr = [board[0][i], board[1][1], board[j][2]];
      const crosses = diagonalArr.filter((col) => col === "cross");
      const noughts = diagonalArr.filter((col) => col === "nought");

      if (checkForWinner(noughts, crosses)) {
        winner = checkForWinner(noughts, crosses);
      }
    }
  });
  return winner;
};

test('when invoking diagonalChecking it return a "cross" winner', () => {
  const result = diagonalChecking();
  expect(result).toEqual("crosses");
});
