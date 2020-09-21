import React from 'react';
import {NavLink} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import {Box} from "@material-ui/core";

const styles = theme => ({
	root: {
		position: 'fixed',
		bottom: 0,
		backgroundColor: theme.palette.primary.main,
		padding: 20,
		width: '100%',
		boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.5)',
		[theme.breakpoints.up('sm')]: {
			left: '50%',
			marginLeft: -300,
			maxWidth: 600,
		}
	},
	menu: {
		listStyle: 'none',
		padding: 0,
		margin: 0,
		display: 'flex'
	},
	item: {
		color: "#fff",
		textDecoration: "none",
		transition: "color .3s",
		'&:hover': {
			color: 'tomato',
		}
	},
	active: {
		color: "black"
	}
});

function AppBar(props) {
	const {classes} = props;

	return (
		<aside className={classes.root}>
			<Box display="flex" justifyContent="space-between" alignItems="center" className={classes.menu}>
				<Box><NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink></Box>
				<Box><NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink></Box>
				<Box><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></Box>
				<Box><NavLink className={classes.item} activeClassName={classes.active} to="/users">Find user</NavLink></Box>
				<Box><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></Box>
			</Box>
		</aside>
	);
}

export default withStyles(styles)(AppBar);

