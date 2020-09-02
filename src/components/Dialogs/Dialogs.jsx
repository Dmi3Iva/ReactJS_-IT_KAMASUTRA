import React from 'react';
import styles from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let sendMessage = (text) => {
        props.sendMessage(text);
    }

    if (props.isAuth === false) {
        return <Redirect to={"/login"}/>;
    }

    return (
        <div>
            <h2 className={styles.dialogs__header}>Dialogs</h2>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    {props.DialogItems}
                </ul>
                <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                    {props.MessageItems}
                    <form onSubmit={props.handleSubmit}>

                        <DialogFormContainer sendMessage={sendMessage}/>
                    </form>
                </div>
            </div>
        </div>
    );
}

const DialogForm =(props)=>
{
    return (
        <form onSubmit={props.handleSubmit} className="dialogs__new_message">
            <Field name={"newMessageText"} component={"textarea"}/>
            <button type={"submit"} >Send</button>
        </form>
    );
}

const DialogReduxForm = reduxForm({
    form: 'dialogForm'
})(DialogForm)

const DialogFormContainer = (props) => {
    const onSubmit =(formData)=>{
        debugger
        props.sendMessage(formData.newMessageText);
    }

    return (
        <DialogReduxForm onSubmit={onSubmit} />
    );
}

export default Dialogs;
