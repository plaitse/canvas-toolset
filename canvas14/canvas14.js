/* --- Constants - Load images --- */
const earth = new Image();
earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
const moon = new Image();
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
const sun = new Image();
sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';

draw = () => {
    /* --- Instantiation --- */
    // Instantiate context
    const context = document.getElementById('canvas14').getContext('2d');
    // Instantiate time
    const time = new Date();

    /* --- Setting --- */
    // We can't draw new shapes behind existing shapes but we can use it to mask off certain areas, clear sections from the canvas, etc.
    // Here we set the type of compositing operation to apply when drawing new shapes
    // In this case, we set an effect which makes new shapes seem to be behind the existing canvas content
    // The sun set at the end will be behind the moon, the moon behind the earth and the earth behind the black rectangle (shadow)
    context.globalCompositeOperation = 'destination-over';
    // To draw a new image (i.e. where elements have a different position) we need to clear the canvas
    context.clearRect(0, 0, 500, 500);
    // Save the entire original state of the canvas before transformation is applied (e.g. Earth and Moon move)
    context.save();

    /* --- Earth animation --- */
    // Translate the top left corner of the canvas at the center
    context.translate(250, 250);
    context.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() + 
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );
    // Distance of the Earth from the Sun
    context.translate(180, 0);
    // Add rectangle to create a shadow
    context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    context.fillRect(0, -12, 40, 24);
    // Draw Earth image
    context.drawImage(earth, -12, -12);

    /* --- Moon animation --- */
    // As the moon moves faster around Earth than Earth around the moon
    // We need top save the entire state of the canvas with the position of the earth
    // To restore it with the new position of the moon
    context.save();
    // context.translate(0, 0);
    context.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    context.translate(0, 28.5);
    // Draw Moon image
    context.drawImage(moon, -3.5, -3.5);
    // Restore the canvas state like it was before the moon has moved
    context.restore();

    /* --- Setting --- */
    // Restore the original entire state of the canvas before Earth and Moon have moved
    context.restore();
    
    /* --- Blue circle --- */
    // Draw circle to show Earth orbit
    context.beginPath();
    context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    context.arc(250, 250, 180, 0, Math.PI * 2);
    context.stroke();
    
    /* --- Sun --- */
    // Set the image of the sun as the full background
    context.drawImage(sun, 0, 0, 500, 500);

    /* --- Setting --- */
    // Loop created by recursive call
    // Smoother way for animating by calling the animation frame when the system is ready to paint the frame.
    window.requestAnimationFrame(draw);
}

// Start animation after DOM is loaded
document.addEventListener('DOMContentLoaded', window.requestAnimationFrame(draw));