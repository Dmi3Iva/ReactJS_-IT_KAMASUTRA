import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js'
import Message from './Message/Message.js'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let newMessageText = React.createRef();
    let sendMessage = ()=>
    {
        props.dispatch(addMessageActionCreator());
    }

    let changeMessage = () =>{
        let text = newMessageText.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div>
            <h2 className={styles.dialogs__header}>Dialogs</h2>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    {props.MessagesData.ContactsData.map((x) => <DialogItem name={x.name} key={x.id}/>)}
                </ul>
                <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                    {props.MessagesData.MessagesData.map((x) => <Message avatar={x.avatar} name={x.name} text={x.text} key={x.id}/>)}
                    <div className="dialogs__new_message">
                        <textarea ref={newMessageText} value={props.MessagesData.newMessage} onChange={changeMessage} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
