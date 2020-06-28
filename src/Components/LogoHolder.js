import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoHolder.module.css';

const LogoHolder = () => {
  return (
    <div
      className={styles.LogoHolder}
    >
      <div className={styles.LogoLineLeft}/>
      <Link to='/' className={styles.Logo}>
        <img
          src="/images/logo.jpg"
          alt="logo"
        />
      </Link>
      <div className={styles.LogoLineRight}/>
    </div>
  )
};

export default LogoHolder;