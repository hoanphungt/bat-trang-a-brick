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
            defaultMessage="Welcome to the colourful world of clay bricks.
            Bat Trang Ancient Bricks is the leading supplier and producer of high-quality clay bricks and brick slips.
            By working with carefully selected international partners, we ensure that our products find their way all over the world."
          />
          <br/>
          <br/>
          <FormattedMessage
            id="home.intro-para2"
            defaultMessage="Clay brick and clay brick slips stand out from other bricks by their colour, shape and texture.
            The hand-formed bricks and brick slips are warm, stylish and made of 100% natural clay.
            This eco-friendly and  durable building material also lasts a long time. Our products can be used both indoors and outdoors."
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