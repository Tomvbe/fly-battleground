import {createContext, createFly} from "./creator.js";
import {move} from "./physics/move.js";

const context2D = createContext();

const fly = createFly("red");
const fly2 = createFly("blue");

move([fly, fly2], context2D);
