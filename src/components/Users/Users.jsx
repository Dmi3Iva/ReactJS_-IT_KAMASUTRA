import React from 'react';
import * as axios from "axios";
import defaultUserPhoto from '../assets/freepik-avatar.jpg';
import styles from './users.module.css';

class Users extends React.Component {

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

        return (<div>
            <div className="pagination">
                {pages.map( p => <div onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p && styles.pagination__current} >{p}</div> )}
            </div>
            {
                this.props.users.map(x => <div key={x.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto}
                             src={x.photos.small != null ? x.photos.small : defaultUserPhoto}
                             alt={`avatar of ${x.name}`}/>
                    </div>
                    <div>
                        {x.followed ?
                            <button onClick={() => {
                                this.props.unfollow(x.id)
                            }}>Follow</button>
                            :
                            <button onClick={() => {
                                this.props.follow(x.id)
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
}
export default Users;