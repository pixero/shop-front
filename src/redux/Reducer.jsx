import {combineReducers} from "redux";
import {AdminReducer} from "./adminPage/Reducer";

export const reducer = combineReducers({
    Admin:AdminReducer
})