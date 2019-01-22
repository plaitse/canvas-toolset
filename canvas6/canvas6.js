draw = () => {
    const context = document.getElementById('canvas6').getContext('2d');

    // Grid
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            context.strokeStyle = `rgb(
                    0,
                    ${Math.floor(255 - 42.5 * i)},
                    ${Math.floor(255 - 42.5 * j)}
                )`;
            context.strokeRect(j * 67, i * 67, 67, 67);

            // Color-ful squares
            if ((i == 3 && j == 3) || (i == 2 && j == 2)) {
                context.fillStyle = 'rgba(0, 255, 0, 0.3)';
                context.fillRect(j * 67, i * 67, 67, 67);
            }
            if ((i == 3 && j == 2) || (i == 2 && j == 3)) {
                context.fillStyle = 'rgba(0, 0, 255, 0.3)';
                context.fillRect(j * 67, i * 67, 67, 67);
            }
        }
    }

    // Transparent circle
    for (let i = 0; i < 6; i++) {
        context.fillStyle = '#999';
        context.globalAlpha = 0.1;
        context.beginPath();
        context.arc(200, 200, 50 + 20 * i, 0, Math.PI * 2, true);
        context.fill();
    }
}

document.addEventListener('DOMContentLoaded', draw());