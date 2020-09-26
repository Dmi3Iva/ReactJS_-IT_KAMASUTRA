import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FaceBookIcon from "@material-ui/icons/Facebook";
import VkIcon from './vk.svg';
import {SvgIcon} from "@material-ui/core";

const styles = theme => ({
    contacts: {
        display: 'flex',
        flexWrap: 'wrap',

        '& > a': {

        }
    }
});

const ProfileData = (props) => {
    const {classes} = props;

    const renderSocials = (c, cVal) => {
        const wrapInLink = (Component, href) => {
            return <a href={href}><Component/></a>;
        }

        switch (c.toString().toLowerCase()) {
            case 'facebook': {
                return wrapInLink(FaceBookIcon, cVal);
            }
            case 'vk': {
                return wrapInLink(()=>(<SvgIcon component={VkIcon}/>), cVal);
            }
            default: {
                return wrapInLink(()=>(<div>{c}</div>), cVal);
            }
        }
    }

    return (
        <div>
            <div className="fullName">{props.profile.fullName}</div>
            <div className="aboutMe">{props.profile.aboutMe}</div>
            <div>
                {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
            </div>
            <div>
                {(props.profile.contacts.length !== 0) && "Социальные сети"}
            </div>
            <dl className={classes.contacts}>
                {
                    (props.profile.contacts.length !== 0) &&
                    Object.keys(props.profile.contacts).map(c =>
                        (
                            <React.Fragment key={c}>
                                {renderSocials(c, props.profile.contacts[c])}
                            </ React.Fragment>
                        )
                    )
                }
            </dl>
            {
                props.isOwner &&
                <Button color={'primary'} variant={'contained'} onClick={props.turnOnEditMode}>Edit my profile</Button>
            }
        </div>);
}

export default withStyles(styles)(ProfileData);