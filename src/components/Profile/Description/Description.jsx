import React, {useState} from 'react';
import style from './Description.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const Description = (props) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
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
            {editMode
                ? <ProfileDataForm initialValues={props.profile} turnOffEditMode={() => setEditMode(false)}/>
                : <ProfileData profile={props.profile} turnOnEditMode={() => setEditMode(true)}/>
            }
        </div>
    );
}





export default Description;
