import React from "react";
import {ContainerSlider} from "../../components/slider/ContainerSlider";
import {ContainerSearch} from "../../components/serch/ContainerSearch";
import {Col, Row} from "react-bootstrap";

export class MainPage extends React.Component{
    render() {
        return(
            <Row >
                <ContainerSearch/>
                <ContainerSlider/>
            </Row>

        )
    }
}