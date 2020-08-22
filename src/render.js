import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export let renderReactDom = (State) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App AppState={State}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};