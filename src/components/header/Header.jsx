import React from "react";
import './HeaderStyle.sass';
import {NavLink} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Header extends React.Component{
    render() {
        return(
            <header className="justify-content-center">
            <Navbar bg="light" expand="lg" className="row">
                <div className="logo col-10">
                    <NavLink to="/" exact className="up_logo"><span id="avto">Avto</span><span
                        id="master">Master</span></NavLink>
                </div>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto justify-content-end col-7">
                        <Nav.Link href="#home"> Адреса</Nav.Link>
                        <NavDropdown title="Личный кабинет" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/logIn">Войти</NavDropdown.Item>
                            <NavDropdown.Item href="/signIn">Регстрация</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <div className="horizontal_line row"> </div>
            </header>
        )
    }
}