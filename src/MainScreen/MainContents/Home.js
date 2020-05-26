import React from 'react';
import HomePhoto from '../../Components/HomePhoto';
import MainContainer from '../MainContainer';
import Slideshow from '../../Components/Slideshow';
import Team from '../../Components/Team';
import styles from './Home.module.css';

const Home = () => {
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
          Bat Trang Ancient Bricks
        </div>
        <div
          className={styles.Separator}
        />
        <div
          className={styles.Introduction}
        >
          <span>Welcome to the colourful world of clay bricks. Bat Trang Ancient Bricks is the leading supplier and producer of high-quality clay bricks and brick slips. </span>
          <span>By working with carefully selected international partners, we ensure that our products find their way all over the world.</span>
          <br/>
          <br/>
          <span>Clay brick and clay brick slips stand out from other bricks by their colour, shape and texture. </span>
          <span>The hand-formed bricks and brick slips are warm, stylish and made of 100% natural clay. </span>
          <span>This eco-friendly and  durable building material also lasts a long time. Our products can be used both indoors and outdoors.</span>
        </div>
        <div
          className={styles.MainBlock}
        >
          <Slideshow />
          <Team />
        </div>
      </div>
    </MainContainer>
  )
}

export default Home;