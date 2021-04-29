import {createContext, initializeCanvas} from "./creator.js";
import {move} from "./physics/move.js";
import {FlyBuilder} from "./flyBuilder.js";
import appConfig from "./app-config.js";

const context2D = createContext();

const redFlies = createFlies(
    10000,
    FlyBuilder()
        .velocityFn(() => ({x: 6, y: 6}))
        .color('red')
        .coordinatesFn((r) => ({ x: appConfig.canvas.width - r, y: appConfig.canvas.height - r }))
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

function runApplication() {

    initializeCanvas();

    move([
            ...redFlies,
            ...blueFlies,
        ], context2D
    );
}

runApplication();
