export function createContext() {
    function createCanvas() {
        const canvas = document.querySelector("canvas");
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        return canvas;
    }

    return createCanvas().getContext('2d');
}
