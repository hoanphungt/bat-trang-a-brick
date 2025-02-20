import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import App from "./App";
import "./index.css";

import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import english from "./translations/en.json";
import vietnamese from "./translations/vi.json";

// Set app's language in Vietnamese by default or user's selected preference
// currently the app only supports English and Vietnamese
let preferredLocale = localStorage.getItem("preferred-language");
if (!preferredLocale) {
  preferredLocale = "vi"; // default language Vietnamese
}

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: preferredLocale,
    messages: preferredLocale === "vi" ? vietnamese : english,
  },
  cache,
);

ReactDOM.render(
  <RawIntlProvider value={intl}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </RawIntlProvider>,
  document.getElementById("root"),
);
