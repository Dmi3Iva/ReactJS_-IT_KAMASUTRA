import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from "./User";

const Users = ({currentPage, pages, onPageChanged, followingInProgress, follow, unfollow, users}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                pages={pages}
                onPageChanged={onPageChanged}

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