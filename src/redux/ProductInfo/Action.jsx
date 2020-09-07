import {
    GET_PRODUCT,
    GET_PRODUCT_NUMBER,
    GET_PRODUCT_NUMBER_FAIL,
    GET_PRODUCT_NUMBER_SACCESS,
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
       let state = JSON.parse(localStorage.getItem('numberProduct'))
        Axios.get('product/getNumberProduct/'+ state.numberProduct).then(reponse =>{
            if(reponse.data.success){
                dispatch({
                    type:GET_PRODUCT_NUMBER,
                    payload:(
                        <Alert variant="success">
                            Товар найден{' '}
                            <NavLink  to={"/product/"+state.numberProduct} > перейти</NavLink>
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
    // try {
    //     let state = JSON.parse(localStorage.getItem('numberProduct'));
    //     Axios.get('product/getNumberProduct/'+ state.numberProduct).then(reponse =>{
    //         if(reponse.data.success){
    //             dispatch({
    //                 type:GET_PRODUCT_NUMBER,
    //                 payload:(
    //                     <Alert variant="success">
    //                         Товар найден{' '}
    //                         <a  href={"/product/"+state.numberProduct} > перейти</a>
    //                     </Alert>
    //                 )
    //             })
    //         }
    //         else {
    //             dispatch({
    //                 type:GET_PRODUCT_NUMBER,
    //                 payload:(
    //                     <Alert variant="danger">
    //                         Товар не найден{' '}
    //                     </Alert>)
    //             })
    //         }
    //     })
    // }
}

