import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    return (
        <li>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
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
    let ContactsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Oleg"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Kristy"}
    ];

    let MessagesData = [
        {id: 1, avatar: "ava", name: "Andrew", text: "How is your day?"},
        {id: 2, avatar: "ava", name: "Me", text: "It's ok, thank you for asking"},
        {id: 3, avatar: "ava", name: "Andrew", text: "You're welcome!"}
    ];

    return (
        <div>
            <h2 className={styles.dialogs__header}>Dialogs</h2>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    {ContactsData.map((x) => <DialogItem name={x.name} id={x.id}/>)}
                </ul>
                <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                    {MessagesData.map((x) => <Message avatar={x.avatar} name={x.name} text={x.text} id={x.id}/>)}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
