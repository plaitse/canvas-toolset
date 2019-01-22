draw = () => {
    const canvas = document.getElementById('canvas4');

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(75, 40);
        context.bezierCurveTo(100, 100, 50, 100, 80, 25);
        context.bezierCurveTo(50, 100, 50, 60, 20, 60);
        context.fill();

        context.beginPath();
        context.moveTo(100, 200);
        context.quadraticCurveTo(25, 50, 100, 300);
        context.quadraticCurveTo(200, 300, 300, 300);
        context.quadraticCurveTo(200, 300, 300, 100);
        context.quadraticCurveTo(25, 25, 100, 200);
        context.stroke();
    }
}

document.addEventListener('DOMContentLoaded', draw());