import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";

import { FormattedMessage } from "react-intl";

const MobileMenu = (props) => {
  const preferredLocale = localStorage.getItem("preferred-language");

  const closeMobileMenu = () => {
    props.setMobileMenu(false);
  };

  return (
    <div
      className={`
        ${styles.Menu}
        ${props.mobileMenu ? styles.VisibleMenu : ""}
      `}
    >
      <div className={styles.MenuHeader} onClick={closeMobileMenu}>
        <div className={styles.MenuClose}>X</div>
      </div>
      <div className={styles.MenuNav}>
        <Link className={styles.MenuLink} to="/" onClick={closeMobileMenu}>
          <FormattedMessage id="topMenu.home" defaultMessage="Home" />
        </Link>
        <Link
          className={styles.MenuLink}
          to="/bricks"
          onClick={closeMobileMenu}
        >
          <FormattedMessage id="topMenu.bricks" defaultMessage="Bricks" />
        </Link>
        <Link
          className={styles.MenuLink}
          to="/machines"
          onClick={closeMobileMenu}
        >
          <FormattedMessage id="topMenu.machines" defaultMessage="Machines" />
        </Link>
        <Link
          className={styles.MenuLink}
          to="/aboutus"
          onClick={closeMobileMenu}
        >
          <FormattedMessage id="topMenu.aboutUs" defaultMessage="About us" />
        </Link>
        <Link
          className={styles.MenuLink}
          to="/contact"
          onClick={closeMobileMenu}
        >
          <FormattedMessage id="topMenu.contact" defaultMessage="Contact" />
        </Link>
        <span
          className={styles.MenuLink}
          onClick={() => {
            closeMobileMenu();
            if (preferredLocale !== "en") {
              localStorage.setItem("preferred-language", "en");
              window.location.reload();
            }
          }}
        >
          <FormattedMessage id="footer.english" defaultMessage="EN" />
        </span>
        <span
          className={styles.MenuLink}
          onClick={() => {
            closeMobileMenu();
            if (preferredLocale !== "vi") {
              localStorage.setItem("preferred-language", "vi");
              window.location.reload();
            }
          }}
        >
          <FormattedMessage id="footer.vietnamese" defaultMessage="VN" />
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
