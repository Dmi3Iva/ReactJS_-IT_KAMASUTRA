import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../assets/freepik-avatar.jpg";
import {NavLink} from "react-router-dom";

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
                            <NavLink to={`/profile/${x.id}`} >
                                <img className={styles.userPhoto}
                                     src={x.photos.small != null ? x.photos.small : defaultUserPhoto}
                                     alt={`avatar of ${x.name}`}/>
                            </NavLink>
                        </div>
                        <div>
                            {x.followed ?
                                <button onClick={() => {
                                    props.unfollow(x.id)
                                }}>Follow</button>
                                :
                                <button onClick={() => {
                                    props.follow(x.id)
                                }}>Unfollow</button>
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