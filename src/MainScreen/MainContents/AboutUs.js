import React from 'react';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const AboutUs = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>
            <FormattedMessage id="topMenu.aboutUs" defaultMessage="About us" />
          </div>
          <div
            className={brickStyles.Text}
          >
            <span>
              Welcome to the colourful world of ceramic bricks. Bat Trang Ancient Bricks is the leading supplier and producer of
              high-quality ceramic bricks and brick slips. Our quality is guaranteed, our customers are happy.
              We keep plenty of stock and guarantee quick delivery, anywhere in the world. But we are also down to earth,
              friendly, approachable, and always professional, service-oriented and innovative. 
            </span>
            <br/>
            <br/>
            <span>
              The Bat Trang Ancient Bricks limited company started in Bat Trang, Vietnam, started cutting bricks into flat brick slips
              and corner slips in 1993. Its founder, Mr. Le Thu Cam, who worked as a brick merchant, noted that
              demand for ceramic brick slips was growing and decided to start producing them himself in Bat Trang.
              And this turned out to be exactly what the market had been waiting for.
              In the 1990s, almost every home in Vietnam had at least one brick slip wall.
              And now, almost 30 years down the road, brick slips are still our major market segment.
              We also make special brick products (shaped bricks) using state-of-the-art cutting and gluing techniques. 
            </span>
            <br/>
            <br/>
            <span>
              Our factory and offices are located in Bat Trang, where we work with a team of 20 people.
              Bat Trang Ancient Bricks' products find their way to customers all over the world, mainly through carefully selected partners.
            </span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default AboutUs;