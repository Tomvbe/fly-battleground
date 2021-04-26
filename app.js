import {createContext} from "./creator.js";
import {move} from "./physics/move.js";
import {FlyBuilder} from "./flyBuilder.js";

const context2D = createContext();

const redFlies = createFlies(
    10000,
    FlyBuilder()
        .velocityFn(() => ({x: 6, y: 6}))
        .color('red')
        .coordinatesFn((r) => ({ x: innerWidth - r, y: innerHeight - r }))
)

const blueFlies = createFlies(
    5000,
    FlyBuilder()
        .radius(6)
        .color('blue')
        .coordinatesFn((r) => ({ x: r, y: r }))
)

function createFlies(count, builder) {
    return [...new Array(count)].map(_ => builder.build())
}

move([
        ...redFlies,
        ...blueFlies,
    ], context2D
);
