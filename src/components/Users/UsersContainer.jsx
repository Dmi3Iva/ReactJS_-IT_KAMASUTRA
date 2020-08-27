import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    };

    onPageChanged =  (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i=1; i<=pagesCount && i< 8;++i)
        {
            pages.push(i);
        }

        return ( <Users
            pages={pages}
            users={this.props.users}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />);
    }
}

let mapStateToProps = (state)=>{
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage : state.UsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        follow : (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow : (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers : (users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);