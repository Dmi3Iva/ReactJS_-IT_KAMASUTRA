import React from 'react';
import {NavLink} from 'react-router-dom';
import withStyles from "@material-ui/core/styles/withStyles";
import {Box} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";
import BuildIcon from "@material-ui/icons/Build";
import SearchIcon from "@material-ui/icons/Search";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const styles = theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -5px 30px rgba(0, 0, 0, 0.5)',
        [theme.breakpoints.up('sm')]: {
            left: '50%',
            marginLeft: -300,
            maxWidth: 600,
        }
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
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
        <div className={classes.root}>
            <BottomNavigation
                showLabels
                className={classes.menu}
            >
                <BottomNavigationAction component={NavLink} to="/profile" label={"Profile"} icon={<PersonIcon/>}/>
                <BottomNavigationAction component={NavLink} to="/dialogs" label={"Dialogs"} icon={<ChatIcon/>}/>
                {/*
                TODO: add article icon
                <BottomNavigationAction component={NavLink} to="/news" label={"News"} icon={<ArticleIcon/>}/>
                */}
                <BottomNavigationAction component={NavLink} to="/search" label={"Search"} icon={<SearchIcon/>}/>
                <BottomNavigationAction component={NavLink} to="/settings" label={"Settings"} icon={<BuildIcon/>}/>
            </BottomNavigation>
        </div>
        // <aside className={classes.root}>
        //    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.menu}>
        //        <Box><NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink></Box>
        //        <Box><NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Messages</NavLink></Box>
        //        <Box><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></Box>
        //        <Box><NavLink className={classes.item} activeClassName={classes.active} to="/users">Find user</NavLink></Box>
        //        <Box><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></Box>
        //    </Box>
        // </aside>
    );
}

export default withStyles(styles)(AppBar);

