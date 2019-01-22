draw = () => {
    const context = document.getElementById('canvas9').getContext('2d');

    // Rectangle
    context.fillRect(0, 0, 400, 400);

    // Circle
    context.translate(200, 200);
    context.arc(0, 0, 100, 0, Math.PI * 2, true);
    context.clip();

    // Linear Gradient
    const lingrad = context.createLinearGradient(0, -100, 0, 100);
    lingrad.addColorStop(0, 'blue');
    lingrad.addColorStop(1, 'red');
    context.fillStyle = lingrad;
    context.fillRect(-100, -100, 200, 200);

}

document.addEventListener('DOMContentLoaded', draw());