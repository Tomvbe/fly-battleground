export function createFly(color) {
    return {
        coordinates: {
            x: Math.floor(Math.random() * innerWidth),
            y: Math.floor(Math.random() * innerHeight),
        },
        velocity: {
            x: Math.floor(Math.random() * -2),
            y: Math.floor(Math.random() * 4),
        },
        radius: 30,
        color
    }
}

export function createContext() {
    return createCanvas().getContext('2d');
}

function createCanvas() {
    const canvas = document.querySelector("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    return canvas;
}
