draw = () => {
    const context = document.getElementById('canvas10').getContext('2d');

    // Rectangle
    context.fillRect(0, 0, 400, 400);

    // Draw image
    const img = new Image();
    img.src = 'stars.jpg';
    img.onload = () => {
        context.drawImage(img, 0, 0);
    }

    // Add circle clip path
    context.arc(200, 200, 140, 0, Math.PI * 2, true);
    context.clip();
}

document.addEventListener('DOMContentLoaded', draw());