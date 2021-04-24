export function createFly() {
    return {
        coordinates: {
            x: Math.floor(Math.random() * innerWidth),
            y: Math.floor(Math.random() * innerHeight),
        },
        velocity: {
            x: Math.floor(Math.random() * -20),
            y: Math.floor(Math.random() * 40),
        },
        radius: 30,
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
