import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React from "react";
import App from "./App";
import {HashRouter} from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            main:'#05668D',
        },
        secondary: {
            main: '#0A1128'
        }
    }
});

const AppInit = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <CssBaseline/>
                <MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>
            </Provider>
        </HashRouter>
    );
}

export default AppInit;
