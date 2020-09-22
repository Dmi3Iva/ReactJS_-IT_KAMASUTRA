import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    getUserProfileById(userId)
    {
        this.props.getUserProfile(userId ? userId : this.props.myId);
        this.props.getStatus(userId ? userId : this.props.myId);
    }

    componentDidMount() {
        this.getUserProfileById(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userId !== this.props.match.params.userId)
            this.getUserProfileById(this.props.match.params.userId);
    }

    render() {
        if(!this.props.myId  && !this.props.match.params.userId)
            return <Redirect to={'/login'}/>;

        return (
            <Profile
                isOwner={!!this.props.myId}
                {...this.props}
            />
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    myId: state.Auth.isAuth ? state.Auth.userId : undefined
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus}),
    withRouter
)(ProfileContainer);