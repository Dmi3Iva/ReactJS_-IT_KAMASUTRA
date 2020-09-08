import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selector";
import {getIsAuth} from "../../redux/auth-selector";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize);
    };

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>;

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount && i < 8; ++i) {
            pages.push(i);
        }

        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    pages={pages}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                /></>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow,
        toggleIsFetching, toggleFollowingInProgress,
        requestUsers
    }
)(UsersContainer);