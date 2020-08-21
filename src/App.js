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
			<Route path='/profile' component={Content}/>
			<Route path='/messages' component={Dialogs}/>
		</div>
	  </BrowserRouter>
  );
}

export default App;
