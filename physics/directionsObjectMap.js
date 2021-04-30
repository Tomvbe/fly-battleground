import {DirectionsEnum} from "./directionsEnum.js";
import {randomInt} from "../util/integer.js";
import appConfig from "../app-config.js";

export const DirectionsObjectMap = new Map([
    [
        DirectionsEnum.NORTH,
        {
            direction: DirectionsEnum.NORTH,
            neighbours: [DirectionsEnum.NORTH_WEST, DirectionsEnum.NORTH_EAST],
            action: moveNorth
        }
    ],
    [
        DirectionsEnum.NORTH_EAST,
        {
            direction: DirectionsEnum.NORTH_EAST,
            neighbours: [DirectionsEnum.NORTH, DirectionsEnum.EAST],
            action: moveNorthEast
        }
    ],
    [
        DirectionsEnum.EAST,
        {
            direction: DirectionsEnum.EAST,
            neighbours: [DirectionsEnum.NORTH_EAST, DirectionsEnum.SOUTH_EAST],
            action: moveEast
        }
    ],
    [
        DirectionsEnum.SOUTH_EAST,
        {
            direction: DirectionsEnum.SOUTH_EAST,
            neighbours: [DirectionsEnum.EAST, DirectionsEnum.SOUTH],
            action: moveSouthEast
        }
    ],
    [
        DirectionsEnum.SOUTH,
        {
            direction: DirectionsEnum.SOUTH,
            neighbours: [DirectionsEnum.SOUTH_EAST, DirectionsEnum.SOUTH_WEST],
            action: moveSouth
        }
    ],
    [
        DirectionsEnum.SOUTH_WEST,
        {
            direction: DirectionsEnum.SOUTH_WEST,
            neighbours: [DirectionsEnum.SOUTH, DirectionsEnum.WEST],
            action: moveSouthWest
        }
    ],
    [
        DirectionsEnum.WEST,
        {
            direction: DirectionsEnum.WEST,
            neighbours: [DirectionsEnum.NORTH_WEST, DirectionsEnum.SOUTH_WEST],
            action: moveWest
        }
    ],
    [
        DirectionsEnum.NORTH_WEST,
        {
            direction: DirectionsEnum.NORTH_WEST,
            neighbours: [DirectionsEnum.NORTH, DirectionsEnum.WEST],
            action: moveNorthWest
        }
    ]
]);

/**
 * A direction can only have two neighbours
 * @param directionObject from DirectionsMap
 * @returns DirectionsEnum of one of the neighbours of the provided direction
 */
export function determineRandomNeighbour(directionObject) {
    return directionObject.neighbours[randomInt(2)];
}

function moveNorth(fly) {
    fly.coordinates.y = Math.max(fly.coordinates.y - fly.velocity.y, 0);
}

function moveEast(fly) {
    fly.coordinates.x = Math.min(fly.coordinates.x + fly.velocity.x, appConfig.canvas.width);
}

function moveSouth(fly) {
    fly.coordinates.y = Math.min(fly.coordinates.y + fly.velocity.y, appConfig.canvas.height);
}

function moveWest(fly) {
    fly.coordinates.x = Math.max(fly.coordinates.x - fly.velocity.x, 0);
}

function moveNorthEast(fly) {
    moveNorth(fly);
    moveEast(fly);
}

function moveSouthEast(fly) {
    moveSouth(fly);
    moveEast(fly);
}

function moveSouthWest(fly) {
    moveSouth(fly);
    moveWest(fly);
}

function moveNorthWest(fly) {
    moveNorth(fly);
    moveWest(fly);
}
