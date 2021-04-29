import {randomInt} from "./util/integer.js";
import {DirectionsEnum} from "./physics/directionsEnum.js";
import appConfig from "./app-config.js";

let flySequence = 0;

export const FlyBuilder = () => {

    let coordinatesFn = randomCoordinates;
    let velocityFn = randomVelocity;
    let radius = 3;
    let color = "rgb(7,66,66)";
    let momentum = DirectionsEnum.EAST;

    function setCoordinatesFn(input) {
        coordinatesFn = input;
        return this;
    }

    function setVelocityFn(input) {
        velocityFn = input;
        return this;
    }

    function setRadius(input) {
        radius = input;
        return this;
    }

    function setColor(input) {
        color = input;
        return this;
    }

    function setMomentum(input) {
        momentum = input;
        return this;
    }

    function build() {
        return {
            id: ++flySequence,
            coordinates: coordinatesFn(radius),
            velocity: velocityFn(),
            radius: radius,
            color: color,
            momentum: momentum
        }
    }

    return {
        coordinatesFn: setCoordinatesFn,
        velocityFn: setVelocityFn,
        radius: setRadius,
        color: setColor,
        momentum: setMomentum,
        build: build
    }
};

function randomCoordinates(radius) {
    function calculateStartPosition(limit) {
        const random = randomInt(limit);
        const max = limit - radius;

        if (random > radius) {
            return Math.min(random, max);
        } else {
            return Math.max(random, radius)
        }
    }

    return {
        x: calculateStartPosition(appConfig.canvas.width, radius),
        y: calculateStartPosition(appConfig.canvas.height, radius)
    }
}

function randomVelocity() {
    return {
        x: randomInt(-5),
        y: randomInt(-5),
    }
}


