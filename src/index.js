import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './Homepage';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
