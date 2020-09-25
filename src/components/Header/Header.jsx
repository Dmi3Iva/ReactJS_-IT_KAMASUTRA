import React from 'react';
import Logo from '@material-ui/icons/Polymer'
import {NavLink} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const styles = theme => {
    return {
        root: {
            background: theme.palette.primary.main,
            marginBottom: 30,
            display: 'flex',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            color: '#fff',
            width: '1.6em',
            height: '1.6em'
        },
        loginName: {
            color: 'white',
            marginRight: 10,
            textDecoration: 'none',
            transition: '.3s',
            '&:hover': {
                color: '#c9f0ff'
            }
        },
        loginLink: {
            textDecoration: 'none',
            marginLeft: 10
        }
    }
};

function Header(props) {
    const {classes} = props;
    return (
        <header className={classes.root}>
            <Logo color='secondary' className={classes.logo}/>
            {/*<img className={classes.logo} src={Logo} alt="Logo"/>*/}
            <div className={classes.login}>
                {props.isAuth ?
                    <div><NavLink to={'/profile'} className={classes.loginName}>{props.login}</NavLink> <Button
                        variant="contained" color="secondary" onClick={props.logout}>Log out</Button></div>
                    : <NavLink className={classes.loginLink} to={'/login'}>
                        <Button variant="contained" color="secondary">Login</Button>
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default withStyles(styles)(Header);
