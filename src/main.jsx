import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';
import ScrollToTop from './assets/Scroll.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
    <Switch>

    </Switch>
  </BrowserRouter>,
)
