let canvas = document.querySelector('#my-canvas');
let ctx = canvas.getContext('2d');

strokeArc(10, '#000', 500, 250, 200, 0, 2 * Math.PI);

fillArc('#000', 400, 200, 50, 0, 2 * Math.PI);
fillArc('#fff', 400, 200, 30, 0, 2 * Math.PI);
fillArc('#000', 402, 200, 20, 0, 2 * Math.PI);

fillArc('#000', 600, 200, 50, 0, 2 * Math.PI);
fillArc('#fff', 600, 200, 30, 0, 2 * Math.PI);
fillArc('#000', 598, 200, 20, 0, 2 * Math.PI);

fillArc('#000', 500, 250, 30, 0, 2 * Math.PI);

strokeArc(10, '#000', 500, 280, 100, 0.3, Math.PI - 0.3);

fillArc('#000', 360, 110, 50, Math.PI - 0.8, -0.8);
fillArc('#000', 640, 110, 50, 1.5 * Math.PI - 0.8, 0.8);

function fillArc(color, x, y, r, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
}
function strokeArc(lineWidth, color, x, y, r, startAngle, endAngle) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.stroke();
}