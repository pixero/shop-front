import React from "react";
import {Search} from "./Search";
import { GetProductNumber, UpdateNumberProduct} from "../../../redux/ProductInfo/Action";
import {connect} from "react-redux";

class ContainerSearch extends React.Component{
    render() {
        return(
            <Search   updateNumber={this.props.UpdateNumberProduct}
                      state={this.props.Product}
                      getProduct={this.props.GetProductNumber}
                      responses={localStorage.getItem('searchResponse')}
            />
        )
    }
}
const mapStateToProps = state=>{
    return state
}
const mapDispatchToProps={
    UpdateNumberProduct,
    GetProductNumber
}
export default connect (mapStateToProps,mapDispatchToProps)(ContainerSearch)