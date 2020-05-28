import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const preferredLocale = localStorage.getItem('preferred-language');

  return (
    <div
      className={styles.Footer}
    >
      <div
        className={styles.FooterContent}
      >
        <div
          className={styles.FooterColumn}
        >
          <span><FormattedMessage id="footer.quickLinks" defaultMessage="Quick links" /></span>
          <br/>
          <br/>
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
        <div
          className={styles.FooterColumn}
        >
          <span><FormattedMessage id="topMenu.contact" defaultMessage="Contact" /></span>
          <br/>
          <br/>
          <span><FormattedMessage id="footer.companyName" defaultMessage="Bat Trang Ancient Bricks Ltd." /></span>
          <span><FormattedMessage id="footer.add1" defaultMessage="45 Yen Ninh" /></span>
          <span><FormattedMessage id="footer.add2" defaultMessage="Ba Dinh district" /></span>
          <span><FormattedMessage id="footer.add3" defaultMessage="Hanoi" /></span>
          <span><FormattedMessage id="footer.add4" defaultMessage="Vietnam" /></span>
          <br/>
          <a href="mailto:gachcobattrang@gmail.com" target="blank">
            gachcobattrang@gmail.com
          </a>
          <br/>
          <a href="tel:+84916082546">
            Tel: +84 (0) 916082546
          </a>
        </div>
        <div
          className={styles.FooterColumn}
        >
          <span><FormattedMessage id="footer.selectLanguage" defaultMessage="Select your language" /></span>
          <br/>
          <br/>
          <span
            className={styles.Language}
            onClick={() => {
              if (preferredLocale !== 'en') {
                localStorage.setItem('preferred-language', 'en');
                window.location.reload();
              };
            }}
          >
            <FormattedMessage id="footer.english" defaultMessage="English" />
          </span>
          <span
            className={styles.Language}
            onClick={() => {
              if (preferredLocale !== 'vi') {
                localStorage.setItem('preferred-language', 'vi');
                window.location.reload();
              };
            }}
          >
            <FormattedMessage id="footer.vietnamese" defaultMessage="Vietnamese" />
          </span>
        </div>
      </div>
      <div
        className={styles.FooterLine}
      />
      <div
        className={styles.FooterCopyright}
      >
        © <FormattedMessage id="footer.copyright" defaultMessage="Copyright Gach Co Bat Trang Ltd - by" />
        <a href={'https://github.com/hoanphungt'} target='blank'>HP</a>
      </div>
    </div>
  )
};

export default Footer;