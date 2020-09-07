import React from 'react';
import './App.css';
import {ContainerHeader} from "./components/user/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Container} from "react-bootstrap";
import {ContainerFooter} from "./components/user/footer/ContainerFooter";
import {ContainerAdminHeader} from "./components/admin/header/ContainerAdminHeader";
import {ContainerAdminFooter} from "./components/admin/footer/ContainerAdminFooter";
import {ContainerAdminPage} from "./page/adminPage/ContainerAdminPage";
import ContainerProductInfo from "./components/user/productInfo/ContainerProductInfo";
import ContainerSearch from "./components/user/search/ContainerSearch";
import {Switch,Route} from 'react-router-dom'

const routes = (
    <Switch>
        <Route component={ContainerMainPage} exact path="/"/>
        <Route component={ContainerProductInfo} path={"/product"}/>
    </Switch>
)


function App() {
    if (! /admin/.test(window.location.pathname)) {
        return (
            <Container>
                <ContainerHeader/>
                <ContainerSearch/>
                {routes}
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
