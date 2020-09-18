import {
    GET_PICTURE, GET_PICTURE_SUCCESS,
    GET_PRODUCT,
    GET_PRODUCT_NUMBER,
    UPDATE_PRODUCT_NUMBER
} from "./Reducer";
import Alert from "react-bootstrap/Alert";
import React from "react";
import {getPicture, getProduct, getProductNumber} from "./Api";
import Axios from "axios";

export function UpdateNumberProduct(number){
    return{
        type: UPDATE_PRODUCT_NUMBER,
        payload:number
    }
}

export const GetProductNumber = () => async dispatch =>{
    try {
        let productNumber = localStorage.getItem('numberProduct')
            getProductNumber(productNumber)
            .then(response =>{
            if(response.success){
                dispatch({
                    type:GET_PRODUCT_NUMBER,
                    payload:(
                        <Alert variant="success">
                            Товар найден{' '}
                            <a  href={"/product/"+productNumber}
                            > перейти</a>
                        </Alert>
                    )
                })
            }
            else {
                dispatch({
                    type:GET_PRODUCT_NUMBER,
                    payload:(
                        <Alert variant="danger">
                            Товар не найден{' '}
                        </Alert>)
                })
            }
        })
    }
    catch(error) {
    }

}

export const GetProduct =() => async dispatch  =>{
  dispatch({
      type:GET_PRODUCT
  })
    try{
        getProduct().then( reponse => {
            localStorage.setItem('picture', JSON.stringify(reponse.pictures))
            dispatch({
                type: GET_PRODUCT,
                payload: reponse
            })
        }
      )
    }catch (error){
      console.error(error)
    }
}
export const GetPicture = () => async dispatch =>{

    try{
        const pictures = JSON.parse(localStorage.getItem('picture'))
            for (let i = 0; i < pictures.length; i++) {
                getPicture(pictures[i]).then(response => {
                        dispatch({
                            type: GET_PICTURE,
                            isLoading: false,
                            payload: response
                        })
                    }
                )
            }
    }catch (error){
        console.error(error)
    }

}

