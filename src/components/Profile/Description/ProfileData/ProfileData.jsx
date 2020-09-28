import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import FaceBookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';

import VkIcon from './vk';
import {SvgIcon} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const styles = theme => ({
    contacts: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '2px 0 0 0',

        '& > a': {

        }
    },
    definition:{
        fontWeight: 'bold'
    },
    contactsHeading:{
        marginBottom: 5
    },
    editButton: {
        marginTop: 15
    }
});

const ProfileData = (props) => {
    const {classes} = props;

    const renderSocials = (c, cVal) => {
        if(!cVal)
        {
            return null;
        }
        const wrapInLink = (Component, href) => {
            return <Link href={href} title={c}><Component/></Link>;
        }

        switch (c.toString().toLowerCase()) {
            case 'facebook': {
                return wrapInLink(FaceBookIcon, cVal);
            }
            case 'vk': {
                return wrapInLink(()=>(<SvgIcon><VkIcon/></SvgIcon>), cVal);
            }
            case 'twitter' : {
                return wrapInLink(TwitterIcon,cVal);
            }
            case 'instagram':{
                return wrapInLink(InstIcon,cVal);
            }
            case 'github':{
                return wrapInLink(GitHubIcon,cVal);
            }
            case 'youtube':{
                return wrapInLink(YouTubeIcon, cVal);
            }
            default: {
                return wrapInLink(()=>(<div>{c}</div>), cVal);
            }
        }
    }

    const mySite = props.profile.contacts.website ? {
        website: props.profile.contacts.website
    } : null;

    const mainLink = props.profile.contacts.mainLink ? {
        mainLink: props.profile.contacts.mainLink
    } : null;

    const socLinks = Object.assign({}, props.profile.contacts);
    delete socLinks['website'];
    delete socLinks['mainLink'];


    return (
        <div>
            <div className={classes.definition}>{props.profile.fullName}</div>
            <div><span className={classes.definition}>About me:</span>{props.profile.aboutMe}</div>
            <div>
                {props.profile.lookingForAJob && <><span><span className={classes.definition}>User looking for a job: </span>{props.profile.lookingForAJobDescription}</span></>}
            </div>
            <div>
                {(props.profile.contacts.length !== 0) && <div className={classes.definition+ ' ' + classes.contactsHeading}>Контакты:</div>}
            </div>
            {mySite !== null && <div>
                <Link href={mySite.website}>My web site</Link>
            </div>
            }
            {mainLink !== null && <div>
                <Link href={mainLink.mainLink}>My link</Link>
            </div>

            }
            <dl className={classes.contacts}>
                {
                    (socLinks.length !== 0) &&
                    Object.keys(socLinks).map(c =>
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
                <Button className={classes.editButton} color={'primary'} variant={'contained'} onClick={props.turnOnEditMode}>Edit my profile</Button>
            }
        </div>);
}

export default withStyles(styles)(ProfileData);