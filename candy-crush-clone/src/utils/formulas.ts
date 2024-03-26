export const formulaForColumnOfFour = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;

export const formulaForColumnOfThree = (boardSize: number) =>
  boardSize * boardSize - (boardSize + boardSize) - 1;
