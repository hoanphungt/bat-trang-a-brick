import React from 'react';
import styles from './LogoYear.module.css';

import { FormattedMessage } from 'react-intl';

const LogoYear = () => {
  return (
    <div
      className={styles.LogoYear}
    >
      <FormattedMessage id="logo.year" defaultMessage="Since1993" />
    </div>
  )
};

export default LogoYear;