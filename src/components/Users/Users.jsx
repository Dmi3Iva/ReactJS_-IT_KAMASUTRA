import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from "./User";

const Users = ({
                   currentPage, pageSize, totalUsersCount,
                   onPageChanged, followingInProgress, follow, unfollow,
                   users

}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                itemsPaginatorCount={10}
            />
            {
                users.map(x =>
                    <User
                        {...x}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                    />
                )
            }
        </div>
    );
}

export default Users;