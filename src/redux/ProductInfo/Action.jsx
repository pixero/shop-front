import {
    GET_PRODUCT,
    GET_PRODUCT_NUMBER,
    getProduct,
    UPDATE_PRODUCT_NUMBER
} from "./Reducer";
import Alert from "react-bootstrap/Alert";
import {NavLink} from "react-router-dom";
import React from "react";
import Axios from "axios";

export function UpdateNumberProduct(number){
    return{
        type: UPDATE_PRODUCT_NUMBER,
        payload:number
    }
}

export const GetProductNumber = () => async dispatch =>{
   dispatch({
       type: GET_PRODUCT_NUMBER
   })
    try {
        let productNumber = localStorage.getItem('numberProduct')
        Axios.get('product/getNumberProduct/'+ productNumber)
            .then(reponse =>{
            if(reponse.data.success){
                dispatch({
                    type:GET_PRODUCT_NUMBER,
                    payload:(
                        <Alert variant="success">
                            Товар найден{' '}
                            <NavLink  to={"/product/"+productNumber} > перейти</NavLink>
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
        getProduct().then( reponse =>
          dispatch({
              type:GET_PRODUCT,
              payload:reponse
          })
      )
    }catch (error){
      console.error(error)
    }
}

