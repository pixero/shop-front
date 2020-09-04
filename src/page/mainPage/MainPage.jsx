import React from "react";
import {ContainerSlider} from "../../components/user/slider/ContainerSlider";
import {ContainerSearch} from "../../components/user/serch/ContainerSearch";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerYandexMap} from "../../components/user/yandexMap/ContainerYandexMap";

export class MainPage extends React.Component{
    render() {
        return(
            <div>
                <ContainerSearch/>
                <ContainerSlider/>
                <ContainerYandexMap/>
            </div>

        )
    }
}