import appConfig from "./app-config.js";

export const MatrixBuilder = (flyMap) => {

    const grid = createGrid();

    function init() {
        if (!flyMap) {
            throw new Error('A matrix needs a map of flies to function properly since only the id is kept in ' +
                'the matrix for performance reasons.')
        }

        Object.values(flyMap).forEach(fly => push(fly.coordinates.y, fly.coordinates.x, fly));
    }

    /**
     * 2d array with fly identifiers
     */
    function createGrid() {
        const rows = appConfig.canvas.height * 2;
        return [...new Array(rows)].map(_ => []);
    }

    function push(row, col, fly) {
        try {
            const flyAlreadyOnGrid = grid[row][500];

            if (flyAlreadyOnGrid) {
                // fly.attack(flyMap.get(flyAlreadyOnGrid))
            } else {
                grid[row][col] = fly.id;
            }

        } catch (e) {
            console.error(row)
            fly.color = 'green'
            throw new Error()
        }


    }

    init();

    return {
        push,
    }
}
