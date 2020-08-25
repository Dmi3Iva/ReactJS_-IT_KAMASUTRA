import React from 'react';
import styles from './users.module.css';

const Users = (props)=>{

    if(props.users.length === 0) {
        let url = 'https://i.pinimg.com/originals/31/75/48/31754822b98a017c6fa76fdeadc994fa.jpg';
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: url,
                    followed: false,
                    fullName: 'Dmitriy',
                    status: 'i am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: url,
                    followed: true,
                    fullName: 'Sasha',
                    status: 'i am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: url,
                    followed: false,
                    fullName: 'Dart Veider',
                    status: 'never go outside',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    photoUrl: url,
                    followed: true,
                    fullName: 'Han Sollo',
                    status: 'kkkk',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 5,
                    photoUrl: url,
                    followed: false,
                    fullName: 'Leya',
                    status: 'Henlo',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 6,
                    photoUrl: url,
                    followed: true,
                    fullName: 'Obi Wan knob',
                    status: 'Hello',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
            ]
        );
    }

    return (<div>
        {
            props.users.map(x=> <div key={x.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} src={x.photoUrl} alt={x.fullName} />
                    </div>
                    <div>
                        {x.followed ?
                            <button onClick={()=>{props.unfollow(x.id)}}>Follow</button>
                            :
                            <button onClick={()=>{props.follow(x.id)}}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{x.fullName}</div><div>{x.status}</div>
                    </span>
                    <span>
                        <div>{x.location.city}</div>
                        <div>{x.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>);
}

export default Users;