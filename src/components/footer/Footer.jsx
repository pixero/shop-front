import React from "react";
import './FooterStyle.sass';
import Row from "react-bootstrap/Row";


export class Footer extends React.Component{
    render() {
        return(
            <footer  className="fixed-bottom" data-spy="affix" data-offset-bottom="0">
                <div className="container footer-content">
                    <div className="row ">
                    <p className="col-10">2020© Все права защищены</p>
                        <div className="col-2 iconSocial">
                            <a href="https://www.instagram.com/alex.zaicev/?igshid=1bx8lsbxibbpo" target="_blank"> <i
                                className="fa fa-2x fa-instagram" aria-hidden="true"> </i> </a>
                            <a href="https://vk.com/id5670045" target="_blank"> <i className=" fa fa-2x fa-vk"  aria-hidden="true"> </i>  </a>
                        </div>

                    </div>
                </div>
            </footer>
        )
    }
}