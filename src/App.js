import React from 'react';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Content from './components/Content/Content.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import styles from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
	  <BrowserRouter>
		<div className={`${styles.App} ${styles.wrapper}`}>
			<Header />
			<Sidebar />
		<Route exact path='/profile' render={ () => <Content PostsData={props.AppState.profilePage.PostsData} />}/>
			<Route exact path='/messages' render={()=><Dialogs MessagesData={props.AppState.MessagesPage}/>}/>
		</div>
	  </BrowserRouter>
  );
}

export default App;
