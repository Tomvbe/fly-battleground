import {clearCanvas, drawFly} from "../context.js";
import {determineRandomNeighbour, DirectionsObjectMap} from "./directionsObjectMap.js";
import {MatrixBuilder} from "../matrixBuilder.js";

export function move(matrix, flies, context) {
    clearCanvas(context)
    Object.values(flies).forEach(fly => {
        drawFly(fly, context);
        moveFlyToNextFrame(fly);
        matrix.push(fly)
    })
    requestAnimationFrame(() => move(MatrixBuilder(flies), flies, context));
}

function moveFly(fly, context) {
    drawFly(fly, context);
    moveFlyToNextFrame(fly);
}

function moveFlyToNextFrame(fly) {
    const newDirectionObject = findNewDirection(determineRotation(), DirectionsObjectMap.get(fly.momentum));
    fly.momentum = newDirectionObject.direction;
    newDirectionObject.action(fly);
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
