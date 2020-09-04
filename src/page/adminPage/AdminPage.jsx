import React from "react";
import {AddProduct} from "../../components/admin/addNewProduct/addProduct";

export class AdminPage extends React.Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Dashboard</h3><a
                    className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"><i
                    className="fa fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</a></div>
                <div className="row">
                        <AddProduct/>
                </div>

            </div>

        )
    }
}