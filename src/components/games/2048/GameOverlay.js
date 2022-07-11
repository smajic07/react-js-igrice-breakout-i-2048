import React from "react";
import TryAgainLogo from "./img/try-again.gif";
import Pobjeda2048 from "../../../sounds/2048/Pobjeda2048.mp3";
import Poraz2048 from "../../../sounds/2048/Poraz2048.mp3";

export default function GameOverlay({ onRestart, board }) {
  if (board.hasWon()) {
    const audio = new Audio(Pobjeda2048);
    audio.play();
    return <div className="tile2048"></div>;
  } else if (board.hasLost()) {
    const audio = new Audio(Poraz2048);
    audio.play();
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src={TryAgainLogo}
          alt="Igraj Ponovo"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }
  return (
    null
  );
}
