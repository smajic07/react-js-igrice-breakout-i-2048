import SudarLopteIReketa from "../../../../sounds/Breakout/Reket.mp3";

export default function PaddleHit(ballObj, paddleProps) {
    if (
      ballObj.x < paddleProps.x + paddleProps.width &&
      ballObj.x > paddleProps.x &&
      paddleProps.y < paddleProps.y + paddleProps.height &&
      ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
    ) {
      // Provjera gdje je ballObj udarila paddleProps
      let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2);
  
      // Normalizovanje vrijednosti
      collidePoint = collidePoint / (paddleProps.width / 2);
  
      // Računanje ugla pod kojim lopta "odskače" sa reketa
      let angle = (collidePoint * Math.PI) / 3;
  
      ballObj.dx = ballObj.speed * Math.sin(angle);
      ballObj.dy = -ballObj.speed * Math.cos(angle);

      const audio = new Audio(SudarLopteIReketa);
      audio.play();

    }
  }
  