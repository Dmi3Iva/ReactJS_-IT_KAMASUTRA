import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import defaultUserPhoto from '../assets/freepik-avatar.jpg';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }

    return (<div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(x => <div key={x.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto}
                             src={x.photos.small != null ? x.photos.small : defaultUserPhoto}
                             alt={`image of ${x.name}`}/>
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
    </div>);
}

export default Users;