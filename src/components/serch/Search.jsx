import React from "react";
import './SearchStyle.sass'
export class Search extends React.Component{
    render() {
        return(
            <div className="search-container"><input type="text" className="search-input" name="search-bar"
                                                     placeholder="Search..."/>
                <button className="btn btn-light search-btn" type="button"> <i className="fa fa-search"></i> </button>
            </div>
        )
    }
}