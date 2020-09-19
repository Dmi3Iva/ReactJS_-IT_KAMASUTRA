import React from 'react';
import logo from './logo.svg';
import {NavLink} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = theme => {
	console.log(theme);
	return {
		root: {
			background: theme.palette.primary.main,
			marginBottom: 30,
			display: 'flex',
			padding: 15,
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		logo: {
			maxWidth: "100px",
			maxHeight: "100px"
		},
		loginName: {
			color: 'white',
			marginRight: 10
		},
		loginLink: {
			textDecoration: 'none',
			marginLeft: 10
		}
}};

function Header(props){
	const {classes} = props;
	return (
		<header className={classes.root}>
			<img className={classes.logo} src={logo} alt="Logo"/>
			<div className={classes.login}>
				{props.isAuth ?
					<div><span className={classes.loginName}>{props.login}</span> <Button variant="contained" color="secondary" onClick={props.logout}>Log out</Button></div>
					:<NavLink className={classes.loginLink} to={'/login'}>
						<Button variant="contained" color="secondary" >Login</Button>
					</NavLink>
				}
			</div>
		</header>
	);
}

export default withStyles(styles)(Header);
