import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from ‘react-router-dom’;

// plugins
require('./plugins/highlight/atom-one-dark.css');
// styles
require('./styles.css');

render(<Router basename={process.env.PUBLIC_URL}><App/></Router>, document.getElementById('root'));
