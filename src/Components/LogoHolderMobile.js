import React from 'react';
import { Link } from 'react-router-dom';
import LogoYear from './LogoYear';
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
      <div className={styles.LogoLineRightMobile}>
        <LogoYear />
      </div>
    </>
  )
};

export default LogoHolderMobile;