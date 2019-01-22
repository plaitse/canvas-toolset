draw = () => {
    const context = document.getElementById('canvas12').getContext('2d');

    // The rotation center point is always the top-left corner of the canvas
    // and not a locatoin relative to any shape.
    // To change the center point, we need to translate the center.
    // We rotate in radians = (PI / 180) * degrees

    // Black rectangle
    context.fillStyle = '#000';
    context.fillRect(150, 180, 100, 50);

    /* --- To rotate a shape around its center --- */
    // First, we translate to move the matrix's origin to the shape's center
    // X center = x coordinate + width length / 2
    // Y center = y coordinate + height length / 2
    // Degrees vs Radians
    // 360 (degrees) = 2 * PI (radians) = 6,28 (radians)
    // 180 (degrees) = PI (radians) = 3,14 (radians)
    // 90 (degrees) = PI / 2 (radians) = 1,57 (radians)
    // 60 (degrees) = PI / 3 (radians) = 1,05 (radians)
    // 45 (degrees) = PI / 4 (radians) = 0,79 (radians)
    // 36 (degrees) = PI / 5 (radians) = 0,63 (radians)
    // 30 (degrees) = PI / 6 (radians) = 0,52 (radians)
    // 6 (degrees) = PI / 30 (radians) = 0,10 (radians)
    // context.translate(185, 190);
    context.translate(200, 205);
    // Then we rotate the matrix in radians (here 90 degrees)
    context.rotate(Math.PI / 2);
    // Finally, we translate to move the matrix's origin back to its starting point (negative cooredinates/direction)
    // context.translate(-185, -190);
    context.translate(-200, -205);

    // Rotated rectangle
    context.fillStyle = 'blue';
    context.fillRect(150, 180, 100, 50);
}

// Start animation after DOM is loaded
document.addEventListener('DOMContentLoaded', draw());