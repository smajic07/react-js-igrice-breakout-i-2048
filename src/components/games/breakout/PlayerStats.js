export default function PlayerStats(ctx, player, canvas) {
  // Nadimak igrača
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Nadimak: ${player.name}`, 20, 30);

  // Preostali životi
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("❤️", canvas.width / 2 + gap, 30);
    gap += 30;
  }

  // Bodovi
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Bodovi: ${player.score}`, canvas.width - 140, 30);
}
