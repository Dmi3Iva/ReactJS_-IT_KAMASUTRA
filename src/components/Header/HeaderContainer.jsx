import React from 'react';
import Header from "./Header";
import {authUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUserData();
    }

    render() {
        return (<Header
                    isAuth={this.props.isAuth}
                    login={this.props.login}
                />
        );
    }
}

let mapStateToProps = (state)=>({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
});

export default connect(mapStateToProps, {authUserData})(HeaderContainer);
