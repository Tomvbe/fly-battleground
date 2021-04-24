import {drawFly, clearCanvas} from "../context.js";
import {bounceFromBorders} from "./bounceFromBorders.js";

export function move(flies, context) {
    requestAnimationFrame(() => move(flies, context));
    clearCanvas(context)
    flies.forEach(fly => moveFly(fly, context))
}

function moveFly(fly, context) {
    drawFly(fly, context);
    bounceFromBorders(fly);
    moveFlyToNextFrame(fly);
}

function moveFlyToNextFrame(fly) {
    fly.coordinates.x = fly.coordinates.x + fly.velocity.x;
    fly.coordinates.y = fly.coordinates.y + fly.velocity.y;
}
