// HTML CANVAS PLAY - w3Schools HTML CANVAS REFERENCE

// 1. Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


// 1. RECTANGLES
// Draw rectangles to canvas
ctx.strokeRect(50, 20, 150, 100); // Draw a rectangle outline (default color black)
ctx.fillRect(220, 20, 150, 100); // Draw a filled rectangle (default color black)

// Use strokeStyle and fillStyle to set color
// Color may be any css color in quotations: name, hex, rgb, rgba, ...
// Use lineWidth to set line thickness
ctx.fillStyle = "rgb(180, 0, 200)";
ctx.fillRect(30, 200, 150, 100);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(220, 200, 150, 100);

// 2. TEXT
// Draw text on graphics context
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "blue";
ctx.fillText("Hello Canvas!", 500, 50); // Solid Text

ctx.font = "35px Arial";
ctx.lineWidth = 2;
ctx.strokeStyle = "orange";
ctx.strokeText("Hello Canvas!", 500, 150); // Outlined Text

// 3. LINES
ctx.lineWidth = 4;
ctx.strokeStyle = "purple";
ctx.beginPath();
ctx.moveTo(500, 250);
ctx.lineTo(700, 200);
ctx.stroke();

ctx.lineWidth = 1;
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(650, 300);
ctx.lineTo(550, 350);
ctx.stroke();

// 4. POLYGONS
// Triangle Outline
ctx.lineWidth = 2;
ctx.strokeStyle = "cyan";
ctx.beginPath();
ctx.moveTo(100, 400);
ctx.lineTo(150, 400);
ctx.lineTo(125, 350);
ctx.closePath(); // Go back to start of path
ctx.stroke(); // Draw outline

// Filled Triangle
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(50, 400);
ctx.lineTo(100, 400);
ctx.lineTo(75, 350);
ctx.fill(); // Fill Triangle

// Quadrilateral Outline
ctx.lineWidth = 3;
ctx.strokeStyle="blue";
ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(250, 400);
ctx.lineTo(275, 350);
ctx.lineTo(225, 350);
ctx.closePath();
ctx.stroke(); // Draw outline

// Filled Quadrilateral
ctx.fillStyle = "magenta";
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(350, 400);
ctx.lineTo(375, 350);
ctx.lineTo(325, 350);
ctx.fill(); // Fill in path

// 5. CIRCLES (note on layering)
ctx.lineWidth = 5;
ctx.strokeStyle = "#0000FF";
ctx.beginPath();
ctx.arc(100, 500, 50, 0, 2 * Math.PI); // Center (100, 500) & diameter of 50
ctx.stroke();

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(275, 500, 30, 0, 2 * Math.PI); // Center (275, 500) & diameter 30
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(275, 500, 10, 0, 2 * Math.PI); // Center (275, 500) & diameter 10
ctx.fill();

// 6. IMAGES
let htmlImg = document.getElementById("html-img");
ctx.drawImage(htmlImg, 500, 500); // Draw image with top left corner at (500, 500)
ctx.drawImage(htmlImg, 760, 560, 40, 40); // Scale image to 20 x 20



