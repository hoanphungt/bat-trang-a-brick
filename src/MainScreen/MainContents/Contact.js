import React from 'react';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Contact = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>    
            <FormattedMessage id="topMenu.contact" defaultMessage="Contact" />
          </div>
          <div
            className={brickStyles.Text}
          >
            <span><FormattedMessage id="footer.companyName" defaultMessage="Bat Trang Ancient Bricks Ltd." /></span>
            <br/>
            <span><FormattedMessage id="footer.add1" defaultMessage="45 Yen Ninh" /></span>
            <br/>
            <span><FormattedMessage id="footer.add2" defaultMessage="Ba Dinh district" /></span>
            <br/>
            <span><FormattedMessage id="footer.add3" defaultMessage="Hanoi" /></span>
            <br/>
            <span><FormattedMessage id="footer.add4" defaultMessage="Vietnam" /></span> 
            <br/>
            <br/>
            <span>Tel: +84 (0)916082546</span>
            <br/>
            <span>Email: gachcobattrang@gmail.com</span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Contact;