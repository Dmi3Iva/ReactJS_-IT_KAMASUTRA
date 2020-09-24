import React from 'react';
import {connect} from "react-redux";
import {saveProfilePhoto} from "../../../redux/profile-reducer";
import withStyles from "@material-ui/core/styles/withStyles";
import DefaultUserAvatar from "../../Common/DefaultUserAvatar/DefaultUserAvatar";


const styles = theme => ({
	avatar: {
		width: 250,
		height: 250
	}
});

function Avatar({classes, onAvatarSelected, photos, isOwner}){

	return(
			<div className={styles.avatar}>
				{
					photos.small ?
						<img src={photos.small} className={classes.avatar__photo} alt="ava "/>
						:
						<DefaultUserAvatar className={classes.avatar}/>
				}
				{isOwner && <input type={"file"} onChange={onAvatarSelected}/>}
			</div>
	);
}

const AvatarContainer =
	withStyles(styles)(
	(props)=>{
	const onAvatarSelected = (e) => {
		if( e.target.files.length)
		{
			props.saveProfilePhoto(e.target.files[0]);
		}
	}
	return <Avatar {...props} onAvatarSelected={onAvatarSelected} />;
});

const mapStateToProps = (state, ownProps) => ({
	...ownProps,
	photos: state.ProfilePage.profile.photos
});

export default connect(mapStateToProps, {saveProfilePhoto})(AvatarContainer);
