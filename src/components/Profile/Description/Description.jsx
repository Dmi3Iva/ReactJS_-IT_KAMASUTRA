import React from 'react';

const Description = (props) => {
    return (<div>
        <div className="status" style={{fontFamily: 'Roboto', color: 'tomato'}}>
            {
                !props.editMode &&
                <div>
                    <span
                        onDoubleClick={() => {
                            props.setEditMode(true)
                        }}
                    >
                        {props.status || "-----"}
                    </span>
                </div>
            }

            {
                props.editMode &&
                <input
                    autoFocus={true}
                    onBlur={() => props.setStatus(props.status)}
                    value={props.status}
                    onChange={(e) => {
                        props.onChangeStatus(e.target.value)
                    }}
                />
            }
        </div>
        <div className="fullName">{props.profile.fullName}</div>
        <div className="aboutMe">{props.profile.aboutMe}</div>

        <div>
            {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
        </div>
        <div>
            {(props.profile.contacts.length !== 0) && "Социальные сети"}
        </div>
        {
            (props.profile.contacts.length !== 0) &&
            Object.values(props.profile.contacts).filter(c => c).map(c =>
                (
                    <div className="Contacts__item" key={c}>{c}</div>
                )
            )
        }
    </div>);
}

export default Description;
