import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <ul className={`${styles.LogoLine} ${styles.LogoLine1}`}>
        <li className={`${styles.Brick} ${styles.RedBrick}`}/>
        <li className={`${styles.Brick} ${styles.RedBrick}`}/>
        <li className={`${styles.Brick} ${styles.WhiteBrick}`}/>
        <li className={`${styles.Brick} ${styles.WhiteHalfBrick}`}/>
      </ul>
      <ul className={`${styles.LogoLine} ${styles.LogoLine2}`}>
        <li className={`${styles.Brick} ${styles.WhiteHalfBrick}`}/>
        <li className={`${styles.Brick} ${styles.RedBrick}`}/>
        <li className={`${styles.Brick} ${styles.RedBrick} ${styles.TextBrick}`}>
          A
        </li>
        <li className={`${styles.Brick} ${styles.Text}`}>
          BRICK
        </li>
      </ul>
    </div>
  )
}

export default Logo;