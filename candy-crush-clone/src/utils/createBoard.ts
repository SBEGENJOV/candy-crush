export const createBoard = (boardSize: number = 8) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => {});
