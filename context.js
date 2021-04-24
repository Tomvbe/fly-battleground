export function clearCanvas(ctx) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}

export function drawFly(fly, ctx) {
    ctx.beginPath();
    ctx.fillStyle = fly.color
    ctx.arc(fly.coordinates.x, fly.coordinates.y, fly.radius, 0, Math.PI * 2, false);
    ctx.fill();
}
