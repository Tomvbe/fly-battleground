import {createContext, createFly} from "./creator.js";
import {move} from "./physics/move.js";

move(createFly(), createContext());
