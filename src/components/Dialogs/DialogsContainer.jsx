import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {changeMessage, sendMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        DialogItems: state.MessagesPage.ContactsData.map(x => <DialogItem name={x.name} key={x.id}/>),
        MessageItems: state.MessagesPage.MessagesData.map(x => <Message avatar={x.avatar} name={x.name} text={x.text}
                                                                        key={x.id}/>),
        newMessage: state.MessagesPage.newMessage
    }
};

let AuthRedirectComponent = withAuthRedirectComponent(Dialogs);

const DialogsContainer = connect(mapStateToProps, {sendMessage, changeMessage})(AuthRedirectComponent);


export default DialogsContainer;