import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    console.log(styles);
    return (<div>
        <h2 className={styles.dialogs__header}>Dialogs</h2>
        <div className={styles.dialogs}>
            <div className={styles.dialogs__list}>
                <ul>
                    <li>
                        <NavLink to="/dialogs/1">Andrew</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/2">Oleg</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/3">Sasha</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/4">Sveta</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/5">Olga</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/6">Kristy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/7">Katerine</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs/8">Luisa</NavLink>
                    </li>
                </ul>
            </div>
            <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                <div className={styles.messages__item}>
                    <div className={styles.messages__user}>
                        <div className={styles.messages__avatar}>ava</div>
                        <div className={styles.messages__user_name}>Me</div>
                    </div>
                    <div className={styles.messages__text}>Hello, how is your mood today?</div>
                </div>
                <div className={styles.messages__item}>
                    <div className={styles.messages__user}>
                        <div className={styles.messages__avatar}>ava</div>
                        <div className={styles.messages__user_name}>Andrew</div>
                    </div>
                    <div className={styles.messages__text}>Hello, how is your mood today?</div>
                </div>
                <div className={styles.messages__item}>
                    <div className={styles.messages__user}>
                        <div className={styles.messages__avatar}>ava</div>
                        <div className={styles.messages__user_name}>Me</div>
                    </div>
                    <div className={styles.messages__text}>Hello, how is your mood today?</div>
                </div>
            </div>
        </div>
    </div>);
}

export default Dialogs;
