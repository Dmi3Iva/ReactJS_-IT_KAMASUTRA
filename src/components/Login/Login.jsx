import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createSimpleField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./login.module.css";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form action="/" method="GET" onSubmit={handleSubmit}>
                {createSimpleField('Login', 'login', required, Input)}
                {createSimpleField('password', 'password', required, Input, 'password')}
                {createSimpleField('', 'rememberMe',  null, Input, 'checkbox', 'rememberMe')}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>
                }
                <div>
                    <button>login</button>
                </div>
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        const {login, password, rememberMe} = formData;
        props.login(login, password, rememberMe);
    }

    if (props.isAuth)
        return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {
    login
})(Login);
