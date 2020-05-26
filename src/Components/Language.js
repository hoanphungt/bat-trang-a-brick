import React from 'react';
import styles from './Language.module.css';

const Language = () => {
  return (
    <div
      className={styles.Language}
    >
      SELECT YOUR LANGUAGE
      <img src="/images/flags/uk.png" alt="English"/>
    </div>
  )
};

export default Language;