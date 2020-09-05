import Axios from "axios";
import React from "react";

export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const UPDATE_PRODUCT_NAME = "UPDATE_PRODUCT_NAME";
export const UPDATE_PRODUCT_DESCRIPTION = "UPDATE_PRODUCT_DESCRIPTION";
export const UPDATE_PRODUCT_PRICE = "UPDATE_PRODUCT_PRICE";
export const UPDATE_PRODUCT_FILE = "UPDATE_PRODUCT_FILE";



const initialState = {
    numberProduct:'',
    nameProduct: '',
    descriptionProduct:'',
    priceProduct:'',
    file:'',
    response:''

}

export const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_PRODUCT:
            let data = new FormData()
            data.append('numberProduct',state.numberProduct)
            data.append('productName',state.nameProduct)
            data.append('description',state.descriptionProduct)
            data.append('price',state.priceProduct)
            data.append('file',state.file)
            Axios.post("/product/newProduct",data)
                .then(response =>{
                     state.response = response.data.success

                }).catch(error=>{})
            return {...state}
        case UPDATE_PRODUCT_NUMBER:
            state.numberProduct = action.payload
            return {...state}
        case UPDATE_PRODUCT_NAME:
            state.nameProduct = action.payload
            return {...state}
        case UPDATE_PRODUCT_DESCRIPTION:
            state.descriptionProduct = action.payload
            return {...state}
        case UPDATE_PRODUCT_PRICE:
            state.priceProduct = action.payload
            return {...state}
        case UPDATE_PRODUCT_FILE:
            state.file = action.payload
            return {...state}
        default:
            return state
    }
}