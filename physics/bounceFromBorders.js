import appConfig from "../app-config.js";

export function bounceFromBorders(fly) {
    if (hasContactWithVerticalBorder(fly)) {
        invertVelocityX(fly);
    }

    if (hasContactWithHorizontalBorder(fly)) {
        invertVelocityY(fly);
    }
}

function hasContactWithVerticalBorder(fly) {
    return hasContactWithLeftWall(fly) || hasContactWithRightWall(fly);
}

function hasContactWithHorizontalBorder(fly) {
    return hasContactWithCeiling(fly) || hasContactWithFloor(fly);
}

function hasContactWithRightWall(fly) {
    return fly.radius + fly.coordinates.x > appConfig.canvas.width;
}
function hasContactWithLeftWall(fly) {
    return fly.coordinates.x - fly.radius < 0;
}
function invertVelocityX(fly) {
    fly.velocity.x *= -1;
    fly.isAgainstWall = true;
}

function hasContactWithCeiling(fly) {
    return fly.coordinates.y + fly.radius > appConfig.canvas.height;
}
function hasContactWithFloor(fly) {
    return fly.coordinates.y - fly.radius < 0;
}
function invertVelocityY(fly) {
    fly.velocity.y *= -1;
    fly.isAgainstWall = true;
}
