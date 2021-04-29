import {createContext, createEmptyMatrix, createFlies, initializeCanvas} from "./creator.js";
import {move} from "./physics/move.js";
import {MatrixBuilder} from "./matrixBuilder.js";

function runApplication() {
    initializeCanvas();

    // const matrix = MatrixBuilder([]);
    // matrix.push(22, 44, 'hallo')
    // console.log(matrix.get(22, 44))

    move(
        MatrixBuilder(createFlies()),
        createFlies(),
        createContext()
    );
}

runApplication();
