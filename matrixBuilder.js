import appConfig from "./app-config.js";
import {collide} from "./physics/collision.js";

export const MatrixBuilder = (flyMap) => {

    const grid = createGrid();

    function init() {
        if (!flyMap) {
            throw new Error('A matrix needs a map of flies to function properly since only the id is kept in ' +
                'the matrix for performance reasons.')
        }
    }

    /**
     * 2d array with fly identifiers
     */
    function createGrid() {
        const rows = appConfig.canvas.height * 2;
        return [...new Array(rows)].map(_ => []);
    }

    // TODO make this logic pretty
    function push(attackingFly) {

        const row = attackingFly.coordinates.y;
        const col = attackingFly.coordinates.x;

        let row0 = Math.max(row - (attackingFly.radius - 1), 0);
        const row1 = Math.min(row + attackingFly.radius, appConfig.canvas.height);

        const clashMap = new Map();

        // Scanning every row and col destroys performance
        const loopIncrement = Math.floor(attackingFly.radius * 2 / 5)

        for (row0; row1 >= row0; row0 += loopIncrement) {

            let col0 = col - (attackingFly.radius - 1);
            const col1 = col + attackingFly.radius;
            for (col0; col1 >= col0; col0+= loopIncrement) {
                const fliesOnGrid = grid[row0][col0];

                if (fliesOnGrid) {
                    // todo create own team scan delay of a couple of seconds to avoid this and line 65 creating slow motion start if teams start in corner
                    fliesOnGrid.forEach(fly => {
                        let count = clashMap.get(fly);
                        if (count) {
                            clashMap.set(fly, ++count);
                        } else {
                            clashMap.set(fly, 1);
                        }
                    })
                    fliesOnGrid.add(attackingFly.id);
                } else {
                    const flySet = new Set();
                    flySet.add(attackingFly.id);
                    grid[row0][col0] = flySet;
                }
            }
        }

        let maxCount = 0;
        let flyIdWithMaxCount;
        for (const [flyId, count] of clashMap) {
            if (count > maxCount) {
                maxCount = count;
                flyIdWithMaxCount = flyId;
            }
        }

        if (flyIdWithMaxCount) {
            collide(attackingFly, flyMap[flyIdWithMaxCount]);
        }
    }

    init();

    return {
        push,
    }
}
