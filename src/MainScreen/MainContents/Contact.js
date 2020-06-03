import React from 'react';
import MapContainer from '../../Components/MapContainer';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Contact = () => {
  return (
    <MainContainer>
      <MapContainer />
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
            <p><FormattedMessage id="footer.companyName" defaultMessage="Bat Trang Ancient Bricks Ltd." /></p>
            <br/>
            <p><b><FormattedMessage id="footer.mainOffice" defaultMessage="Main office" />:</b></p>
            <p><FormattedMessage id="footer.add1" defaultMessage="45 Yen Ninh" /></p>
            <p><FormattedMessage id="footer.add2" defaultMessage="Ba Dinh district" /></p>
            <p><FormattedMessage id="footer.add3" defaultMessage="Hanoi" /></p>
            <p><FormattedMessage id="footer.add4" defaultMessage="Vietnam" /></p>
            <br/>
            <p><b><FormattedMessage id="footer.productionFacility" defaultMessage="Production facility" />:</b></p>
            <p><FormattedMessage id="footer.factory-add1" defaultMessage="Da Ton" /></p>
            <p><FormattedMessage id="footer.factory-add2" defaultMessage="Gia Lam district" /></p>
            <p><FormattedMessage id="footer.add3" defaultMessage="Hanoi" /></p>
            <p><FormattedMessage id="footer.add4" defaultMessage="Vietnam" /></p>
            <br/>
            <p><b>Tel:</b> +84 (0)916082546</p>
            <p><b>Email:</b> gachcobattrang@gmail.com</p>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Contact;