import React, { useEffect } from "react";
import { useAppSelector } from "./store/hook";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import { useDispatch } from "react-redux";
import Board from "./components/Board";
import { isColumnOfFour } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour } from "./utils/formulas";

const App = () => {
  const dispatch = useDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      dispatch(updateBoard(newBoard));
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
};

export default App;
