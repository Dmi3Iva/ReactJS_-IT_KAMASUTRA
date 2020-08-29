import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId?userId:this.props.myId);
    }

    render() {
        if(this.props.isAuth === false) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
            />
        );
    }
}

let mapStateToProps = (state)=>({
    profile: state.ProfilePage.profile,
    isAuth: state.Auth.isAuth,
    myId: state.Auth.isAuth ? state.Auth.userId : undefined
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);