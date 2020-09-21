import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React from "react";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles/withStyles";

const theme = createMuiTheme({
        overrides: {
            MuiCssBaseline:{
                '@global':{
                    body:{
                        minHeight: '100%'
                    },
                    '#root': {
                        minHeight: '100%'
                    }
                }
            }
        },
        palette: {
            primary: {
                main: '#05668D',
            },
            secondary: {
                main: '#0A1128'
            },
            background: {
                default: '#d6d6d6'
            },
        }
    })
;

const AppInit = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App/>
                </MuiThemeProvider>
            </Provider>
        </HashRouter>
    );
}

export default AppInit;