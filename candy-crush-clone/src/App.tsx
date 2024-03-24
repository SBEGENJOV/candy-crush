import React, { useEffect } from "react";
import { useAppSelector } from "./store/hook";
import { updateBoard } from "./store";
import { createBoard } from "./utils/createBoard";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  return <div>App</div>;
};

export default App;
