import React from "react";
import {ContainerSlider} from "../../components/user/slider/ContainerSlider";
import {ContainerYandexMap} from "../../components/user/yandexMap/ContainerYandexMap";

export class MainPage extends React.Component{
    render() {
        return(
            <div>
                <ContainerSlider/>
                <ContainerYandexMap/>
            </div>

        )
    }
}