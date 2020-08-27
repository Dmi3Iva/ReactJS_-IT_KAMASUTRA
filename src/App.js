import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
	  <div>
		<div className={`${styles.App} ${styles.wrapper}`}>
			<HeaderContainer />
			<Sidebar />
			<div className={styles.content}>

				<Route path='/profile/:userId?'
					   render={ () => <ProfileContainer/>}/>

				<Route exact path='/dialogs'
					   render={ () => <DialogsContainer/>}/>

				<Route exact path='/users'
					   render={ () => <UsersContainer/>}/>

			</div>
		</div>
	  </div>
  );
}

export default App;
