import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import App from './App';
import './index.css';

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import english from './translations/en.json';
import vietnamese from './translations/vi.json';

const Intl = () => {
  const [lang, setLang] = useState('vi');
  console.log('language', lang)

  const cache = createIntlCache();
  const intl = createIntl({
    locale: lang,
    messages: lang === 'vi' ? vietnamese : english
  }, cache);

  useEffect(() => {}, [lang])

  return (
    <RawIntlProvider
      value={intl}
    >
      <Router basename={`/${lang}`}>
        <ScrollToTop />
        <App lang={lang} setLang={setLang} />
      </Router>
    </RawIntlProvider>
  )
}

ReactDOM.render(
  <Intl />,
  document.getElementById('root')
);