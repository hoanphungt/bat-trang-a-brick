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
              Clay brick slips are 2-cm-thick slices of original facing bricks.
              This gives them the same positive characteristics as facing bricks.
              An additional advantage of brick slips is that they are light and easy to process.
              Of course, we also provide all the necessary accessories, such as corner slips and headers.
            </span>
            <br/>
            <br/>
            <span>
              Brickburgers can supply brick slips in various colours and sizes,
              for both indoor and outdoor applications. When applied outside, to your façade,
              the minimal thickness of the brick slip has the advantage that no changes need
              to be made to the specifications of rooms and windows, avoiding high alteration costs.
              When installed on interior walls, the modest thickness of brick slips prevents precious space being lost.
              When pointed, brick slips look identical to regular brick work with full-sized facing bricks.
            </span>
            <br/>
            <br/>
            <span>
              Since Brickburgers supplies brick slips in many different colours and sizes,
              there will always be a brick slip to match your requirements. If you are interested
              in buying brick slips and need appropriate advice, please contact us!
            </span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Bricks;