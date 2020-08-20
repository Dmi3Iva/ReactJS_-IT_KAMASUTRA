import React from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles.sidebar__menu}>
				<li><a className={styles.sidebar__item} href="#">Profile</a></li>
				<li><a className={styles.sidebar__item} href="#">Messages</a></li>
				<li><a className={styles.sidebar__item} href="#">News</a></li>
				<li><a className={styles.sidebar__item} href="#">Music</a></li>
				<li><a className={styles.sidebar__item} href="#">Settings</a></li>
			</ul>
		</aside>
	);
}

export default Sidebar;

