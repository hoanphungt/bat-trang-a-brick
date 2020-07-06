import React, { useState } from 'react';
import HomePhoto from '../../Components/HomePhoto';
import MainContainer from '../MainContainer';
import Slideshow from '../../Components/Slideshow';
import FacebookPosts from '../../Components/FacebookPosts';
import styles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Home = () => {
  // Store width of popular product's image
  // to set it width for facebook container
  const [width, setWidth] = useState(0);

  return (    
    <MainContainer>
      <HomePhoto />
      <div
        className={styles.MainContent}
      >
        <div
          id='introduction'
          className={styles.Title}
        >
          <FormattedMessage id="home.title" defaultMessage="Bat Trang Ancient Bricks"/>
        </div>
        <div
          className={styles.Separator}
        />
        <div
          className={styles.Introduction}
        >
          <FormattedMessage
            id="home.intro-para1"
            defaultMessage="Bat Trang Ancient Bricks Co. Ltd. is a supplier and manufacturer of high quality terracotta bricks and wall tiles.
            Our products are carefully manufactured and selected for both domestic and international markets."
          />
          <br/>
          <br/>
          <FormattedMessage
            id="home.intro-para2"
            defaultMessage="Our types of terracotta bricks are put into buildings of memorial houses, pagodas, communal houses, temples and modern houses.
            Our products stand out from other types of bricks because of their color, shape and texture. Terracotta bricks are made by hand, 100% from natural
            clay, not mixed with coal, sand and other colored chemicals, manually burned in furnaces at temperatures above 1200°C. Products can be used both indoor and outdoor."
          />
        </div>
        <div
          className={styles.MainBlock}
        >
          <Slideshow setWidth={setWidth} />
          <FacebookPosts width={width} />
        </div>
      </div>
    </MainContainer>
  )
}

export default Home;