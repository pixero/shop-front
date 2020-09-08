import React from "react";
import './SearchStyle.sass'

export class Search extends React.Component{
    constructor(props) {
        super(props);
        this.numberProduct = React.createRef();
    }
    render() {
        return(
            <div>
            <div className="search-container">
                <input type="text" className="search-input" name="search-bar"
                                                     value={this.props.state.number}
                                                     ref={this.numberProduct}
                                                     onChange={()=>this.props.updateNumber(this.numberProduct.current.value)}
                                                     placeholder="Search..."/>
                <button className="btn btn-light search-btn" type="button"
                        onClick={()=>this.props.getProduct()}> <i className="fa fa-search"> </i> </button>
            </div>
                {this.props.state.response}
            </div>
        )
    }
}