import {GET_PRODUCT, GET_PRODUCT_NUMBER, UPDATE_PRODUCT_NUMBER} from "./Reducer";

export function UpdateNumberProduct(number){
    return{
        type: UPDATE_PRODUCT_NUMBER,
        payload:number
    }
}
export function GetProductNumber(){
    return{
        type: GET_PRODUCT_NUMBER
    }
}

export function GetProduct(){
    return{
        type: GET_PRODUCT
    }
}

