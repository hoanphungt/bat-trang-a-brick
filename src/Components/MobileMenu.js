import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

import { FormattedMessage } from 'react-intl';

const MobileMenu = (props) => {
  return (
    <div
      className={`
        ${styles.Menu}
        ${props.mobileMenu ? styles.VisibleMenu : ''}
      `}
    >
      <div
        className={styles.MenuHeader}
      >
        <button
          className={styles.CloseButton}
          onClick={() => props.setMobileMenu(false)}
        >
          x
        </button>
      </div>
      <div
        className={styles.MenuNav}
      >
        <Link to='/'>
          <FormattedMessage id="topMenu.home" defaultMessage="Home" />
        </Link>
        <Link to='/bricks'>
          <FormattedMessage id="topMenu.bricks" defaultMessage="Bricks" />
        </Link>
        <Link to='/machines'>          
          <FormattedMessage id="topMenu.machines" defaultMessage="Machines" />
        </Link>
        <Link to='/aboutus'>        
          <FormattedMessage id="topMenu.aboutUs" defaultMessage="About us" />
        </Link>
        <Link to='/contact'>        
          <FormattedMessage id="topMenu.contact" defaultMessage="Contact" />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;