import React from "react";
import './FooterStyle.sass';
import Row from "react-bootstrap/Row";


export class Footer extends React.Component {
    render() {
        return (
            <div className="footer-basic">
                <footer>
                    <div className="social"><a href="#"><i className="fa  fa-instagram"></i></a><a href="#"><i
                        className="fa fa-vk"></i></a>
                        {/*<a href="#">*/}
                        {/*<i className="icon ion-social-twitter"></i></a>*/}
                        {/*<a href="#">*/}
                        {/*<i className="icon ion-social-facebook"></i></a>*/}
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Services</a></li>
                        <li className="list-inline-item"><a href="#">About</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright">Company Name © 2017</p>
                </footer>
            </div>
        )
    }
}