import React from 'react';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {
    let newMessageText = React.createRef();

    let sendMessage = ()=>
    {
        props.sendMessage();
    }

    let changeMessage = () =>{
        let text = newMessageText.current.value;
        props.changeMessage(text);
    }

    return (
        <div>
            <h2 className={styles.dialogs__header}>Dialogs</h2>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__list}>
                    {props.DialogItems}
                </ul>
                <div className={`${styles.dialogs__messages} ${styles.messages}`}>
                    {props.MessageItems}
                    <div className="dialogs__new_message">
                        <textarea ref={newMessageText} value={props.newMessage} onChange={changeMessage} />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
