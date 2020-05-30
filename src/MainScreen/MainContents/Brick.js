import React from 'react';
// import styles from './Brick.module.css';
// import brickStyles from './Bricks.module.css';
import MainContainer from '../MainContainer';
import homeStyles from './Home.module.css';

const Brick = (props) => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        Sample {props.match.params.id}
      </div>
    </MainContainer>   
  )
}

export default Brick;