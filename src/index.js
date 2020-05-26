import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import './index.css';

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import en from './translations/en.json';
import vi from './translations/vi.json';

const preferredLocale = localStorage.getItem('preferred-language') || 'en';

const cache = createIntlCache();
const intl = createIntl({
  locale: preferredLocale,
  messages: preferredLocale === 'vi' ? vi : en
}, cache);

ReactDOM.render(
  <RawIntlProvider
    value={intl}
  >
    <Router>
      <App />
    </Router>
  </RawIntlProvider>,
  document.getElementById('root')
);