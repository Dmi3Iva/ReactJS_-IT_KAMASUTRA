import style from "../Description.module.css";
import React from "react";
import {connect} from "react-redux";
import {getUserProfile, updateProfile} from "../../../../redux/profile-reducer";
import {reduxForm} from "redux-form";
import {createSimpleField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";

const ProfileDataForm = (props) => {
    const {error} = props;
    return <div>
        <form onSubmit={props.handleSubmit}>
            {createSimpleField('Full name', 'fullName', [required], Input)}
            {createSimpleField('About me', 'aboutMe', [required], Textarea)}
            {createSimpleField('looking for a job', 'lookingForAJob', [], Input, 'checkbox', 'Looking for a job')}
            {createSimpleField('looking for a job', 'lookingForAJobDescription', [required], Textarea, 'Looking a job description')}


            <         div>
                {(props.profile.contacts.length !== 0) && "Социальные сети"}
            </div>
            <dl className={style.contacts}>
                {
                    (props.profile.contacts.length !== 0) &&
                    Object.keys(props.profile.contacts).map(c =>
                        (
                            <>
                                <dt className={"contacts_item"} key={c}>
                                    {c}
                                </dt>
                                <dd key={c + 'Prop'}>
                                    {createSimpleField(c, 'contacts.' + c, [], Input)}
                                </dd>
                            </>
                        )
                    )
                }
            </dl>
            {error && <div style={{border: "1px solid red"}}>
                {error}
            </div>}
            <button type="submit">Save new Data</button>
        </form>
    </div>;
}

const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)

const ProfileDataFormContainer = (props) => {
    const onSubmit = (values) => {
        debugger;
        //TODO: architecture error, rewrite
        props.updateProfile(values).then(()=>{
            props.turnOffEditMode();
            props.getUserProfile(props.profile.userId);
        })
    }
    return <ProfileDataReduxForm {...props} onSubmit={onSubmit}/>;
}


const mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile
});

export default connect(mapStateToProps, {updateProfile, getUserProfile})(ProfileDataFormContainer);