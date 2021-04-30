import {randomInt} from "../util/integer.js";

export function collide(flyA, flyB) {
    if (flyA.team >= 0 && flyA.team !== flyB.team) {
        if (randomInt(2) === 0) {
            flyA.color = 'red';
            flyB.radius++
        } else {
            flyB.color = 'red';
            flyA.radius++
        }
    }
}
