draw = () => {
    const canvas = document.getElementById('canvas3');

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {

                let x = 15 + j * 97;
                let y = 15 + i * 97;

                if (j > 1) {
                    context.fillRect(x, y, 80, 80);
                } else {
                    context.strokeRect(x, y, 80, 80);
                }

                // Draw lines
                context.stroke();
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', draw());