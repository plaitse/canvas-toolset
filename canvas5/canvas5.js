draw = () => {
    const canvas = document.getElementById('canvas5');

    if (canvas.getContext) {
        const context = canvas.getContext('2d');

        const square = new Path2D();
        square.rect(150, 150, 100, 100);

        const circle = new Path2D();
        circle.moveTo(300, 200);
        circle.arc(200, 200, 100, 0, 2 * Math.PI);

        context.fill(square);
        context.stroke(circle);
    }
}

document.addEventListener('DOMContentLoaded', draw());