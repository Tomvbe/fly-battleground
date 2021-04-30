import {createContext, createFlies, initializeCanvas} from "./creator.js";
import {move} from "./physics/move.js";
import {MatrixBuilder} from "./matrixBuilder.js";

function runApplication() {
    initializeCanvas();

    move(
        MatrixBuilder(createFlies()),
        createFlies(),
        createContext()
    );
}

runApplication();
