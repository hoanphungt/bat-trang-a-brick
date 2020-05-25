import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div
      className={styles.Header}
    >
      <div
        className={styles.LogoHolder}
      >
        <div className={styles.LogoLineLeft}/>
        <a href="/">
          <img
            className={styles.Logo}
            src="/images/header-logo-large.png"
            alt="logo"
          />
        </a>
        <div className={styles.LogoLineRight}/>
      </div>
      <div
        className={styles.TopMenu}
      >
        <ul
          className={styles.TopMenuContent}
        >
          <li><Link to='/bricks'>BRICKS</Link></li>
          <li><Link to='/machines'>MACHINES</Link></li>
          <li><Link to='/aboutus'>ABOUT US</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </div>
      <div
        className={styles.LogoYear}
      >
        Since1993
      </div>
      <div
        className={styles.Language}
      >
        SELECT YOUR LANGUAGE
        <img src="/images/flags/uk.png" alt="English"/>
      </div>
    </div>
  )
};

export default Header;