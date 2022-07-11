import SudarSaZidom from "../../../../sounds/Breakout/Zid.mp3";

export default function WallCollision(ballObj, canvas, player, paddleProps) {
  // Sudar sa "dnom" tj. donjim zidom
  if (ballObj.y + ballObj.rad >= canvas.height) {
    player.lives--;
    ballObj.x = paddleProps.x;
    ballObj.y = paddleProps.y - 30;
    ballObj.dx = 6 * (Math.random() * 2 - 1);
    ballObj.dy = -6;
    const audio = new Audio(SudarSaZidom);
    audio.play();
  }

  if (ballObj.y - ballObj.rad <= 0) {
    ballObj.dy *= -1;
    const audio = new Audio(SudarSaZidom);
    audio.play();
  }

  if (ballObj.x + ballObj.rad > canvas.width || ballObj.x - ballObj.rad < 0) {
    ballObj.dx *= -1;
    const audio = new Audio(SudarSaZidom);
    audio.play();
  }
}
