import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

function Header(){
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={logo} alt="Logo"/>
		</header>
	);
}

export default Header;
