draw = () => {
    const context = document.getElementById('canvas7').getContext('2d');

    const img = new Image();
    img.src = 'pattern.jpg';

    // Create pattern
    img.onload = () => {
        context.fillStyle = context.createPattern(img, 'repeat');
        context.fillRect(0, 0, 300, 350);
    }

    // Create shaddow
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    context.shadowColor = 'rgba(0, 0, 0, 0.5)';
}

document.addEventListener('DOMContentLoaded', draw());