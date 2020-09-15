import {
    GET_PICTURE,
    GET_PRODUCT,
    GET_PRODUCT_NUMBER, getPicture,
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
                            <a  href={"/product/"+productNumber} > перейти</a>
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

        // for (let i =0;i<pictures.length;i++)
        // {
            getPicture(pictures[1]).then(response => {
                    dispatch({
                        type: GET_PICTURE,
                        payload: response
                    })
                }
            )
        // }
    }catch (error){
        console.error(error)
    }
}

