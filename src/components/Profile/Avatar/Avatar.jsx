import React from 'react';
import styles from './Avatar.module.css'
import userPhoto from '../../assets/freepik-avatar.jpg';
import {connect} from "react-redux";
import {saveProfilePhoto} from "../../../redux/profile-reducer";


function Avatar(props){
	return(
			<div className={styles.avatar}>
				<img src={props.photos.small || userPhoto} className={styles.avatar__photo} alt="ava "/>
				{props.isOwner && <input type={"file"} onChange={props.onAvatarSelected}/>}
			</div>
	);
}

const AvatarContainer = (props)=>{
	const onAvatarSelected = (e) => {
		if( e.target.files.length)
		{
			props.saveProfilePhoto(e.target.files[0]);
		}
	}
	return <Avatar {...props} onAvatarSelected={onAvatarSelected} />;
};

const mapStateToProps = (state, ownProps) => ({
	...ownProps,
	photos: state.ProfilePage.profile.photos
});

export default connect(mapStateToProps, {saveProfilePhoto})(AvatarContainer);
