import React from 'react';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

const Contact = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>Contact</div>
          <div
            className={brickStyles.Text}
          >
            <span>Bat Trang Ancient Bricks Ltd.</span>
            <br/>
            <span>45 Yen Ninh</span>
            <br/>
            <span>Ba Dinh district</span>
            <br/>
            <span>Hanoi</span>
            <br/>
            <span>Vietnam</span>
            <br/>
            <br/>
            <span>Phone: +84 (0)916082546</span>
            <br/>
            <span>Email: gachcobattrang@gmail.com</span>
            <br/>
            <br/>
            <span>Opening hours:</span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Contact;