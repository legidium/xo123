import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.cordova) {
	document.addEventListener('deviceready', startApp, false);
} else {
	startApp();
}

function startApp() {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
}
