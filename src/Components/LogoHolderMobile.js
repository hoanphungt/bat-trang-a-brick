import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LogoHolder.module.css';

const LogoHolderMobile = () => {
  return (
    <>
      <div className={styles.LogoLineLeftMobile}/>
      <Link to='/' className={styles.LogoMobile}>
        <img
          src="/images/logo.jpg"
          alt="logo"
        />
      </Link>
      <div className={styles.LogoLineRightMobile}/>
    </>
  )
};

export default LogoHolderMobile;