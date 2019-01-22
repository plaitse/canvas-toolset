draw = () => {
    const context = document.getElementById('canvas11').getContext('2d');

    // Rectangle
    context.fillStyle = 'blue';
    context.fillRect(0, 0, 400, 400);

    // Fetch image
    const img = document.getElementById("stars");

    // Draw image
    img.onload = () => {
        context.drawImage(img, 0, 0);
    }

    // Add circle clip path
    context.arc(200, 200, 140, 0, Math.PI * 2, true);
    context.clip();
}

document.addEventListener('DOMContentLoaded', draw());