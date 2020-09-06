
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import {reducer} from "./redux/Reducer";
import Axios from "axios";

const store = createStore(reducer,compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

Axios.defaults.baseURL = "http://localhost:8080"

ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
