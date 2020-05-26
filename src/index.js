import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import App from './App';
import './index.css';

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import english from './translations/en.json';
import vietnamese from './translations/vi.json';

// Get current user's locale
const getCurrentLocale = () => {
  if (navigator.languages) {
    return navigator.languages[0];
  } else {
    return navigator.language;
  };
};
const currentLocale = getCurrentLocale();

// Set app's language by either current user's locale or their selected language preference
// currently the app only supports English and Vietnamese with English as default language
let preferredLocale = localStorage.getItem('preferred-language');
if (!preferredLocale) {
  preferredLocale = (
    currentLocale === 'vi' ? 'vi' : 'en'
  );
};

const cache = createIntlCache();
const intl = createIntl({
  locale: preferredLocale,
  messages: preferredLocale === 'vi' ? vietnamese : english
}, cache);

ReactDOM.render(
  <RawIntlProvider
    value={intl}
  >
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </RawIntlProvider>,
  document.getElementById('root')
);