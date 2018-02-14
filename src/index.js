import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles/index.css';
import './styles/spinner.css';
import './styles/menu.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
