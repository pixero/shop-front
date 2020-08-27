import React from "react";

export class Header extends React.Component{
    render() {
        return(
            <header>
                <nav>
                    <div className="logo">
                        <router-link to="/" exact className="up_logo"><span id="avto">Avto</span><span
                            id="master">Master</span></router-link>
                        <router-link to="/" exact className="down_logo">автозапчасти вовремя</router-link>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <router-link className="nav-link link" to="#">Адреса</router-link>
                        </li>
                        <li className="nav-item dropdown">
                            <router-link to="" className="nav-link dropdown-toggle link" data-toggle="dropdown"
                                         role="button" aria-haspopup="true" aria-expanded="false">Личный кабинет
                            </router-link>
                            <div className="dropdown-menu">
                                <router-link to="/singIn" className="dropdown-item link">Войти</router-link>
                                <router-link to="/login" className="dropdown-item link">Регистрация</router-link>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="horizontal_line"></div>
            </header>
        )
    }
}