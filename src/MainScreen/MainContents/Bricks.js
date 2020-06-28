import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer';
import styles from './Bricks.module.css';
import homeStyles from './Home.module.css';
import { allBricks } from './../../data/bricks';

import { FormattedMessage } from 'react-intl';

const Bricks = () => {
  // import all bricks from the brick data file
  const bricks = Object.values(allBricks);

  // useState to keep track of selected brick type
  const [brickType, setBrickType] = useState(null);

  // filter sorted bricks based on selected brick type
  const sortedBricks = brickType ? bricks.filter(
    brick => brick.type && brick.type.includes(brickType)
  ) : bricks;

  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={styles.Article}
        >
          <div className={styles.Title}>
            <FormattedMessage id="bricks.title" defaultMessage="Bricks" />
          </div>
          <div
            className={styles.Text}
          >
            <FormattedMessage
              id="bricks.para1"
              defaultMessage="Clay facing bricks are natural, high-quality, user-friendly and easy to maintain.
              Facing bricks are a sustainable product with a lifetime of more than 100 years.
              Facing bricks withstand all weather conditions and require no maintenance.
              Furthermore they are non-combustible and non-flammable."
            />
            <br/>
            <br/>
            <FormattedMessage
              id="bricks.para2"
              defaultMessage="Another advantage of facing bricks is their flexibility.
              The layout of a building with facing bricks can always be changed,
              both during the building process and throughout the building's lifetime."
            />
            <br/>
            <br/>
            <FormattedMessage
              id="bricks.para3"
              defaultMessage="Since Bat Trang Ancient Bricks offers facing bricks in many different colours and sizes,
              there will always be a facing brick to match your requirements."
            />
            <br/>
            <br/>
            <FormattedMessage
              id="bricks.para4"
              defaultMessage="If you are interested in buying facing bricks and need appropriate advice, please contact us!"
            />
          </div>
        </div>
        <div
          className={styles.ProductsContainer}
        >
          <div
            className={styles.ProductFilter}
          >
            <button
              onClick={() => setBrickType(null)}
            >
              <FormattedMessage id="bricks.allAssortments" defaultMessage="All assortments" />
            </button>
            <button
              onClick={() => setBrickType(1)}
            >
              <FormattedMessage id="bricks.bricksType" defaultMessage="Bricks" />
            </button>
            <button
              onClick={() => setBrickType(2)}
            >
              <FormattedMessage id="bricks.wallTilesType" defaultMessage="Wall Tiles" />
            </button>
            <button
              onClick={() => setBrickType(3)}
            >
              <FormattedMessage id="bricks.floorTilesType" defaultMessage="Floor Tiles" />
            </button>
            <button
              onClick={() => setBrickType(4)}
            >
              <FormattedMessage id="bricks.decorType" defaultMessage="Decor" />
            </button>
          </div>
          <div
            className={homeStyles.Separator}
          />

          <div
            className={styles.ProductList}
          >
            {sortedBricks.map(brick => (
              <Link
                to={`/bricks/${brick.id}`}
                className={styles.ProductWrapper}
                key={brick.id}
              >
                <div
                  className={styles.Product}
                  style={{
                    backgroundImage: `url(${brick.urls.brickUrl})`
                  }}
                />
                <div
                  className={styles.ProductOverlay}
                >
                  <div
                    className={`${styles.ProductLayer} ${styles.ProductOnHover}`}
                  />
                  <div
                    className={`${styles.ProductLayer} ${styles.ProductName}`}
                  >
                    {brick.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Bricks;