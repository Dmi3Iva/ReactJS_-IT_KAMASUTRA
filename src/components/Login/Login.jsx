import React from 'react';
import {reduxForm} from "redux-form";
import {Checkbox, createSimpleField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    formSummaryError: {
        border: '2px solid red',
        padding: 5,
        color: 'tomato',
        marginTop: 50
    }
});

const LoginForm = ({handleSubmit, error, captchaUrl, classes}) => {
    return (
        <div>
            <form action="/" method="GET" onSubmit={handleSubmit}>
                {createSimpleField('Email', 'login', required, Input)}
                {createSimpleField('Password', 'password', required, Input, 'password')}
                {createSimpleField('', 'RememberMe', null, Checkbox, 'checkbox', 'rememberMe')}

                {captchaUrl && <>
                    <img src={captchaUrl} alt="resolve this captcha"/>
                    {createSimpleField('captcha', 'captcha', required, Input)}
                </>}
                <div>
                    <Button color="primary" variant="contained" type="submit">Login</Button>
                </div>
                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(withStyles(styles)(LoginForm));

const Login = (props) => {

    const onSubmit = (formData) => {
        const {login, password, rememberMe, captcha} = formData;
        props.login(login, password, rememberMe, captcha);
    }

    if (props.isAuth)
        return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    captchaUrl: state.Auth.captchaUrl
})

export default connect(mapStateToProps, {
    login
})(Login);
