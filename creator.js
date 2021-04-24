import {randomInt} from "./util/integer.js";

export function createFly(color, radius) {
    return {
        coordinates: {
            x: calculateStartPosition(innerWidth, radius),
            y: calculateStartPosition(innerHeight, radius),
        },
        velocity: {
            x: randomInt(-2),
            y: randomInt(-4),
        },
        radius,
        color
    }
}

export function createContext() {
    return createCanvas().getContext('2d');
}

function calculateStartPosition(limit, min) {
    const random = randomInt(limit);
    const max = limit - min;

    if (random > min) {
        return Math.min(random, max);
    } else {
        return Math.max(random, min)
    }
}

function createCanvas() {
    const canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    return canvas;
}
