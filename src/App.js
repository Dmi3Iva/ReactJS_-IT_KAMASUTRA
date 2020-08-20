import React from 'react';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Content from './components/Content/Content.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import styles from './App.module.css';

function App() {
  return (
    <div className={`${styles.App} ${styles.wrapper}`}>
		<Header />
		<Sidebar />
		{/*<Content />*/}
		<Dialogs className={styles.content}/>
	</div>
  );
}

export default App;
