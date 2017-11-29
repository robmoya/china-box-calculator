import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Calculator from './components/Calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
