import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopMenu.module.css';

import { FormattedMessage } from 'react-intl';

const TopMenu = () => {
  return (
    <div
      className={styles.TopMenu}
    >
      <div
        className={styles.TopMenuContent}
      >
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
  )
};

export default TopMenu;