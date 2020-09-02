import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <div>
            <form action="/" method="GET" onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"login"} component={Input} validate={required} placeholder={"Login"}/>
                </div>
                <div>
                    <Field name={"password"} component={Input} type="password" validate={required} placeholder={"Password"}/>
                </div>
                <div>
                    <Field name={"rememberMe"} component={Input} type="checkbox"/> remember me
                </div>
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
    if(props.isAuth)
        return <Redirect to={"/profile"} />

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

export default connect(mapStateToProps,{
    login
})(Login);
