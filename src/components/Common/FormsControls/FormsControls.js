import React from 'react';
import {Field} from "redux-form";
import InputUI from '@material-ui/core/Input'
import CheckboxUI from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const styles = theme => ({
        formControl: {
            marginBottom: 15
        },
        error: {
            '& textarea': {
                border: "2px solid red"
            },
            '& span': {
                color: "red"
            }
        },
        formSummaryError: {
            border: "2px solid red",
            padding: "5px",
            color: "tomato"
        }
    })
;

export const FormControl = withStyles(styles)(
    (
        {
            input,
            meta: {touched, error},
            children,
            classes,
            ...props
        }
    ) => {
        const hasError = touched && error;
        return (
            <div className={classes.formControl + " " + (hasError && classes.error)}>
                <div>
                    {children}
                </div>
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
);

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><InputUI {...input} {...restProps} /></FormControl>
}

export const Checkbox = (props) => {
    console.log(props);
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <FormControlLabel
            control={<CheckboxUI {...input} {...restProps} />}
            label={'Remeb'}
        >

        </FormControlLabel>
    </FormControl>
}


export const createSimpleField = (placeHolder, name, validators, component, type, text) => (
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