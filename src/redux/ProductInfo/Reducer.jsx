import Axios from "axios";
import React from "react";
import * as R from 'ramda';

//------------------------Action-type--------------------------------

export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const GET_PRODUCT_NUMBER = "GET_PRODUCT_NUMBER";
export const GET_PRODUCT = "GET_PRODUCT";

//--------------------------API--------------------------------------

export const getProduct = async () =>{

    return  (Axios.get('product/getInfoProduct/'+ localStorage.getItem('numberProduct'),{headers:{
            'Content-Type':'application/json'
        }})
        .then(response =>{
            return response.data
        }))
}



let initialState = {
    productName:'',
    description:'',
    price:'',
    response:''
}
export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_NUMBER:
            state.numberProduct = action.payload
            localStorage.setItem('numberProduct',state.numberProduct)
            return {...state}
        case GET_PRODUCT_NUMBER:
            return {...state, response: action.payload}
        case GET_PRODUCT:
            return {...R.merge(state,action.payload)}
        default:
            return state
    }
}