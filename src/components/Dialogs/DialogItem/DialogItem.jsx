import React from 'react';
//import styles from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    return (
        <li>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li>
    );
}

export default DialogItem;
