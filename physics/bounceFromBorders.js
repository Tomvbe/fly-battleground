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
