import React from 'react';
import styles from './Message.module.css';

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

export default Message;
