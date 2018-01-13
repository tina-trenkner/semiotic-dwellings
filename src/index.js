import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Linechart from './Linechart'
import Barchart from './Barchart'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Barchart />, document.getElementById('chart'));
registerServiceWorker();
