import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state)=>{
    return {
        DialogItems: state.MessagesPage.ContactsData.map( x => <DialogItem name={x.name} key={x.id} /> ),
        MessageItems: state.MessagesPage.MessagesData.map(x => <Message avatar={x.avatar} name={x.name} text={x.text} key={x.id} /> ),
        newMessage: state.MessagesPage.newMessage
    }
};

let mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage : () =>
        {
            dispatch(addMessageActionCreator());
        },
        changeMessage:(text)=> {
            dispatch(updateMessageTextActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;