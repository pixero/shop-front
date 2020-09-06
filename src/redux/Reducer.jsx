import {combineReducers} from "redux";
import {AdminReducer} from "./adminPage/Reducer";
import {ProductReducer} from "./ProductInfo/Reducer";

export const reducer = combineReducers({
    Admin:AdminReducer,
    Product:ProductReducer
})