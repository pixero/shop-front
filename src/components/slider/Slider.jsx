import React from "react";
import Carousel from "react-bootstrap/Carousel";

export class Slider extends React.Component{
    render() {
        return(
            <Carousel className="col-12">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        alt="First slide"
                        src="http://www.zwalls.ru/pic/201704/800x480/zwalls.ru-53436.jpg"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        alt="Third slide"
                        src="http://www.zwalls.ru/pic/201704/800x480/zwalls.ru-53429.jpg"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        alt="Third slide"
                        src="http://www.zwalls.ru/pic/201612/800x480/zwalls.ru-53346.jpg"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}