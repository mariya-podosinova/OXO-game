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

  if (board[row][column] !== null) return board;
  if (first) board[row][column] = "nought";
  else board[row][column] = "cross";

  first = !first;
  return board;
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  const boardToArray = [...board[0], ...board[1], ...board[2]];
  const numTurns = boardToArray.filter((el) => el !== null).length;
  // console.log(numTurns);
  console.log(boardToArray);

  if (numTurns > 4) {
    if (boardToArray[0] && boardToArray[1] && boardToArray[2]) {
      return boardToArray[0] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[3] && boardToArray[4] && boardToArray[5]) {
      return boardToArray[3] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[6] && boardToArray[7] && boardToArray[8]) {
      return boardToArray[6] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[0] && boardToArray[3] && boardToArray[6]) {
      return boardToArray[0] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[1] && boardToArray[4] && boardToArray[7]) {
      return boardToArray[1] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[2] && boardToArray[5] && boardToArray[8]) {
      return boardToArray[2] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[0] && boardToArray[4] && boardToArray[8]) {
      return boardToArray[0] === "nought" ? "noughts" : "crosses";
    } else if (boardToArray[6] && boardToArray[4] && boardToArray[2]) {
      return boardToArray[6] === "nought" ? "noughts" : "crosses";
    }
  }

  console.log("checkWinner was called");
  if (boardToArray.includes(null)) return null;
  else {
    return "nobody";
  }
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
