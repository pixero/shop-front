import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ContainerHeader} from "./components/header/ContainerHeader";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerFooter} from "./components/footer/ContainerFooter";
import {ContainerYandexMap} from "./components/yandexMap/ContainerYandexMap";

function App() {
    if (! /admin/.test(window.location.pathname)) {
        return (
            <Container>
                <Row>
                    <Col><ContainerHeader/></Col>
                </Row>
                <ContainerMainPage/>
                <ContainerFooter/>
            </Container>

        );
    }
    else { return null}
}


export default App;
