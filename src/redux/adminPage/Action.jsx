import {
    ADD_NEW_PRODUCT,
    UPDATE_PRODUCT_DESCRIPTION, UPDATE_PRODUCT_FILE,
    UPDATE_PRODUCT_NAME,
    UPDATE_PRODUCT_NUMBER,
    UPDATE_PRODUCT_PRICE
} from "./Reducer";


export function UpdateProductNumber(number){
    return{
        type: UPDATE_PRODUCT_NUMBER,
        payload:number
    }
}
export function UpdateProductName(name){
    return{
        type: UPDATE_PRODUCT_NAME,
        payload:name
    }
}
export function UpdateProductDescription(description){
    return{
        type: UPDATE_PRODUCT_DESCRIPTION,
        payload:description
    }
}
export function UpdateProductPrice(price){
    return{
        type: UPDATE_PRODUCT_PRICE,
        payload:price
    }
}
export function UpdateProductFile (file) {
    return{
        type: UPDATE_PRODUCT_FILE,
        payload:file
    }
}
export function AddNewProduct(){
    return{
        type: ADD_NEW_PRODUCT
    }
}

