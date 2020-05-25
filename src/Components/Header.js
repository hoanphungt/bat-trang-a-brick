import React from 'react';
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
        <a href="/en">
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
          <li>BRICKS</li>
          <li>MACHINES</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;