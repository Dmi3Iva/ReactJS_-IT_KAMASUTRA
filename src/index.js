import './index.css';
import * as serviceWorker from './serviceWorker';
import Store  from './redux/store.js';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let renderDom = (State) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                AppState = {State}
                addPost = {Store.addPost.bind(Store)}
                updateNewPostText = {Store.updateNewPostText.bind(Store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderDom(Store.getState());

Store.subscribe(renderDom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
