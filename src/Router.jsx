import {Route, Switch} from "react-router-dom";
import {ContainerMainPage} from "./page/mainPage/ContainerMainPage";
import ContainerProductInfo from "./components/user/productInfo/ContainerProductInfo";
import React from "react";

export  const Router = (
    <Switch>
        <Route component={ContainerMainPage} exact ={true} path="/"/>
        <Route component={ContainerProductInfo} path={"/product"}/>
    </Switch>
)