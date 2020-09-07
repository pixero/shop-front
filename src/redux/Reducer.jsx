import {combineReducers} from "redux";
import {AdminReducer} from "./adminPage/Reducer";
import {ProductReducer} from "./ProductInfo/Reducer";
import {connectRouter} from "connected-react-router";

export default history => combineReducers({
    Admin:AdminReducer,
    Product:ProductReducer,
    router: connectRouter(history)
})