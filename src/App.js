import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import styles from './App.module.css';
import {HashRouter, Route, withRouter} from 'react-router-dom';
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

    componentDidMount() {
        this.props.initializeApp();
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

                        <Route path='/profile/:userId?'
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