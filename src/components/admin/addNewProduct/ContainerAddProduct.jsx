import React from "react";
import {AddProduct} from "./AddProduct";
import {connect} from "react-redux";
import {
    AddNewProduct,
    UpdateProductDescription, UpdateProductFile,
    UpdateProductName,
    UpdateProductNumber, UpdateProductPrice
} from "../../../redux/adminPage/Action";

class ContainerAddProduct extends React.Component{
    render() {
        return(
            <AddProduct state={this.props.Admin}
                        addProduct={this.props.AddNewProduct}
                        updateNumber={this.props.UpdateProductNumber}
                        updateName={this.props.UpdateProductName}
                        updateDescr={this.props.UpdateProductDescription}
                        updatePrice={this.props.UpdateProductPrice}
                        updateFile={this.props.UpdateProductFile}
            />
        )
    }
}
const mapStateToProps = state =>{
   return state
}
const mapDispatchToProps={
    AddNewProduct,
    UpdateProductName,
    UpdateProductDescription,
    UpdateProductPrice,
    UpdateProductNumber,
    UpdateProductFile
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerAddProduct)