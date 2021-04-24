function createCanvas() {
    const canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    return canvas;
}

function removeFlyFromContext(ctx) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
}
function drawFly(fly, ctx) {
    ctx.beginPath();
    ctx.fillStyle = "red"
    ctx.arc(fly.coordinates.x, fly.coordinates.y, fly.radius, 0, Math.PI * 2, false);
    ctx.fill();
}

function hasContactWithRightWall(fly) {
    return fly.radius + fly.coordinates.x > innerWidth;
}
function hasContactWithLeftWall(fly) {
    return fly.coordinates.x - fly.radius < 0;
}
function invertDirectionX(fly) {
    fly.velocity.x = 0 - fly.velocity.x;
}

function hasContactWithCeiling(fly) {
    return fly.coordinates.y + fly.radius > innerHeight;
}
function hasContactWithFloor(fly) {
    return fly.coordinates.y - fly.radius < 0;
}
function invertDirectionY(fly) {
    fly.velocity.y = 0 - fly.velocity.y;
}

function moveFlyOneToNextFrame(fly) {
    fly.coordinates.x = fly.coordinates.x + fly.velocity.x;
    fly.coordinates.y = fly.coordinates.y + fly.velocity.y;
}

function bounceFromBorders(fly) {
    if (hasContactWithRightWall(fly)) {
        invertDirectionX(fly);
    }

    if (hasContactWithLeftWall(fly)) {
        invertDirectionX(fly);
    }

    if (hasContactWithCeiling(fly)) {
        invertDirectionY(fly);
    }

    if (hasContactWithFloor(fly)) {
        invertDirectionY(fly);
    }
}

function move(fly, context) {
    requestAnimationFrame(() => move(fly, context));
    removeFlyFromContext(context)
    drawFly(fly, context);
    bounceFromBorders(fly);
    moveFlyOneToNextFrame(fly);
}

move(
{
    coordinates: {
        x: Math.floor(Math.random() * innerWidth),
        y: Math.floor(Math.random() * innerHeight),
    },
    velocity: {
        x: Math.floor(Math.random() * -20),
        y: Math.floor(Math.random() * 40),
    },
    radius: 30,
    },
    createCanvas().getContext('2d')
);
