import React from "react";
import {ContainerSlider} from "../../components/slider/ContainerSlider";
import {ContainerSearch} from "../../components/serch/ContainerSearch";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerYandexMap} from "../../components/yandexMap/ContainerYandexMap";

export class MainPage extends React.Component{
    render() {
        return(
            <Container >
                <Row>
                <ContainerSearch/>
                </Row>
                <Row>
                <ContainerSlider/>
                </Row>
                <Row>
                <ContainerYandexMap/>
                </Row>
            </Container>

        )
    }
}