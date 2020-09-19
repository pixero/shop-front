import React from "react";
import Loader from "../../Loader"
import ProductSlider from "./productSlider";

export class ProductInfo extends  React.Component{

    render() {
        let newArrayPicture =  this.props.arrayPicture.map((el,key)=>(
           <div key={key}>
               <h3>
                   <img src={el.src} alt=""/>
                   {key}
               </h3>
           </div>
        ))
        console.log(newArrayPicture)
        if(this.props.state.isLoading){
        return(
            <div className="container">
                <h1 className="text-left">Описание товара</h1>
                <div className="row">
                    <div className="col-md-7" >
                        <div className="row">
                            <div className="col-md-12">
                                <ProductSlider pictureName={newArrayPicture}/>
                                {/*<img className="img-thumbnail img-fluid center-block" src={ this.props.arrayPicture }  alt=""/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h1>{this.props.state.productName}</h1>
                        <p> {this.props.state.description} </p>
                        <h2 className="text-center text-success">Цена:{this.props.state.price} <i className="fa fa-ruble"> </i> </h2>
                        <button className="btn btn-danger btn-lg center-block" type="button"> <i
                            className="fa fa-cart-plus"> </i> Купить
                        </button>
                    </div>
                </div>
            </div>
        )}
        else {
            return <Loader/>
        }
    }
}