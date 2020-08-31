import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {sendMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        DialogItems: state.MessagesPage.ContactsData.map(x => <DialogItem name={x.name} key={x.id}/>),
        MessageItems: state.MessagesPage.MessagesData.map(x => <Message avatar={x.avatar} name={x.name} text={x.text}
                                                                        key={x.id}/>),
        newMessage: state.MessagesPage.newMessage
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirectComponent
)(Dialogs);