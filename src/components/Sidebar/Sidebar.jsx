import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles.sidebar__menu}>
				<li><NavLink className={styles.sidebar__item} activeClassName={styles.active} to="/profile">Profile</NavLink></li>
				<li><NavLink className={styles.sidebar__item} activeClassName={styles.active} to="/dialogs">Messages</NavLink></li>
				<li><NavLink className={styles.sidebar__item} activeClassName={styles.active} to="/news">News</NavLink></li>
				<li><NavLink className={styles.sidebar__item} activeClassName={styles.active} to="/music">Music</NavLink></li>
				<li><NavLink className={styles.sidebar__item} activeClassName={styles.active} to="/settings">Settings</NavLink></li>
			</ul>
		</aside>
	);
}

export default Sidebar;

