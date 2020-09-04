import React from "react";
import "./StyleYandexMap.sass";

export class YandexMap extends React.Component{
    render() {
        return(
            <div className="map-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Location </h2>
                        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                            Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
                    </div>
                </div>
                <iframe allowFullScreen="" frameBorder="0"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A5843921d7ced514ed8222a602f1d679ee966d0164c67d19a10b0c2153fd5786b&amp;source=constructor"
                        width="100%" height="450"></iframe>
            </div>
        )
    }
}