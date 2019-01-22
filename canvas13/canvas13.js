const canvas = document.getElementById('canvas13');
const context = canvas.getContext('2d');
const earth = new Image();
earth.src = 'earth.png';
const jupiter = new Image();
jupiter.src = 'jupiter.png';
const mars = new Image();
mars.src = 'mars.png';
const mercury = new Image();
mercury.src = 'mercury.png';
const stars = new Image();
stars.src = 'stars3.jpg';
const venus = new Image();
venus.src = 'venus.png';

draw = () => {
    /* --- --- > Save entire canvas <--- --- */
    context.save();

    /* --- Global settings --- */
    const time = new Date();
    // Set minutes
    const min = time.getMinutes();
    // Set seconds
    const sec = time.getSeconds();
    // Set seconds
    const msec = time.getMilliseconds();

    // Clear entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars background
    context.drawImage(stars, 0, 0, stars.width, stars.height);

    // Draw sun at the center
    context.translate(270, 270);
    let sun = context.createRadialGradient(80, 80, 0, 80, 80, 80);
    sun.addColorStop(0, 'rgba(255, 255, 0, 1)');
    sun.addColorStop(0.5, 'rgba(255, 255,0, 0.9)');
    sun.addColorStop(1, 'rgba(255, 255, 0, 0)');
    context.fillStyle = sun;
    context.fillRect(0, 0, 200, 200);
    context.translate(-270, -270);

    // Translate at the center of the canvas
    context.translate(canvas.width / 2, canvas.height / 2);

    // Mercury
    context.save();
    context.beginPath();
    context.rotate((2 * Math.PI) / 5 * sec + (2 * Math.PI) / 5000 * msec);
    // context.fillStyle = 'brown';
    // context.arc(80, 80, 2, 0, Math.PI * 2, false);
    // context.fill();
    context.drawImage(mercury, -80, -80, mercury.width / 80 , mercury.height / 80);
    context.restore();

    // Venus
    context.save();
    context.beginPath();
    context.rotate((2 * Math.PI) / 10 * sec + (2 * Math.PI) / 10000 * msec);
    context.drawImage(venus, -110, -110, venus.width / 50 , venus.height / 50);
    context.restore();

    // Earth
    context.save();
    context.beginPath();
    context.rotate((2 * Math.PI) / 15 * sec + (2 * Math.PI) / 15000 * msec);
    context.drawImage(earth, -140, -140, earth.width / 50 , earth.height / 50);
    context.restore();

    // Mars
    context.save();
    context.beginPath();
    context.rotate((2 * Math.PI) / 20 * sec + (2 * Math.PI) / 20000 * msec);
    context.drawImage(mars, -160, -160, mars.width / 300 , mars.height / 300);
    context.restore();

    // Jupiter
    context.save();
    context.beginPath();
    context.rotate((2 * Math.PI) / 25 * sec + (2 * Math.PI) / 25000 * msec);
    context.drawImage(jupiter, -250, -250, jupiter.width / 5 , jupiter.height / 5);
    context.restore();

    // Restore canvas state
    context.restore();

    // Loop
    window.requestAnimationFrame(draw);
};

document.addEventListener('DOMContentLoaded', window.requestAnimationFrame(draw));
