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
              Welcome to the colourful world of ceramic bricks. Brickburgers is the leading supplier and producer of
              high-quality ceramic bricks and brick slips. Our quality is guaranteed, our customers are happy.
              We keep plenty of stock and guarantee quick delivery, anywhere in the world. But we are also down to earth,
              friendly, approachable, and always professional, service-oriented and innovative. 
            </span>
            <br/>
            <br/>
            <span>
              The Brickburgers brick trading company in Reuver, the Netherlands, started cutting bricks into flat brick slips
              and corner slips in 1975. Its founder, Jan Willem Burgers (1947), who worked as a brick merchant, noted that
              demand for ceramic brick slips was growing and decided to start producing them himself in Reuver.
              And this turned out to be exactly what the market had been waiting for.
              In the 1980s, almost every home in the Netherlands had at least one brick slip wall.
              And now, more than 40 years down the road, brick slips are still our major market segment.
              We also make special brick products (shaped bricks) using state-of-the-art cutting and gluing techniques. 
            </span>
            <br/>
            <br/>
            <span>
              Our factory and offices are located in Reuver, where we work with a team of 15 people.
              Brickburgers' products find their way to customers all over the world, mainly through carefully selected partners. 
            </span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default AboutUs;