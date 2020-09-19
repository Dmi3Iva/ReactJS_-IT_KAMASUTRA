import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppInit from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div'  );
  ReactDOM.render(<AppInit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
