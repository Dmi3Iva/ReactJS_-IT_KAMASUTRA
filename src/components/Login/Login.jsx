import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <div>
            <form action="/" method="GET" onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"login"} component={Input} validate={required} placeholder={"Login"}/>
                </div>
                <div>
                    <Field name={"password"} component={Input} validate={required} placeholder={"Password"}/>
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;
