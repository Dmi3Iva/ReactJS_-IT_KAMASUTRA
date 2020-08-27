import React from 'react';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
	  <div>
		<div className={`${styles.App} ${styles.wrapper}`}>
			<Header />
			<Sidebar />
			<div className={styles.content}>
				<Route path='/profile' render={ () => <ProfileContainer/>}/>
				<Route exact path='/dialogs' render={ () => <DialogsContainer/>}/>
				<Route exact path='/users' render={ () => <UsersContainer/>}/>
			</div>
		</div>
	  </div>
  );
}

export default App;
