import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import Axios from "axios";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";
import {routerMiddleware, ConnectedRouter} from "connected-react-router";

import './index.css';
import App from './App';
import createRootReducer from './redux/Reducer';

const history = createBrowserHistory();
const middleWare = [thunk, routerMiddleware(history)]
const store = createStore(createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleWare)
    ));

Axios.defaults.baseURL = "http://localhost:8080"

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                         <App/>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>
)


ReactDOM.render(
    app, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
