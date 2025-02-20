import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./TopMenu.module.css";

import { FormattedMessage } from "react-intl";

const TopMenu = () => {
  return (
    <div className={styles.TopMenu}>
      <div className={styles.TopMenuContent}>
        <NavLink to="/bricks" activeClassName={styles.ActiveNav}>
          <FormattedMessage id="topMenu.bricks" defaultMessage="Bricks" />
        </NavLink>
        <NavLink to="/machines" activeClassName={styles.ActiveNav}>
          <FormattedMessage id="topMenu.machines" defaultMessage="Machines" />
        </NavLink>
        <NavLink to="/aboutus" activeClassName={styles.ActiveNav}>
          <FormattedMessage id="topMenu.aboutUs" defaultMessage="About us" />
        </NavLink>
        <NavLink to="/contact" activeClassName={styles.ActiveNav}>
          <FormattedMessage id="topMenu.contact" defaultMessage="Contact" />
        </NavLink>
      </div>
    </div>
  );
};

export default TopMenu;
