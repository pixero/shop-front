import React from "react";
import {connect} from "react-redux";
import {ProductInfo} from "./productInfo";
import {GetProduct, GetProductNumber} from "../../../redux/ProductInfo/Action";

 class ContainerProductInfo extends React.Component{
    constructor(props) {
        super(props);
        this.props.GetProduct()
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
    GetProduct
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerProductInfo)