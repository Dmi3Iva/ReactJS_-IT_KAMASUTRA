import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLengthCreator10 = maxLengthCreator(10);

const WriteNewPostForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor={"newPostText"}>Write your new post!</label>
                </div>
                <div>
                    <Field
                        component={Textarea}
                        name={"newPostText"}
                        validate={[required, maxLengthCreator10 ]}
                    />
                </div>
            </div>
            <button type="submit"  >Send new post</button>
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
