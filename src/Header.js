import React from 'react';
import logo from './logo.svg';

function Header(){
	return (
		<header className="header">
			<img className="header__logo" src={logo}/>
		</header>
	);
};

export default Header;
