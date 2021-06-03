/* eslint-disable no-undef */
const academyModule = require("./academy");

describe("when we calling the horizontalChecking function", () => {
  test("it returns null if its empty", () => {
    const actual = academyModule.horizontalChecking();
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("it returns noughts if its a three noughts in a row", () => {
    //Arrange
    academyModule.takeTurn(0, 0);
    academyModule.takeTurn(1, 0);
    academyModule.takeTurn(0, 1);
    academyModule.takeTurn(1, 1);
    academyModule.takeTurn(0, 2);
    //Act
    let actual = academyModule.horizontalChecking();
    //Assert
    const expected = "noughts";
    expect(actual).toStrictEqual(expected);
  });
});

describe("when we calling the takeTurn function", () => {
  beforeEach(() => {
    academyModule.resetGame();
  });
  test("sill not update the player if the cell is occupied", () => {
    //Arrange
    academyModule.takeTurn(1, 1);
    //Act
    let output = academyModule.takeTurn(1, 1);
    //Assert
    const expectedBoard = [
      [null, null, null],
      [null, "cross", null],
      [null, null, null],
    ];
    expect(output).toStrictEqual(expectedBoard);
  });

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

    expect(output).toStrictEqual(expectedBoard);
  });

  test("will do nothing if the column is completed", () => {
    //Arrange
    academyModule.takeTurn(1, 0);
    academyModule.takeTurn(1, 1);
    academyModule.takeTurn(1, 2);
    //Act
    let output = academyModule.takeTurn(1, 2);
    //Assert
    const expectedBoard = [
      [null, null, null],
      ["nought", "cross", "nought"],
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
