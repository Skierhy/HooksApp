import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import './index.css';
// import './08-useReducer/intro-reducer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<HooksApp />
		</BrowserRouter>
	</React.StrictMode>
);
