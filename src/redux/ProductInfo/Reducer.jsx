import Axios from "axios";
import React from "react";

export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const GET_PRODUCT_NUMBER = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_NUMBER_FAIL = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_NUMBER_SACCESS = "GET_PRODUCT_NUMBER_SACCESS";
export const GET_PRODUCT = "GET_PRODUCT_START";

let initialState = {
    numberProduct:'',
    nameProduct: '',
    descriptionProduct:'',
    priceProduct:'',
    photo:'',
    response:''
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_NUMBER:
            state.numberProduct = action.payload
            localStorage.setItem('numberProduct',JSON.stringify(state))
            return {...state}
        case GET_PRODUCT_NUMBER:
                // .then(response => {
                //     // if(response.data.success){
                //     //         initialState.response=(
                //     //         <Alert variant="success">
                //     //         Товар найден{' '}
                //     //           <NavLink  to={"/product/"+state.numberProduct} > перейти</NavLink>
                //     //         </Alert>)
                //     // }
                //     // else{
                //     //     initialState.response = (
                //     //         <Alert variant="danger">
                //     //             Товар не найден{' '}
                //     //         </Alert>
                //     //     )
                //     // }
                // })
            return {...state, response: action.payload}
        case GET_PRODUCT_NUMBER_SACCESS:
            return {...state,response: action.payload}
        case GET_PRODUCT:
            Axios.get('product/getInfoProduct/'+ state.numberProduct,{headers:{
                'Content-Type':'application/json'
                }})
                .then(response =>{
                    state.nameProduct = response.data.productName
                    state.priceProduct = response.data.price
                    state.descriptionProduct = response.data.description
                    console.log(response.data)
                })
            return {...state}
        default:
            return state
    }
}