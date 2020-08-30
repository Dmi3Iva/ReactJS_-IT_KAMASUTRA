import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {authUserData} from "../redux/auth-reducer";

export const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) {
                authUserData();
                if(this.props.isAuth === false)
                    return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }

    return connect((state) =>
        {
            return {
                isAuth: state.Auth.isAuth
            }
        },
        {
            authUserData
        }
    )(RedirectComponent);
}
