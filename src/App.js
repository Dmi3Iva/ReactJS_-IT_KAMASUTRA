import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import styles from './App.module.css';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div>
                <div className={`${styles.App} ${styles.wrapper}`}>
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className={styles.content}>

                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>

                        <Route exact path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route exact path='/users'
                               render={() => <UsersContainer/>}/>

                        <Route exact path='/login'
                               render={() => <Login/>}/>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)
(App);