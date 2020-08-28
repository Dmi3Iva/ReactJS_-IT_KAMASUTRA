import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../assets/freepik-avatar.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    return (
        <div>
            <div className="pagination">
                {props.pages.map(p => <div onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && styles.pagination__current}>{p}</div>)}
            </div>
            {
                props.users.map(x => <div key={x.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${x.id}`}>
                                <img className={styles.userPhoto}
                                     src={x.photos.small != null ? x.photos.small : defaultUserPhoto}
                                     alt={`avatar of ${x.name}`}/>
                            </NavLink>
                        </div>
                        <div>
                            {x.followed ?
                                <button disabled={props.followingInProgress.some(id => id === x.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, x.id);
                                    usersAPI.unfollowUser(x.id)
                                        .then(data => {
                                            if (data.resultCode === 0)
                                                props.unfollow(x.id)
                                        })
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === x.id)} onClick={() => {
                                    props.toggleFollowingInProgress(true, x.id);
                                   usersAPI.followUser(x.id)
                                        .then(data => {
                                            if (data.resultCode === 0)
                                                props.follow(x.id)
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{x.name}</div><div>{x.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;