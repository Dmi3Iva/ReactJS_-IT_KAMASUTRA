import React from 'react';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext>
            {
                (Store)=>{
                    let onSendMessageClick = ()=>
                    {
                        Store.dispatch(addMessageActionCreator());
                    }

                    let onChangeMessage = (text) =>{
                        Store.dispatch(updateMessageTextActionCreator(text));
                    }

                    let DialogsItems =
                        Store.getState().MessagesPage.ContactsData.map(
                            x => <DialogItem name={x.name} key={x.id} />
                        )
                    ;
                    let MessageItems =
                        Store.getState().MessagesPage.MessagesData.map(
                            x => <Message avatar={x.avatar} name={x.name} text={x.text} key={x.id} />
                        )
                    ;

                    return <Dialogs
                        DialogItems={DialogsItems} MessageItems={MessageItems}
                        newMessage={Store.getState().MessagesPage.newMessage}
                        sendMessage={onSendMessageClick}
                        changeMessage={onChangeMessage}
                    />
                }

            }
        </StoreContext>
    );
}

export default DialogsContainer;
