import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Linechart from './Linechart'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Linechart />, document.getElementById('chart'));
registerServiceWorker();
