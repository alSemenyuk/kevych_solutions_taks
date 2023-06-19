import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
