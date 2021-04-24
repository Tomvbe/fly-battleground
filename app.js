import {createContext, createFly} from "./creator.js";
import {move} from "./physics/move.js";

const context2D = createContext();

const flies = [...new Array(50)].map(_ => createFly("green", 60))

move(flies, context2D);
