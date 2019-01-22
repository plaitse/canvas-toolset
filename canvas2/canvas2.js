draw = () => {
    const canvas = document.getElementById('canvas2');

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        // Big triangle
        context.beginPath();
        context.moveTo(50, 200);
        context.lineTo(350, 50);
        context.lineTo(350, 350);
        context.lineTo(50, 200);

        // Circle
        context.moveTo(338, 200);
        context.arc(256, 200, 82, 0, Math.PI * 2, false);

        // Semi circle
        context.moveTo(318, 200);
        context.arc(256, 200, 62, 0, Math.PI, false);

        // Draw lines
        context.stroke();

        // Small triangle
        context.beginPath();
        context.moveTo(80, 350);
        context.lineTo(20, 320);
        context.lineTo(20, 380);
        context.fill();
    }
}

document.addEventListener('DOMContentLoaded', draw());