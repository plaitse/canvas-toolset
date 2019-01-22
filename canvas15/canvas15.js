draw = () => {
    /* --- --- > Save entire canvas <--- --- */
    const context = document.getElementById('canvas15').getContext('2d');
    context.save();
    

    
    /* --- Global settings --- */
    const time = new Date();
    // Set hours
    let hr  = time.getHours();
    // Reset hours to 0 when reach 12
    hr = hr >= 12 ? hr - 12 : hr;
    // Set minutes
    const min = time.getMinutes();
    // Set seconds
    const sec = time.getSeconds();

    // Clear entire canvas
    context.clearRect(0, 0, 500, 500);
    // Translate at the center of the canvas
    context.translate(250, 250);
    // Rotate 90° counter-clockwise
    context.rotate(-Math.PI / 2);
    /* --- END global settings --- */



    /* --- Global drawing --- */
    // Draw blue circle
    context.beginPath();
    context.lineWidth = 8;
    context.strokeStyle = '#4B85A9';
    context.arc(0, 0, 160, 0, Math.PI * 2, true);
    context.stroke();
      
    // Draw hour marks
    // Set mark width
    context.lineWidth = 5;
    // 12 marks for 12 hours
    for (let i = 0; i < 12; i++) {
      // Start path
      context.beginPath();
      // 12 marks in 360° = 1 mark every 30° = PI / 6 radians
      context.rotate(Math.PI / 6);
      // Marks starts 100 px from the center
      context.moveTo(120, 0);
      // Marks ends 120 px from the center = 2 px length
      context.lineTo(140, 0);
      // Draw mark
      context.strokeStyle = '#000';
      context.stroke();
    }
  
    // Draw minute marks
    // Set mark width
    context.lineWidth = 3;
    // 60 minutes in 360° and 5 marks every 1 section -> 5 * 12 = 60
    for (let i = 0; i < 60; i++) {
      // Don't draw every 5th mark
      if (i % 5 != 0) {
        // Start path
        context.beginPath();
        // Marks starts 117 px from the center
        context.moveTo(136, 0);
        // Marks ends 120 px from the center = 2 px length
        context.lineTo(140, 0);
        // Draw mark
        context.strokeStyle = '#000';
        context.stroke();
      }
      // 60 marks in 360 ° = 1 mark every 6° = PI / 30 radians
      context.rotate(Math.PI / 30);
    }
    /* --- END global drawing --- */
  


    /* --- Draw hours --- */
    context.save();

    // Set arrow width
    context.lineWidth = 6;
    // Turn the arrow 30° every hour
    // 60 minutes in 1 hour -> 60 * 6 = 360 -> turn PI/360 radians every minute
    // 60 seconds in 1 minute -> 60 * 60 * 6 = 21 600 -> turn PI/21600 radians every second
    context.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    // Start path
    context.beginPath();
    // Marks starts -20 px from the center
    context.moveTo(-20, 0);
    // Marks ends 80 px from the center
    context.lineTo(80, 0);
    // Draw arrow
    context.strokeStyle = 'orange';
    context.stroke();

    context.restore();
    /* --- END draw hours --- */
  
  
  
    /* --- Draw minutes --- */
    context.save();

    // Set arrow width
    context.lineWidth = 4;
    // Turn the arrow 6° every minute
    // 60 seconds in 1 minute -> 30 * 60 = 1800 -> turn PI/1800 radians every second
    context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    // Start path
    context.beginPath();
    // Marks starts -28 px from the center
    context.moveTo(-28, 0);
    // Marks ends 112 px from the center
    context.lineTo(112, 0);
    // Draw arrow
    context.strokeStyle = 'orange';
    context.stroke();

    context.restore();
    /* --- END draw minutes --- */



    /* --- Draw seconds --- */
    context.save();

    context.rotate(sec * Math.PI / 30);
    // Set the color of the arrow
    context.strokeStyle = 'MediumSeaGreen';
    // Set arrow width
    context.lineWidth = 2;
    // Start path
    context.beginPath();
    // Marks starts -30 px from the center
    context.moveTo(-30, 0);
    // Marks ends 83 px from the center
    context.lineTo(83, 0);
    // Draw arrow
    context.stroke();
    
    // Red circle at the end of the arrow
    context.beginPath();
    context.arc(88, 0, 5, 0, Math.PI * 2, true);
    context.stroke();

    context.restore();
    /* --- END draw seconds --- */

    // Red ball at the center
    context.beginPath();
    context.fillStyle = 'MediumSeaGreen';
    context.arc(0, 0, 5, 0, Math.PI * 2, true);
    context.fill();
  


    /* --- --- > Restore entire canvas <--- --- */
    context.restore();
  


    // Loop
    window.requestAnimationFrame(draw);
  }
  
  document.addEventListener('DOMContentLoaded', window.requestAnimationFrame(draw));