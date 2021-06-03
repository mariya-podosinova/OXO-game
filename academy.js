// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
let first = true;
let gameOn = true;
let winner = null;

function takeTurn(row, column) {
  console.log("takeTurn was called with row: " + row + ", column:" + column);

  if (!gameOn) return null;
  if (board[row][column] !== null) return board;

  if (first) board[row][column] = "nought";
  else board[row][column] = "cross";

  first = !first;
  return board;
}
const checkForWinner = (noughts, crosses) => {
  if (crosses.length === 3) {
    return "crosses";
  }
  if (noughts.length === 3) {
    return "noughts";
  }
  return null;
};
//Horizontal
const horizontalChecking = () => {
  board.forEach((row) => {
    const crosses = row.filter((col) => col === "cross");
    const noughts = row.filter((col) => col === "nought");

    if (checkForWinner(noughts, crosses)) {
      winner = checkForWinner(noughts, crosses);
    }
  });
  return winner;
};
//Vertical
const verticalChecking = () => {
  board.forEach((row, i) => {
    const columnArr = [board[0][i], board[1][i], board[2][i]];
    const crosses = columnArr.filter((col) => col === "cross");
    const noughts = columnArr.filter((col) => col === "nought");

    if (checkForWinner(noughts, crosses)) {
      winner = checkForWinner(noughts, crosses);
    }
  });
  return winner;
};

//Diagonal
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

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  const boardToArray = board.flat();

  console.log(boardToArray);
  const numTurns = boardToArray.filter((el) => el !== null).length;
  if (numTurns > 4) {
    horizontalChecking();
    verticalChecking();
    diagonalChecking();
    console.log(winner);
  }
  if (numTurns === 9) return "nobody";
  if (winner) {
    gameOn = false;
    return winner;
  } else {
    return null;
  }
}

// Set the game state back to its original state to play another game.
function resetGame() {
  console.log("resetGame was called");
  gameOn = true;
  winner = null;
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
  // eslint-disable-next-line no-undef
  module.exports = {
    checkForWinner,
    takeTurn,
    checkWinner,
    resetGame,
    getBoard,
    horizontalChecking,
    verticalChecking,
  };
} else {
  console.log("Running in Browser");
}
