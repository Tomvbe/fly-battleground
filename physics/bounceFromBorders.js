import appConfig from "../app-config.js";

export function bounceFromBorders(fly) {
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

function hasContactWithRightWall(fly) {
    return fly.radius + fly.coordinates.x > appConfig.canvas.width;
}
function hasContactWithLeftWall(fly) {
    return fly.coordinates.x - fly.radius < 0;
}
function invertDirectionX(fly) {
    fly.velocity.x *= -1;
    fly.isAgainstWall = true;
}

function hasContactWithCeiling(fly) {
    return fly.coordinates.y + fly.radius > appConfig.canvas.height;
}
function hasContactWithFloor(fly) {
    return fly.coordinates.y - fly.radius < 0;
}
function invertDirectionY(fly) {
    fly.velocity.y *= -1;
    fly.isAgainstWall = true;
}
