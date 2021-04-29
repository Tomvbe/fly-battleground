import {clearCanvas, drawFly} from "../context.js";
import {bounceFromBorders} from "./bounceFromBorders.js";
import {determineRandomNeighbour, DirectionsObjectMap} from "./directionsObjectMap.js";

export function move(flies, context) {
    clearCanvas(context)
    flies.forEach(fly => moveFly(fly, context))
    requestAnimationFrame(() => move(flies, context));
}

function moveFly(fly, context) {
    drawFly(fly, context);

    //todo  refactor to combine bounce and movefly
    bounceFromBorders(fly);
    moveFlyToNextFrame(fly);
}

function moveFlyToNextFrame(fly) {

    const currentDirectionObject = DirectionsObjectMap.get(fly.momentum);

    if (fly.isAgainstWall) {
        // velocity already reversed (e.g. 180deg rotation)
        fly.isAgainstWall = false;
        currentDirectionObject.action(fly);
    } else {
        const newDirectionObject = findNewDirection(determineRotation(), currentDirectionObject);
        fly.momentum = newDirectionObject.direction;
        newDirectionObject.action(fly);
    }
}

function determineRotation() {
    const randomNumber = Math.random();

    if (randomNumber <= 0.8) {
        return 0
    } else if (randomNumber <= 0.9) {
        return 1
    } else if (randomNumber <= 0.95) {
        return 2
    } else if (randomNumber <= 0.99) {
        return 3
    } else {
        return 4
    }
}

function findNewDirection(rotation, currentDirectionObject) {
    if (rotation === 0) {
        return currentDirectionObject;
    }

    const randomNeighbour = determineRandomNeighbour(currentDirectionObject);
    return findNewDirection(--rotation, DirectionsObjectMap.get(randomNeighbour));
}
