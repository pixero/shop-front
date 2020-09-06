import React from "react";
import './FooterStyle.sass';
import {NavLink} from "react-router-dom";


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
                        <li className="list-inline-item"><NavLink to="#">Home</NavLink></li>
                        <li className="list-inline-item"><NavLink to="#">Services</NavLink></li>
                        <li className="list-inline-item"><NavLink to="#">About</NavLink></li>
                        <li className="list-inline-item"><NavLink to="#">Terms</NavLink></li>
                        <li className="list-inline-item"><NavLink to="#">Privacy Policy</NavLink></li>
                    </ul>
                    <p className="copyright">Company Name © 2017</p>
                </footer>
            </div>
        )
    }
}