import React from 'react';

const Description = (props) => {
    return (<div>
        <div className="fullName">{props.profile.fullName}</div>
        <div className="aboutMe">
            {!props.editMode &&
            <div><span onDoubleClick={
                ()=>{props.setEditMode(true)}
            }>{props.profile.aboutMe}</span></div>
            }

            {
                props.editMode &&
                <input autoFocus={true} onBlur={()=>props.setEditMode(false)} value={props.profile.aboutMe} onChange={() => {
            }}/>}
        </div>
        <div>{props.profile.lookingForAJob && props.profile.lookingForAJobDescription}</div>
        <div>
            {(props.profile.contacts.length !== 0) && "Социальные сети"}
        </div>
        {(props.profile.contacts.length !== 0) && Object.values(props.profile.contacts).map(c => (
            <div className="Contacts__item">{c}</div>))}
    </div>);
}

export default Description;
