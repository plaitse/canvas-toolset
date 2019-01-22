draw = () => {
    const canvas = document.getElementById('canvas1');

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        // Colorful rectangles
        context.fillStyle = 'rgb(255, 0, 0)';
        context.fillRect(10, 10, 90, 180);

        context.fillStyle = 'rgb(0, 0, 255)';
        context.fillRect(110, 30, 70, 70);

        context.fillStyle = 'rgba(255, 255, 0, 0.5)';
        context.fillRect(90, 90, 50, 50);

        // Black rectangles
        context.fillStyle = 'rgb(0, 0, 0)';
        context.fillRect(0, 300, 100, 100);
        context.clearRect(20, 320, 60, 60);

        context.fillStyle = 'rgb(0, 0, 0)';
        context.fillRect(300, 300, 100, 100);
        context.clearRect(320, 320, 60, 60);
        context.strokeRect(330, 330, 40, 40);
    }
}

document.addEventListener('DOMContentLoaded', draw());