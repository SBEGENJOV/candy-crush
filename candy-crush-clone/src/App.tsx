import React, { useEffect } from "react";
import { useAppSelector } from "./store/hook";
import { updateBoard } from "./store";

const App = () => {
  const dispatch = useAppSelector();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  });

  return <div>App</div>;
};

export default App;
