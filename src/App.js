import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import styles from './App.module.css';
import {Switch, HashRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import WithSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    catchAllUnhandledError(reason ){
        alert(reason);
        console.log(reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledError);
    }

    componentWillUnmount() {
        window.removeEventListener(this.catchAllUnhandledError);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div>
                <div className={`${styles.App} ${styles.wrapper}`}>
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className={styles.content}>

                        <Switch>
                            <Route path='/profile/:userId?'
                                   render={WithSuspense(ProfileContainer)}
                            />

                            <Route exact path='/'
                                   render={WithSuspense(ProfileContainer)}
                            />

                            <Route exact path='/dialogs'
                                   render={WithSuspense(DialogsContainer)}
                            />

                            <Route exact path='/users'
                                   render={WithSuspense(UsersContainer)}
                            />

                            <Route exact path='/login'
                                   render={WithSuspense(Login)}
                            />

                            <Route path='*'
                                   render={() => {
                                       return <div>404 not found</div>;
                                   }}/>
                        </Switch>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)
(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    );
}

export default SamuraiJSApp;