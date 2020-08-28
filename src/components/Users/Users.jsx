import React from 'react';
import styles from "./users.module.css";
import defaultUserPhoto from "../assets/freepik-avatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                <button onClick={() => {
                                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + x.id,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "53d3dc64-a25c-445e-81a3-2b2dcf8f14a9"
                                            }
                                        })

                                        .then(response => {
                                            if (response.data.resultCode == 0)
                                                props.unfollow(x.id)
                                        })
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + x.id, null,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "53d3dc64-a25c-445e-81a3-2b2dcf8f14a9"
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode == 0)
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