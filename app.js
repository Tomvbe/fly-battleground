import {createContext, createFlies, initializeCanvas} from "./creator.js";
import {move} from "./physics/move.js";

function runApplication() {
    initializeCanvas();

    move(
        createFlies(),
        createContext()
    );
}

runApplication();
