import React from 'react';
import './App.css';
import {ContainerHeader} from "./components/user/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Container} from "react-bootstrap";
import {ContainerFooter} from "./components/user/footer/ContainerFooter";
import {ContainerAdminHeader} from "./components/admin/header/ContainerAdminHeader";
import {ContainerAdminFooter} from "./components/admin/footer/ContainerAdminFooter";
import {ContainerAdminPage} from "./page/adminPage/ContainerAdminPage";
import {Route} from "react-router-dom";
import ContainerProductInfo from "./components/user/productInfo/ContainerProductInfo";
import ContainerSearch from "./components/user/search/ContainerSearch";

function App() {
    if (! /admin/.test(window.location.pathname)) {
        return (
            <Container>
                <ContainerHeader/>
                <ContainerSearch/>
                <Route component={ContainerMainPage} exact path="/"/>
                <Route component={ContainerProductInfo} path={"/product"}/>
                <ContainerFooter/>
            </Container>

        );
    }
    else {
        return(
        <div>
            <ContainerAdminHeader/>
            <ContainerAdminPage/>
            <ContainerAdminFooter/>
        </div>
        )
    }
}


export default App;
