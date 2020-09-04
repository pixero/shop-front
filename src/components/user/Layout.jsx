import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ContainerHeader} from "./header/ContainerHeader";
import {ContainerMainPage} from "../../page/mainPage/ContainerMainPage";
import {ContainerFooter} from "./footer/ContainerFooter";

export class Layout extends React.Component{

    render() {
        return(
            <div>
                <ContainerHeader/>
                <ContainerFooter/>
            </div>

        )
    }
}