import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId ? userId : this.props.myId);
    }

    render() {
        return (
            <Profile
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