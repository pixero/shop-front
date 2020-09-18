import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default  function  ProductSlider (props) {

        return(
            <Carousel>
                {props.pictureName}
                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={props.pictureName}*/}
                {/*        alt="First slide"*/}
                {/*    />*/}
                {/*    <Carousel.Caption>*/}
                {/*        <h3>First slide label</h3>*/}
                {/*        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
                {/*<Carousel.Item>*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={props.pictureName}*/}
                {/*        alt="Third slide"*/}
                {/*    />*/}

                {/*    <Carousel.Caption>*/}
                {/*        <h3>Third slide label</h3>*/}
                {/*        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                {/*    </Carousel.Caption>*/}
                {/*</Carousel.Item>*/}
            </Carousel>
        )
}