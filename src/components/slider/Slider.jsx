import React from "react";
import Carousel from "react-bootstrap/Carousel";

export class Slider extends React.Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        alt="First slide"
                        src="https://i.artfile.ru/3000x2000_844381_%5Bwww.ArtFile.ru%5D.jpg"
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
                        src="https://www.zastavki.com/pictures/originals/2012/Cities_Bridge_in_Busan_035802_.jpg"
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
                        src="https://avatars.mds.yandex.net/get-pdb/69339/3e99857c-b0c1-4b47-a479-905eae138195/s1200?webp=false"
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