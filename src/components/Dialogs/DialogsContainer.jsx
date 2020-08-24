import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let onSendMessageClick = ()=>
    {
        props.Store.dispatch(addMessageActionCreator());
    }

    let onChangeMessage = (text) =>{
        props.Store.dispatch(updateMessageTextActionCreator(text));
    }

    let DialogsItems =
        props.Store.getState().MessagesPage.ContactsData.map(
            x => <DialogItem name={x.name} key={x.id} />
        )
    ;
    let MessageItems =
        props.Store.getState().MessagesPage.MessagesData.map(
            x => <Message avatar={x.avatar} name={x.name} text={x.text} key={x.id} />
        )
    ;


    return (
        <Dialogs
            DialogItems={DialogsItems} MessageItems={MessageItems}
            newMessage={props.Store.getState().MessagesPage.newMessage}
            sendMessage={onSendMessageClick}
            changeMessage={onChangeMessage}
        />
    );
}

export default DialogsContainer;
