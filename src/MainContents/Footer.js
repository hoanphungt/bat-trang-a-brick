import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
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
          <span>Quick Links</span>
          <br/>
          <br/>
          <span>Home</span>
          <span>Bricks</span>
          <span>Machines</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>
        <div
          className={styles.FooterColumn}
        >
          <span>Contact</span>
          <br/>
          <br/>
          <span>Gach Co Bat Trang Ltd.</span>
          <span>45 Yen Ninh</span>
          <span>Ba Dinh district</span>
          <span>Hanoi</span>
          <span>Vietnam</span>
          <br/>
          <span>gachcobattrang@gmail.com</span>
          <br/>
          <span>Tel: +84 (0) 916082546</span>
        </div>
      </div>
      <div
        className={styles.FooterLine}
      />
      <div
        className={styles.FooterCopyright}
      >
        © Copyright Gach Co Bat Trang Ltd - by
        <a href={'https://github.com/hoanphungt'} target='blank'>HP</a>
      </div>
    </div>
  )
};

export default Footer;