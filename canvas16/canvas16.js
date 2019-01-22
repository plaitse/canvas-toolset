const canvas = document.getElementById('canvas16');
const context = canvas.getContext('2d');
let animate;

// Properties
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  vx: 8,
  vy: 6,
  radius: 25,
  color: '#000',
  draw: function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  }
};

draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  // Increment 8px the horizontal position
  ball.x += ball.vx;
  // Increment 6px the vertical position
  ball.y += ball.vy;

  // If ball goes vertically out of the canvas -> goes the otherway
  if (ball.y + ball.vy > canvas.height - ball.radius
    || ball.y + ball.vy < 0 + ball.radius) {
    ball.vy = -ball.vy;
  }
  // If ball goes horizontally out of the canvas -> goes the otherway
  if (ball.x + ball.vx > canvas.width - ball.radius
    || ball.x + ball.vx < 0 + ball.radius) {
    ball.vx = -ball.vx;
  }

  // Loop
  animate = window.requestAnimationFrame(draw);
}

// Events
canvas.addEventListener('mouseover', (e) => animate = window.requestAnimationFrame(draw));
canvas.addEventListener('mouseout', (e) => window.cancelAnimationFrame(animate));

ball.draw();