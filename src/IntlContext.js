import React, { createContext, useState } from 'react';

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import english from './translations/en.json';
import vietnamese from './translations/vi.json';

const LanguageContext = createContext();

const IntlProviderWrapper = (props) => {
  const [language, setLanguage] = useState({ locale: 'vi', messages: vietnamese });
  
  const preferredLanguage = {
    locale: language.locale,
    switchToEnglish: () => setLanguage({ locale: 'en', messages: english }),
    switchToVietnamese: () => setLanguage({ locale: 'vi', messages: vietnamese })
  }

  const cache = createIntlCache();
  const intl = createIntl({
    locale: language.locale,
    messages: language.messages
  }, cache);

  return (
    <LanguageContext.Provider value={preferredLanguage}>
      <RawIntlProvider
        key={language.locale}
        value={intl}
      >
        {props.children}
      </RawIntlProvider>
    </LanguageContext.Provider>
  )
};

export { IntlProviderWrapper, LanguageContext as IntlContext };