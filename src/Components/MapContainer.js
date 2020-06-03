import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { mapboxAccessToken } from './../mapboxToken';
import styles from './MapContainer.module.css';

import { FormattedMessage } from 'react-intl';

const MapContainer = () => {
  return (
    <Map
      className={styles.MapContainer}
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
  )
}

export default MapContainer;