import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            <div>
                {children}
            </div>
            {touched && error && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createSimpleField = (placeHolder, name, validators, component, type = 'text', text) => (
    <div>
        <Field
            placeholder={placeHolder}
            name={name}
            validate={validators}
            component={component}
            type={type}
        />
        {text}
    </div>
);
