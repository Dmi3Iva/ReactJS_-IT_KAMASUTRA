import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'


const Dialogs = (props) => {
    let newMessageText = React.createRef();
    let sendMessage = ()=>
    {
        let text = newMessageText.current.value;
        alert(text);
    }
    return (
        <div>
            <h2 className={styles.dialogs__header}>Dialogs</h2>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    {props.MessagesData.ContactsData.map((x) => <DialogItem name={x.name} id={x.id}/>)}
                </ul>
                <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                    {props.MessagesData.MessagesData.map((x) => <Message avatar={x.avatar} name={x.name} text={x.text} id={x.id}/>)}
                    <div className="dialogs__new_message">
                        <textarea name="" id="" cols="30" rows="10" ref={newMessageText}></textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
