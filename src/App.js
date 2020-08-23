import React from 'react';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import styles from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
	  <BrowserRouter>
		<div className={`${styles.App} ${styles.wrapper}`}>
			<Header />
			<Sidebar />
			<div className={styles.content}>
				<Route exact path='/profile' render={ () => <Profile
					PostsData={props.AppState.ProfilePage}
					addPost={props.addPost}
					updateNewPostText={props.updateNewPostText}
				/>}/>
				<Route exact path='/messages' render={ () => <Dialogs
					MessagesData={props.AppState.MessagesPage}
				/>}/>
			</div>
		</div>
	  </BrowserRouter>
  );
}

export default App;
