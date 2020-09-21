import React from 'react';
import './App.css';
import {ContainerHeader} from "./components/user/header/ContainerHeader";
import {Container} from "react-bootstrap";
import {ContainerFooter} from "./components/user/footer/ContainerFooter";
import {ContainerAdminHeader} from "./components/admin/header/ContainerAdminHeader";
import {ContainerAdminFooter} from "./components/admin/footer/ContainerAdminFooter";
import {ContainerAdminPage} from "./page/adminPage/ContainerAdminPage";
import ContainerSearch from "./components/user/search/ContainerSearch";
import {Router} from "./Router";




const App = ({children}) => {
    if (! /admin/.test(window.location.pathname)) {
        return (
            <Container>
                <ContainerHeader/>
                <ContainerSearch/>
                {Router}
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
        </div>)
    }
}


export default App;
