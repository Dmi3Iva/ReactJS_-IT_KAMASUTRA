import React from 'react';

const Description = (props) => {
    return (<div>
        <div className="status" style={{fontFamily:'Roboto', color: 'tomato'}}>
            {
                !props.editMode &&
                <div>
                    <span
                        onDoubleClick={() => {
                            props.setEditMode(true)
                        }}
                    >
                        {props.status}
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
        <div className="fullName">{props.fullName}</div>
        <div className="aboutMe">{props.aboutMe}</div>

        <div>
            {props.lookingForAJob && props.lookingForAJobDescription}
        </div>
        <div>
            {(props.contacts.length !== 0) && "Социальные сети"}
        </div>
        {
            (props.contacts.length !== 0) &&
            Object.values(props.contacts).map(c =>
                (
                    <div className="Contacts__item">{c}</div>
                )
            )
        }
    </div>);
}

export default Description;
