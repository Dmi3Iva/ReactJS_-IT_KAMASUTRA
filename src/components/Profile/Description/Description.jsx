import React, {useState} from 'react';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    status:{
        marginBottom: 10
    },
    definition: {
        fontWeight: 'bold'
    }
});

const Description = (props) => {

    const [editMode, setEditMode] = useState(false);

    const {classes} = props;

    return (
        <div>
            <div className={classes.status} >
                <span className={classes.definition}>Status: </span>
                {
                    !props.editMode && props.isOwner ?
                            <span
                                onDoubleClick={() => {
                                    props.setEditMode(true)
                                }}
                            >
                            {props.status || "-----"}
                        </span>
                            :
                        !props.editMode && <span>{props.status || "-----"}</span>
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
                :
                <ProfileData isOwner={props.isOwner} profile={props.profile} turnOnEditMode={() => setEditMode(true)}/>
            }
        </div>
    );
}


export default withStyles(styles)(Description);
