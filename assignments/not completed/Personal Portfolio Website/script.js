function drawHexagon(ctx, x, y, r) {
    const angle = (2 * Math.PI) / 6;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(angle * i), y + r * Math.sin(angle * i));
    }
    ctx.closePath();
    ctx.stroke();
}

let canvas = document.getElementById("hexagon");
let hexagonImage = document.getElementById("hexagonSVG")

