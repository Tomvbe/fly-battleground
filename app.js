const createCanvas = () => {
    const canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    return canvas;
}
const canvas = createCanvas();

const ctx = canvas.getContext('2d');

const fly = {
    coordinates: {
        x: Math.floor(Math.random() * innerWidth),
        y: Math.floor(Math.random() * innerHeight),
    },
    velocity: {
        x: Math.floor(Math.random() * -20),
        y: Math.floor(Math.random() * 40),
    },
    radius: 30,
}

const removeBallFromContext = () => ctx.clearRect(0, 0, innerWidth, innerHeight);
const drawBall = () => {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.arc(fly.coordinates.x, fly.coordinates.y, fly.radius, 0, Math.PI * 2, false);
    ctx.fill();
}

var color = "red"
const hasContactWithRightWall = (fly) => fly.radius + fly.coordinates.x > innerWidth;
const hasContactWithLeftWall = (fly) => fly.coordinates.x - fly.radius < 0;
const invertDirectionX = (fly) => fly.velocity.x = 0 - fly.velocity.x;

function move(fly) {

    requestAnimationFrame(() => move(fly));
    removeBallFromContext()
    drawBall();

    if (hasContactWithRightWall(fly)) {
        invertDirectionX(fly);
    }

    if (hasContactWithLeftWall(fly)) {
        invertDirectionX(fly);
    }

    if (fly.coordinates.y + fly.radius > innerHeight) {
        fly.velocity.y = 0 - fly.velocity.y;
    }

    if (fly.coordinates.y - fly.radius < 0) {
        fly.velocity.y = 0 - fly.velocity.y;
    }

    fly.coordinates.x = fly.coordinates.x + fly.velocity.x;
    fly.coordinates.y = fly.coordinates.y + fly.velocity.y;

}

move(fly);
