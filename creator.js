// noinspection JSValidateTypes

import appConfig from "./app-config.js";
import {FlyBuilder} from "./flyBuilder.js";

export function createFlies() {
    const redFlies = buildFlies(
        100,
        FlyBuilder()
            .velocityFn(() => ({x: 6, y: 6}))
            .color('red')
            .coordinatesFn((r) => ({ x: appConfig.canvas.width - r, y: appConfig.canvas.height - r }))
    )

    const blueFlies = buildFlies(
        50,
        FlyBuilder()
            .radius(6)
            .color('blue')
            .coordinatesFn((r) => ({ x: r, y: r }))
    )

    function buildFlies(count, builder) {
        return [...new Array(count)]
            .map(_ => builder.build())
            .reduce((map, fly) => {
                map[fly.id] = fly;
                return map
            }, {});
    }

    return redFlies
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

export function createEmptyMatrix() {
    const rows = appConfig.canvas.height;
    return  [...new Array(rows)].map(_ => []);
}
