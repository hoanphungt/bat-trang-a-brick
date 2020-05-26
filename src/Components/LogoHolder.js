import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoHolder.module.css';

const LogoHolder = () => {
  return (
    <div
      className={styles.LogoHolder}
    >
      <div className={styles.LogoLineLeft}/>
      <Link to='/'>
        <img
          className={styles.Logo}
          src="/images/header-logo-large.png"
          alt="logo"
        />
      </Link>
      <div className={styles.LogoLineRight}/>
    </div>
  )
};

export default LogoHolder;