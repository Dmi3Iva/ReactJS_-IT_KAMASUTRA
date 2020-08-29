import {connect} from "react-redux";
import {
    follow,
    getUsers,
    toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    };

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'} />;

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
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress,
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow,
        toggleIsFetching, toggleFollowingInProgress,
        getUsers
    }
)(UsersContainer);