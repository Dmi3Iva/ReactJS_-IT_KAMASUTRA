import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props){
	debugger;
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={logo} alt="Logo"/>
			<div className={styles.login__block}>
				{props.isAuth ?
					<div>{props.login}</div>
					:<NavLink to={'/login'}>Login</NavLink>
				}
			</div>
		</header>
	);
}

export default Header;
