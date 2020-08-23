import React from 'react';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import styles from './App.module.css';
import {Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
	  <div>
		<div className={`${styles.App} ${styles.wrapper}`}>
			<Header />
			<Sidebar />
			<div className={styles.content}>
				<Route exact path='/profile' render={ () => <Profile
					PostsData={props.AppState.ProfilePage}
                    dispatch={props.dispatch}
				/>}/>
				<Route exact path='/messages' render={ () => <Dialogs
					MessagesData={props.AppState.MessagesPage}
					dispatch={props.dispatch}
				/>}/>
			</div>
		</div>
	  </div>
  );
}

export default App;
