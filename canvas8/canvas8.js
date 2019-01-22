draw = () => {
    const context = document.getElementById('canvas8').getContext('2d');

    // Circle
    context.fillStyle = 'rgb(0, 255, 0)';
    context.arc(200, 200, 82, 0, Math.PI * 2, false);
    context.fill();

    // Rectangle
    context.rotate((Math.PI / 180) * 45);
    context.translate(85, -200);
    context.scale(1, 2);
    context.fillStyle = 'rgb(255, 0, 0)';
    context.fillRect(150, 150, 100, 100);
}

document.addEventListener('DOMContentLoaded', draw());