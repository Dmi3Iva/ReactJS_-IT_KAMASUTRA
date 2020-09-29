import React, {useState} from 'react';
import {reduxForm} from "redux-form";
import {Checkbox, createSimpleField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";

const styles = theme => ({
    formSummaryError: {
        border: '2px solid red',
        padding: 5,
        color: 'tomato',
        marginTop: 50
    },
    registrationButton: {
        marginLeft: 10
    },
    registrationForm: {
        marginTop: 20
    }
});

const LoginForm = ({handleSubmit, error, captchaUrl, classes}) => {

    const [hintRegister, setHintRegister] = useState(false);

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
                    <Button color="primary" variant="outlined" className={classes.registrationButton} onClick={()=>{setHintRegister(!hintRegister)}}>Registration</Button>
                </div>
                {hintRegister && <Card variant={'outlined'} className={classes.registrationForm}><CardContent>
                    <p>Sorry, registration now is unsupported</p>
                    <h3>But you can use demo profile below.</h3>
                    <p><span className={classes.hint}>Login:</span> yokataj953@yosemail.com</p>
                    <p><span className={classes.hint}>Passw:</span> gghm1f</p>
                </CardContent>
                </Card>}
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
