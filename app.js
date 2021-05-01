import {createContext, createFlies, initializeCanvas} from "./creator.js";
import {move} from "./physics/move.js";
import {MatrixBuilder} from "./matrixBuilder.js";

function runApplication() {
    initializeCanvas();

    const flies = createFlies();

    move(
        MatrixBuilder(flies),
        flies,
        createContext()
    );
}

runApplication();
