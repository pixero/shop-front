import React from "react";
import './HeaderStyle.sass';
import NavDropdown from "react-bootstrap/NavDropdown";


export class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                <div className="container"><a className="navbar-brand" href="#">AvtoMaster</a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                        className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                         id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="#">First
                                Item</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Second
                                Item</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#">Third Item</a>
                            </li>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}