import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <div className="App wrapper">
		<Header />
		<Sidebar />
		<Content />
	</div>
  );
}

export default App;
