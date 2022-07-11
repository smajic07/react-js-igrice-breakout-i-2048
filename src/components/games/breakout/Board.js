import React, { useEffect, useRef } from "react";
import { BallMovement } from "./BallMovement";
import data from "./util/data";
import WallCollision from "./util/WallColision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroke";
import ResetBall from "./util/ResetBall";
import useEvent from "./hooks/useEvent";
import SudarSaCiglom from "../../../sounds/Breakout/Cigla.mp3";
import PorazBreakout from "../../../sounds/Breakout/PorazBreakout.mp3";

let bricks = [];
let { ballObj, paddleProps, brickObj, player } = data;

export default function Board() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      // Inicijalizacija cigli
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);
      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      // Čišćenje canvasa
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Prikaži statistiku
      PlayerStats(ctx, player, canvas);

      // Iscrtavanje cigli
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      // Iscrtavanje lopte i njeno pomjeranje
      BallMovement(ctx, ballObj);

      // Da li su sve cigle razbijene
      AllBroken(bricks, player, canvas, ballObj);

      // Da li je igra gotova?
      if (player.lives === 0) {
        const audio = new Audio(PorazBreakout);
        audio.play();
        player.lives = 5;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, canvas, paddleProps);
        bricks.length = 0;
      }

      // Provjera kolizije lopte i zida, te presumjeravanje lopte u tom slučaju
      WallCollision(ballObj, canvas, player, paddleProps);

      // Provjera kolizije sa ciglama
      let brickCollision;
      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);
        if (brickCollision.hit && !bricks[i].broke) {
          const audio = new Audio(SudarSaCiglom);
          audio.play();
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }

      // Inicijalizacija reketa
      Paddle(ctx, canvas, paddleProps);

      // Sudar lopte sa reketom
      PaddleHit(ballObj, paddleProps);

      // Ponovni poziv funkcije render
      requestAnimationFrame(render);
    };
    render();
  }, []);

  const handleKeyDown = (event) => {
    if (player.lives === 0) {
      return;
    }

    if (event.keyCode === 37) {
      paddleProps.x -= 30;
    } else if (event.keyCode === 39) {
      paddleProps.x += 30;
    }
  };

  useEvent("keydown", handleKeyDown);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="gameHeader">Breakout Game</h1>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={(
          event // Pomjeranje reketa
        ) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
    </div>
  );
}
