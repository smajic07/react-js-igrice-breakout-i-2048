export default function BrickCollision(circle, rect) {
  var distX = Math.abs(circle.x - rect.x - rect.width / 2);
  var distY = Math.abs(circle.y - rect.y - rect.height / 2);

  if (distX > rect.width / 2 + circle.rad) {
    return {
      hit: false,
    };
  }
  if (distY > rect.height / 2 + circle.rad) {
    return {
      hit: false,
    };
  }

  if (distX <= rect.width / 2) {
    return {
      hit: true,
      axis: "Y",
    };
  }
  if (distY <= rect.height / 2) {
    return {
      hit: true,
      axis: "X",
    };
  }

  // Provjera kolizije sa čoškovima
  var dx = distX - rect.width / 2;
  var dy = distY - rect.height / 2;
  // ako je "dx * dx + dy * dy <= circle.rad * circle.rad" vrati true, u suprotnom vrati false
  return {
    hit: dx * dx + dy * dy <= circle.rad * circle.rad,
    axis: "X",
  };
}
