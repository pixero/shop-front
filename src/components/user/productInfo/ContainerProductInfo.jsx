import React from "react";
import {connect} from "react-redux";
import {ProductInfo} from "./productInfo";
import {GetProduct, GetProductNumber,GetPicture} from "../../../redux/ProductInfo/Action";

 class ContainerProductInfo extends React.Component{
    componentDidMount() {
        this.props.GetProduct();
        this.props.GetPicture()
    }

     render() {
        return(
                <ProductInfo   state={this.props.Product}

                />
        )
    }
}
const mapStateToProps = state =>{
    return state
}
const mapDispatchToProps={
    GetProductNumber,
    GetProduct,
    GetPicture
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerProductInfo)