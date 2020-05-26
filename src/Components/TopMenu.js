import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopMenu.module.css';

const TopMenu = () => {
  return (
    <div
      className={styles.TopMenu}
    >
      <div
        className={styles.TopMenuContent}
      >
        <Link to='/bricks'>BRICKS</Link>
        <Link to='/machines'>MACHINES</Link>
        <Link to='/aboutus'>ABOUT US</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </div>
  )
};

export default TopMenu;