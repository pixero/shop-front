import React from 'react';
import './App.css';
import {ContainerHeader} from "./components/user/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Container} from "react-bootstrap";
import {ContainerFooter} from "./components/user/footer/ContainerFooter";
import {ContainerAdminHeader} from "./components/admin/header/ContainerAdminHeader";
import {ContainerAdminFooter} from "./components/admin/footer/ContainerAdminFooter";
import {ContainerAdminPage} from "./page/adminPage/ContainerAdminPage";

function App() {
    if (! /admin/.test(window.location.pathname)) {
        return (
            <Container>
                <ContainerHeader/>
                <ContainerMainPage/>
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
