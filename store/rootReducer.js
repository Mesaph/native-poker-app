import {combineReducers, createStore} from "redux";
import planningPokerDuck from "./ducks/planningPokerDuck";

export default combineReducers({
    planningPoker: planningPokerDuck,
});