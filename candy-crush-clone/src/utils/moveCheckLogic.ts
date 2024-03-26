export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor: string = newBoard[i];

    const isBlank: boolean = newBoard[i] === "";

    if (
      columnOfFour.every(
        (square: number) => newBoard[square] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((square: number) => (newBoard[square] = ""));
      return true;
    }
  }
};
