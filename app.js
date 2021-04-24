import {createContext, createFly} from "./creator.js";
import {move} from "./physics/move.js";

const context2D = createContext();

const flies = [...new Array(25000)].map(_ => createFly("rgb(7,66,66)", 3))

move(flies, context2D);
