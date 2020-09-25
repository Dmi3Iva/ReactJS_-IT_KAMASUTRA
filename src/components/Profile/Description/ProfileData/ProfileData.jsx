import style from "../Description.module.css";
import React from "react";

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.turnOnEditMode}>Edit</button> }
            <div className="fullName">{props.profile.fullName}</div>
            <div className="aboutMe">{props.profile.aboutMe}</div>

            <div>
                {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
            </div>
            <div>
                {(props.profile.contacts.length !== 0) && "Социальные сети"}
            </div>
            <dl className={style.contacts}>
                {
                    (props.profile.contacts.length !== 0) &&
                    Object.keys(props.profile.contacts).map(c =>
                        (
                            <div key={c}>
                                <dt className={"contacts_item"}>
                                    {c}
                                </dt>
                                <dd>
                                    {props.profile.contacts[c]}
                                </dd>
                            </div>
                        )
                    )
                }
            </dl>
        </div>);
}

export default ProfileData;