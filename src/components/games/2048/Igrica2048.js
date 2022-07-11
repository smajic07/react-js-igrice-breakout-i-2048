import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "./helper";
import useEvent from "./hooks/useEvent";
import GameOverlay from "./GameOverlay";

import "../../../main.scss";
import "../../../styles.scss";

const Igrica2048 = ({stranica, setStranica}) => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          Nova Igra
        </div>
        <div className="score-box">
          <div className="score-header">BODOVI</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
      <br />
      <div style={{ color: "white" }}>
        ←{" "}
        <a className="link" onClick={() => { setStranica("home") }}>
          Home
        </a>
      </div>
      <footer className="futer">
        <p>
          <span>
            Copyright © 2021 All Rights Reserved by{" "}
            <a
              className="link"
              href="mailto:smajic.edin.7@gmail.com"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send me an email"
            >
              Edin Smajić
            </a>
          </span>
          .
        </p>
      </footer>
    </div>
  );
};

export default Igrica2048;
