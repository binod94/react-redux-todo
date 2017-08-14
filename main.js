import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Fork from './Fork.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import WorkApp from './Reducer.jsx';

let store = createStore(WorkApp);

console.log("Initial data :: ",store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
  ,document.getElementById('app'))
