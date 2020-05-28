import React from 'react';
import MainContainer from '../MainContainer';
import styles from './Bricks.module.css';
import homeStyles from './Home.module.css';

const Bricks = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={styles.Article}
        >
          <div className={styles.Title}>Bricks</div>
          <div
            className={styles.Text}
          >
            <span>
              Clay facing bricks are natural, high-quality, user-friendly and easy to maintain.
              Facing bricks are a sustainable product with a lifetime of more than 100 years.
              Facing bricks withstand all weather conditions and require no maintenance.
              Furthermore they are non-combustible and non-flammable.
              Another advantage of facing bricks is their flexibility.
              The layout of a building with facing bricks can always be changed,
              both during the building process and throughout the building's lifetime. 
            </span>
            <br/>
            <br/>
            <span>
              Since Brickburgers offers facing bricks in many different colours and sizes,
              there will always be a facing brick to match your requirements.
              If you are interested in buying facing bricks and need appropriate advice, please contact us!
            </span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Bricks;