const academyModule = require("./academy");

// let winnerBoard = [
//   ["cross", null, null],
//   [null, "cross", null],
//   [null, null, "cross"],
// ];
// const checkForWinner = (noughts, crosses) => {
//   if (crosses.length === 3) {
//     return "crosses";
//   }
//   if (noughts.length === 3) {
//     return "noughts";
//   }
//   return null;
// };
// const diagonalChecking = () => {
//   winnerBoard.forEach((row, i) => {
//     if (i !== 1) {
//       let j = 2 - i;
//       const diagonalArr = [board[0][i], board[1][1], board[j][2]];
//       const crosses = diagonalArr.filter((col) => col === "cross");
//       const noughts = diagonalArr.filter((col) => col === "nought");

//       if (checkForWinner(noughts, crosses)) {
//         winner = checkForWinner(noughts, crosses);
//       }
//     }
//   });
//   return winner;
// };

// test('when invoking diagonalChecking it return a "cross" winner', () => {
//   const result = diagonalChecking();
//   expect(result).toEqual("crosses");
// });

describe("when we calling the takeTurn function", () => {
  test("sill not update the player if the cell is occupied", () => {
    //Arrange
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    //Act
    let output = academyModule.takeTurn(1, 1, initialBoard);
    //Assert

    const expectedBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    expect(output).toStrictEqual(expectedBoard);
  });
  test("will update the player to cross on empty cell", () => {
    //Arrange

    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    //Act
    let output = academyModule.takeTurn(1, 0, initialBoard);
    //Assert

    const expectedBoard = [
      [null, null, null],
      ["nought", "bob", null],
      [null, null, null],
    ];
    expect(output).toStrictEqual(expectedBoard);
  });
  // test("will update the player to nought on empty cell", () => {
  //   //todo3
  // });
  test("will do nothing if the column is completed", () => {
    //Arrange
    const initialBoard = [
      [null, "bob", null],
      [null, "bob", null],
      [null, "bob", null],
    ];
    //Act
    let output = academyModule.takeTurn(1, 1, initialBoard);
    //Assert

    const expectedBoard = [
      [null, "bob", null],
      [null, "bob", null],
      [null, "bob", null],
    ];
    expect(output).toStrictEqual(expectedBoard);
  });
  test("will throw an error if the row is invalid", () => {
    //Arrange
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    //Assert

    const expectedBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    try {
      //Act
      academyModule.takeTurn(10, 1, initialBoard);
      fail("There is no TypeError message");
    } catch (error) {
      expect(error.message).toEqual("Cannot read property '1' of undefined");
      expect(error.name).toEqual("TypeError");
      expect(initialBoard).toStrictEqual(expectedBoard);
    }
  });
  test("will throw an error if the board is invalid", () => {
    //Arrange
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    //Assert

    const expectedBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ];
    try {
      //Act
      academyModule.takeTurn(2, 3, initialBoard);
      fail("There is no TypeError message");
    } catch (error) {
      expect(error.message).toEqual("fail is not defined");
      expect(error.name).toEqual("ReferenceError");
      expect(initialBoard).toStrictEqual(expectedBoard);
    }
  });
});
