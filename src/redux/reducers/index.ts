import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import peopleReducer from "./peopleReducer";

export default combineReducers({
    peopleReducer,
    filmsReducer
})