import Axios from "axios";
import React from "react";

export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const GET_PRODUCT_NUMBER = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_NUMBER_FAIL = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_NUMBER_SACCESS = "GET_PRODUCT_NUMBER_SACCESS";
export const GET_PRODUCT = "GET_PRODUCT";

let initialState = {
    numberProduct:'',
    nameProduct: '',
    descriptionProduct:'',
    priceProduct:'',
    photo:'',
    response:''
}
const getProduct = async (state) =>{
    let states = JSON.parse(localStorage.getItem('numberProduct'))
    Axios.get('product/getInfoProduct/'+ states.numberProduct,{headers:{
            'Content-Type':'application/json'
        }})
        .then(response =>{
            state.nameProduct = response.data.productName
            state.priceProduct = response.data.price
            state.descriptionProduct = response.data.description
            console.log(response.data)
        })
    console.log(state)
    return state
}
export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_NUMBER:
            state.numberProduct = action.payload
            localStorage.setItem('numberProduct',JSON.stringify(state))
            return {...state}
        case GET_PRODUCT_NUMBER:
            return {...state, response: action.payload}
        case GET_PRODUCT:

            return {...state,numberProduct: getProduct(state)}
        default:
            return state
    }
}