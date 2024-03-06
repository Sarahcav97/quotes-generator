import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import WordProvider from './context/WordContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<WordProvider>
			<App />
		</WordProvider>
	</React.StrictMode>
);
