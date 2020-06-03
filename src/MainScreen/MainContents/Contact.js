import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { mapboxAccessToken } from './../../mapboxToken';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Contact = () => {
  return (
    <MainContainer>
      <Map
        style={{
          width: "100%",
          height: 300,
          marginBottom: 10
        }}
        center={[21.042638, 105.844245]}
        zoom={9}
      >
        <TileLayer
          attribution="Map data &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
          url={`https://api.mapbox.com/styles/v1/hoanphung/ckaycxl0p067f1jquqxd9zhhx/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxAccessToken}`}
        />
        <Marker position={[21.042638, 105.844245]}>
          <Popup>
            <b><FormattedMessage id="footer.mainOffice" defaultMessage="Main office" />:</b><br/>
            <br/>
            <FormattedMessage id="footer.add1" defaultMessage="45 Yen Ninh" />, <FormattedMessage id="footer.add3" defaultMessage="Hanoi" /><br/>
            <a href="mailto:gachcobattrang@gmail.com" target="blank">gachcobattrang@gmail.com</a><br />
            <a href="tel:+84916082546">+84 (0) 916082546</a>
          </Popup>
        </Marker>
        <Marker position={[20.979699, 105.924128]}>
          <Popup>
            <b><FormattedMessage id="footer.productionFacility" defaultMessage="Production facility" />:</b><br/>
            <br/>
            <FormattedMessage id="footer.factory-add1" defaultMessage="Da Ton" />, <FormattedMessage id="footer.factory-add2" defaultMessage="Gia Lam" />, <FormattedMessage id="footer.add3" defaultMessage="Hanoi" /><br/>
            <a href="mailto:gachcobattrang@gmail.com" target="blank">gachcobattrang@gmail.com</a><br />
            <a href="tel:+84916082546">+84 (0) 916082546</a>
          </Popup>
        </Marker>
      </Map>
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