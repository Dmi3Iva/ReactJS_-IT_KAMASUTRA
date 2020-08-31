import React from 'react';
import {Field, reduxForm} from "redux-form";

const WriteNewPostForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor={"newPostText"}>Write your new post!</label>
                </div>
                <div>
                    <Field component={"textarea"} name={"newPostText"}/>
                </div>
            </div>
            <button type="submit" disabled={props.pristine || props.submitting} >Send new post</button>
        </form>
    );
}

const WriteNewPostReduxForm = reduxForm({
    form: 'writeNewPost'
})(WriteNewPostForm);

const WriteNewPost = (props) => {

    const onSubmit = (formData) => {
        debugger;
        console.log(formData);
        props.addPost(formData.newPostText);
    }

    return (
        <div style={{"margin": "20px"}}>
        <WriteNewPostReduxForm onSubmit ={onSubmit}/>
        </div>
    );

}

export default WriteNewPost;
