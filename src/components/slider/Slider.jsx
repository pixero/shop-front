import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './StyleSlider.sass';

export class Slider extends React.Component{
    render() {
        return(
            <Carousel className="col-12 sliderMain">
                <Carousel.Item className="silderItems">
                    <img
                        className="d-block w-100 img-thumbnail"
                        alt="First slide"
                        src="slide1.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Наша компания на рынке уже более 15 лет</h3>
                        <p>Профессионально подберём вам необходимые&shy;
                            запчасти&shy; и расходники.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="silderItems">
                    <img
                        className="d-block w-100 img-thumbnail"
                        alt="Third slide"
                        src="slide2.jpg"
                    />

                    <Carousel.Caption>
                        <h3>Работаем с Белоруссией , Молдовой&shy;,Казахстаном.</h3>
                        <p>Оперативно доставим товар в любую точку.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="silderItems">
                    <img
                        className="d-block w-100 img-thumbnail"
                        alt="Third slide"
                        src="slide3.jpg"
                    />

                    <Carousel.Caption>
                        <h3>Доставки осуществляется транспортными компаниями</h3>
                        <p>ПЭК , СДЭК , КИТ , Энергия, а так же автобусами.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}