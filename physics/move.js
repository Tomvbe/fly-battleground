import {drawFly, removeFlyFromContext} from "../context.js";
import {bounceFromBorders} from "./bounceFromBorders.js";

export function move(fly, context) {
    requestAnimationFrame(() => move(fly, context));
    removeFlyFromContext(context)
    drawFly(fly, context);
    bounceFromBorders(fly);
    moveFlyToNextFrame(fly);
}

function moveFlyToNextFrame(fly) {
    fly.coordinates.x = fly.coordinates.x + fly.velocity.x;
    fly.coordinates.y = fly.coordinates.y + fly.velocity.y;
}
