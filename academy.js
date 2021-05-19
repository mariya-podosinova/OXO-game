// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let first = true;

function takeTurn(row, column) {
  console.log("takeTurn was called with row: " + row + ", column:" + column);
  if (first) board[row][column] = "nought";
  else board[row][column] = "cross";

  first = !first;
  return board;
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  if (
    board[0][0] === "nought" &&
    board[0][1] === "nought" &&
    board[0][2] === "nought"
  )
    return "noughts";
  if (
    board[0][0] === "cross" &&
    board[0][1] === "cross" &&
    board[0][2] === "cross"
  )
    return "crosses";

  console.log("checkWinner was called");
  return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
  console.log("resetGame was called");
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  return board;
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.

function getBoard() {
  return board;
}

if (typeof exports === "object") {
  console.log("Running in Node");
  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  module.exports = {
    takeTurn,
    checkWinner,
    resetGame,
    getBoard,
  };
} else {
  console.log("Running in Browser");
}
