import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let PostsData =[
    {id:1, message:"There's my first post!", likesCount: 10},
    {id:2, message:"Welcome to my page!", likesCount: 20}
];

let ContactsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Oleg"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Olga"},
    {id: 6, name: "Kristy"}
];

let MessagesData = [
    {id: 1, avatar: "ava", name: "Andrew", text: "How is your day?"},
    {id: 2, avatar: "ava", name: "Me", text: "It's ok, thank you for asking"},
    {id: 3, avatar: "ava", name: "Andrew", text: "You're welcome!"}
];


ReactDOM.render(
  <React.StrictMode>
    <App PostsData={PostsData} ContactsData={ContactsData} MessagesData={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
