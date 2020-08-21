import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    return (
        <li>
            <NavLink to={props.url}>{props.name}</NavLink>
        </li>
    );
}

const Message = props => {
    return (
        <div className={styles.messages__item}>
            <div className={styles.messages__user}>
                <div className={styles.messages__avatar}>{props.avatar}</div>
                <div className={styles.messages__user_name}>{props.name}</div>
            </div>
            <div className={styles.messages__text}>{props.text}</div>
        </div>
    );
}

const Dialogs = () => {
    console.log(styles);
    return (<div>
        <h2 className={styles.dialogs__header}>Dialogs</h2>
        <div className={styles.dialogs}>
            <ul className={styles.dialogs__list}>
                <DialogItem name="Andrew" url="/dialogs/1"/>
                <DialogItem name="Oleg" url="/dialogs/2"/>
                <DialogItem name="Sasha" url="/dialogs/3"/>
                <DialogItem name="Sveta" url="/dialogs/4"/>
                <DialogItem name="Olga" url="/dialogs/5"/>
                <DialogItem name="Kristy" url="/dialogs/6"/>
                <DialogItem name="Katerine" url="/dialogs/7"/>
                <DialogItem name="Luisa" url="/dialogs/8"/>
            </ul>
            <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                <Message avatar={"ava"} name={"Andrew"} text={"How is your day today?"} />
                <Message avatar={"ava"} name={"Me"} text={"Okay. Thank you for asking"} />
                <Message avatar={"ava"} name={"Andrew"} text={"You're welcome"} />
            </div>
        </div>
    </div>);
}

export default Dialogs;
