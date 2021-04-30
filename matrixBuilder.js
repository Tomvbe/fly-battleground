import appConfig from "./app-config.js";
import {collide} from "./physics/collision.js";

export const MatrixBuilder = (flyMap) => {

    const grid = createGrid();

    function init() {
        if (!flyMap) {
            throw new Error('A matrix needs a map of flies to function properly since only the id is kept in ' +
                'the matrix for performance reasons.')
        }

        putFliesOnMatrix();
    }

    function putFliesOnMatrix() {
        Object.values(flyMap).forEach(fly => push(fly.coordinates.y, fly.coordinates.x, fly));
    }

    /**
     * 2d array with fly identifiers
     */
    function createGrid() {
        const rows = appConfig.canvas.height * 2;
        return [...new Array(rows)].map(_ => []);
    }

    function push(row, col, attackingFly) {
        const flyAlreadyOnGrid = grid[row][col];

        if (flyAlreadyOnGrid) {
            collide(attackingFly, flyMap[flyAlreadyOnGrid]);
        } else {
            grid[row][col] = attackingFly.id;
        }
    }

    init();

    return {
        push,
    }
}
