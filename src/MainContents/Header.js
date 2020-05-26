import React from 'react';
import LogoHolder from '../Components/LogoHolder';
import TopMenu from '../Components/TopMenu';
import Language from '../Components/Language';
import LogoYear from '../Components/LogoYear';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div
      className={styles.Header}
    >
      <LogoHolder />
      <TopMenu />
      <LogoYear />
      <Language />
    </div>
  )
};

export default Header;