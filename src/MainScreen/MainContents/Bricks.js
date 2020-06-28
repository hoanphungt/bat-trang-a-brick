import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer';
import styles from './Bricks.module.css';
import homeStyles from './Home.module.css';
import { allBricks } from './../../data/bricks';

import { FormattedMessage } from 'react-intl';

const Bricks = () => {
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
            <button>
              <FormattedMessage id="bricks.allAssortments" defaultMessage="All assortments" />
            </button>
          </div>
          <div
            className={homeStyles.Separator}
          />

          <div
            className={styles.ProductList}
          >
            {Object.values(allBricks).map(brick => (
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