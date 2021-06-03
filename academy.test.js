/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
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

// eslint-disable-next-line no-undef
describe("when we calling the takeTurn function", () => {
  // eslint-disable-next-line no-undef
  test("sill not update the player if the cell is occupied", () => {
    //Arrange
    academyModule.takeTurn(1, 1);

    //Act
    let output = academyModule.takeTurn(1, 1);
    //Assert

    const expectedBoard = [
      [null, null, null],
      [null, "nought", null],
      [null, null, null],
    ];
    // eslint-disable-next-line no-undef
    expect(output).toStrictEqual(expectedBoard);
  });
  // eslint-disable-next-line no-undef
  test("will update the player to cross on empty cell", () => {
    //Arrange
    academyModule.takeTurn(1, 1);

    //Act
    let output = academyModule.takeTurn(1, 0);
    //Assert

    const expectedBoard = [
      [null, null, null],
      ["cross", "nought", null],
      [null, null, null],
    ];
    // eslint-disable-next-line no-undef
    expect(output).toStrictEqual(expectedBoard);
  });

  test("will do nothing if the column is completed", () => {
    //Arrange
    academyModule.takeTurn(1, 2);

    //Act
    let output = academyModule.takeTurn(1, 2);
    //Assert

    const expectedBoard = [
      [null, null, null],
      ["cross", "nought", "nought"],
      [null, null, null],
    ];
    expect(output).toStrictEqual(expectedBoard);
  });
  test("will throw an error if the row is invalid", () => {
    try {
      //Act
      academyModule.takeTurn(10, 1);
      fail("There is no TypeError message");
    } catch (error) {
      expect(error.message).toEqual("Cannot read property '1' of undefined");
      expect(error.name).toEqual("TypeError");
    }
  });
  test("will throw an error if the board is invalid", () => {
    try {
      //Act
      academyModule.takeTurn(2, 3);
      fail("There is no TypeError message");
    } catch (error) {
      expect(error.message).toEqual("fail is not defined");
      expect(error.name).toEqual("ReferenceError");
    }
  });
});
