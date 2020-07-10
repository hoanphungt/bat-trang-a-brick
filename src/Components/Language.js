import React from 'react';
import styles from './Language.module.css';

import { FormattedMessage } from 'react-intl';

const Language = (props) => {
  return (
    <div
      className={styles.Language}
    >
      <FormattedMessage id="footer.selectLanguage" defaultMessage="Select your language" />
      <img
        src="/images/flags/uk.png"
        alt="English"
        onClick={() => props.setLang('en')}
      />
      <img
        src="/images/flags/vn.png"
        alt="Vietnam"
        onClick={() => props.setLang('vi')}
      />
    </div>
  )
};

export default Language;