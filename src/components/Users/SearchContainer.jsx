import {connect} from "react-redux";
import {follow, requestUsers, toggleFollowingInProgress, toggleIsFetching, unfollow,} from "../../redux/users-reducer";
import React from "react";
import Search from "./Search";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selector";
import {getIsAuth} from "../../redux/auth-selector";

class SearchContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.requestUsers(currentPage, this.props.pageSize);
    };

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Search
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
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
)(SearchContainer);