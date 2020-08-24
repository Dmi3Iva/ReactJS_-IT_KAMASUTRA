import './index.css';
import * as serviceWorker from './serviceWorker';
import Store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

let renderDom = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={Store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderDom(Store.getState());

Store.subscribe(()=> {
    renderDom(Store.getState());
    }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
