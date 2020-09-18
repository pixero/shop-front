import * as R from 'ramda';

//------------------------Action-type--------------------------------

export const UPDATE_PRODUCT_NUMBER = "UPDATE_PRODUCT_NUMBER";
export const GET_PRODUCT_NUMBER = "GET_PRODUCT_NUMBER";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PICTURE = "GET_PICTURE"
export const GET_PICTURE_SUCCESS = "GET_PICTURE_SUCCESS"


let initialState = {
    productName:'',
    description:'',
    price:'',
    response:'',
    arrayPicture:[],
    isLoading:true
}

//----------------------Reducer--------------------------------------

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
            return {...state,arrayPicture:[...state.arrayPicture, {src :action.payload}]}
            // return {...state,arrayPicture:action.payload}
         case GET_PICTURE_SUCCESS:
            return {...state,isLoading: true}
        default:
            return state
    }
}