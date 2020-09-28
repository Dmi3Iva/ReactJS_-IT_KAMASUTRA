import React from 'react';
import {connect} from "react-redux";
import {saveProfilePhoto} from "../../../redux/profile-reducer";
import withStyles from "@material-ui/core/styles/withStyles";
import DefaultUserAvatar from "../../Common/DefaultUserAvatar/DefaultUserAvatar";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";


const styles = theme => ({
    avatar: {
        width: 250,
        height: 250
    },
    uploadButton:{
        margin:"10px 0 20px"
    }
});

function Avatar({classes, onAvatarSelected, photos, isOwner}) {

    console.log(photos);
    return (
        <div className={styles.avatar}>
            {
                photos.small ?
                    <div><img src={photos.large} className={classes.avatar__photo} alt="ava "/></div>
                    :
                    <DefaultUserAvatar className={classes.avatar}/>
            }
            {isOwner &&
                <Button variant={'contained'} color={'primary'} component={"label"} className={classes.uploadButton}>
                    Upload new photo
                    <input style={{display:'none'}} type={"file"} onChange={onAvatarSelected}/>
                </Button>
            }
        </div>
    );
}

const AvatarContainer =
    withStyles(styles)(
        (props) => {
            const onAvatarSelected = (e) => {
                if (e.target.files.length) {
                    props.saveProfilePhoto(e.target.files[0]);
                }
            }
            return <Avatar {...props} onAvatarSelected={onAvatarSelected}/>;
        });

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    photos: state.ProfilePage.profile.photos
});

export default connect(mapStateToProps, {saveProfilePhoto})(AvatarContainer);
