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
    if (boardToArray[0] && boardToArray[1] && boardToArray[2] === "nought") {
      return "noughts";
    }
    // if (((winningBoard[3] == winningBoard[4]) == winningBoard[5]) === 0) {
    //   return "noughts";
    // }
    // if (((winningBoard[6] == winningBoard[7]) == winningBoard[8]) === 0) {
    //   return "noughts";
    // }
    // if (((winningBoard[0] == winningBoard[3]) == winningBoard[6]) === 0) {
    //   return "noughts";
    // }
    // if (((winningBoard[1] == winningBoard[4]) == winningBoard[7]) === 0) {
    //   return "noughts";
    // }
    // if (((winningBoard[2] == winningBoard[5]) == winningBoard[8]) === 0) {
    //   return "noughts";
    // }
    // if (((winningBoard[0] == winningBoard[1]) == winningBoard[2]) === 1) {
    //   return "crosses";
    // }
    // if (((winningBoard[3] == winningBoard[4]) == winningBoard[5]) === 1) {
    //   return "crosses";
    // }
    // if (((winningBoard[6] == winningBoard[7]) == winningBoard[8]) === 1) {
    //   return "crosses";
    // }
    // if (((winningBoard[0] == winningBoard[3]) == winningBoard[6]) === 1) {
    //   return "crosses";
    // }
    // if (((winningBoard[1] == winningBoard[4]) == winningBoard[7]) === 1) {
    //   return "crosses";
    // }
    // if (((winningBoard[2] == winningBoard[5]) == winningBoard[8]) === 1) {
    //   return "crosses";
    // }
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
