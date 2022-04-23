import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';

ReactDOM.render(
	process.env.NODE_ENV === 'production' ? (
		<App />
	) : (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	),
	document.getElementById('root'),
);
