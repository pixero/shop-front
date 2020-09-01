import React from "react";
import "./StyleYandexMap.sass";

export class YandexMap extends React.Component{
    render() {
        return(
            <div className="row yandexMap">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5843921d7ced514ed8222a602f1d679ee966d0164c67d19a10b0c2153fd5786b&amp;source=constructor"
                    frameBorder="0" className="col-12"></iframe>
            </div>
        )
    }
}