import React from 'react';
import styles from './Language.module.css';

const Language = () => {
  const preferredLocale = localStorage.getItem('preferred-language');

  return (
    <div
      className={styles.Language}
    >
      SELECT YOUR LANGUAGE
      <img
        src="/images/flags/uk.png"
        alt="English"
        onClick={() => {
          if (preferredLocale !== 'en') {
            localStorage.setItem('preferred-language', 'en');
            window.location.reload();
          };
        }}
      />
      <img
        src="/images/flags/uk.png"
        alt="Vietnam"
        onClick={() => {
          if (preferredLocale !== 'vi') {
            localStorage.setItem('preferred-language', 'vi');
            window.location.reload();
          };
        }}
      />
    </div>
  )
};

export default Language;