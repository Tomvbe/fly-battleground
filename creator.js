import appConfig from "./app-config.js";

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
