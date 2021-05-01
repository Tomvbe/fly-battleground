// noinspection JSValidateTypes

import appConfig from "./app-config.js";
import {FlyBuilder} from "./flyBuilder.js";

export function createFlies() {
    const redFlies = buildFlies(
        1000,
        FlyBuilder()
            .velocityFn(() => ({x: 3, y: 3}))
            .color('green')
            .team(1)
            .radius(6)
            // .coordinatesFn((r) => ({ x: appConfig.canvas.width - r, y: appConfig.canvas.height - r }))
    )

    const blueFlies = buildFlies(
        1000,
        FlyBuilder()
            .radius(6)
            .team(2)
            .color('blue')
            // .coordinatesFn((r) => ({ x: 2, y: 2 }))
    )

    function buildFlies(count, builder) {
        return [...new Array(count)]
            .map(_ => builder.build())
            .reduce((map, fly) => {
                map[fly.id] = fly;
                return map
            }, {});
    }

    return {
        ...redFlies,
        ...blueFlies
    }
}

export function createContext() {
    function createCanvas() {
        const canvas = document.querySelector("canvas");
        canvas.width = appConfig.canvas.width;
        canvas.height = appConfig.canvas.height;
        return canvas;
    }

    return createCanvas().getContext('2d');
}

export function initializeCanvas() {
    const canvas = document.getElementById('battle-ground');
    canvas.style.height = appConfig.canvas.height;
    canvas.style.width = appConfig.canvas.width;
}
