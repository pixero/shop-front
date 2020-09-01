import React from "react";
import './SearchStyle.sass'
export class Search extends React.Component{
    render() {
        return(
            <div className="d-flex justify-content-end col-12">
                <div className="searchbar">
                    <input className="search_input" type="text" name="" placeholder="Поиск..."/>
                        <a href="#" className="search_icon"><i className="fa fa-search"> </i></a>
                </div>
            </div>
        )
    }
}