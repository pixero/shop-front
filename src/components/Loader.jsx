import React from "react";
import Spinner from "react-bootstrap/Spinner";

export  default class Loader extends React.Component{

    render() {
        return(
            <div className="w-100 row">
            <Spinner className="" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </div>
        )
    }
}