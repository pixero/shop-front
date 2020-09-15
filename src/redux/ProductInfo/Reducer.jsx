import Axios from "axios";
import * as R from 'ramda';
import {add} from "ramda";

//------------------------Action-type--------------------------------

export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const GET_PRODUCT_NUMBER = "GET_PRODUCT_NUMBER";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PICTURE = "GET_PICTURE"

//--------------------------API--------------------------------------

export const getProduct = async () =>{

    return  (Axios.get('product/getInfoProduct/'+ localStorage.getItem('numberProduct'),{headers:{
            'Content-Type':'application/json'
        }})
        .then(response =>{
            return response.data
        }))
}
export const getPicture = async(pictures)=>{
    // const pictures = JSON.parse(localStorage.getItem('picture'))
    return ((Axios.get('product/getPictureProduct/'+pictures.pictureName,{responseType: 'arraybuffer'} ))
        .then(response => {
            let image = btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        }))
}



let initialState = {
    productName:'',
    description:'',
    price:'',
    response:'',
    arrayPicture:[]
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
        case GET_PICTURE:
            // return {...state,arrayPicture:[...state.arrayPicture, {src :action.payload}]}
            return {...state,arrayPicture:action.payload}
        default:
            return state
    }
}