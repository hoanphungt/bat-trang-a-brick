import React, { useState, useEffect } from 'react';
import LogoHolder from '../Components/LogoHolder';
import LogoHolderMobile from '../Components/LogoHolderMobile';
import TopMenu from '../Components/TopMenu';
import Language from '../Components/Language';
import LogoYear from '../Components/LogoYear';
import styles from './Header.module.css';

const HeaderDesktop = () => {
  return (
    <div
      className={styles.Header}
    >
      <LogoHolder />
      <TopMenu />
      <LogoYear />
      <Language />
    </div>
  );
};

const HeaderMobile = (props) => {
  return (
    <div
      className={`${styles.Header} ${styles.HeaderMobile}`}
    >
      <LogoHolderMobile />
      <div
        className={styles.MobileMenu}
        onClick={() => props.setMobileMenu(true)}
      >
        ≡
      </div>
    </div>
  );
};

const Header = (props) => {
  // Keep window width in hooks
  const [ width, setWdith] = useState(window.innerWidth);

  // Update width in useEffect
  useEffect(() => {
    const updateWidth = () => {
      setWdith(window.innerWidth);
    };
    window.addEventListener(
      'resize',
      updateWidth
    );
    return () => window.removeEventListener('resize', updateWidth);
  });

  // Render different headers based on window innerWidth (at 1000px)
  return width > 1000 ? (
    <HeaderDesktop />
  ) : (
    <HeaderMobile
      mobileMenu={props.mobileMenu}
      setMobileMenu={props.setMobileMenu}
    />
  );
};

export default Header;