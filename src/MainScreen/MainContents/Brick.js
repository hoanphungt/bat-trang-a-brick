import React, { useState } from 'react';
import styles from './Brick.module.css';
import MainContainer from '../MainContainer';
import homeStyles from './Home.module.css';
import { allBricks } from './../../data/bricks';

import { FormattedMessage } from 'react-intl';

const Brick = (props) => {
  const brick = Object.values(allBricks).find(
    brick => brick.id === Number(props.match.params.id)
  );

  const photoUrls = Object.values(brick.urls);

  const [selectedPhoto, setSelectedPhoto] = useState(brick.urls.brickUrl);

  return (
    <MainContainer>
      <div
        className={styles.BrickContainer}
      >
        <div
          className={`${homeStyles.MainContent} ${styles.BrickContent}`}
        >
          <div
            className={homeStyles.Separator}
          />
          <div
            className={styles.ProductPhotos}
          >
            <div
              className={styles.MainPhoto}
            >
              <img
                src={selectedPhoto}
                alt="brick"
              />
            </div>
            <div
              className={styles.SidePhotos}
            >
              {photoUrls.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={url}
                  onClick={() => setSelectedPhoto(url)}
                />
              ))}
            </div>
          </div>
          <div
            className={styles.ProductDetails}
          >
            <div
              className={styles.ProductIntro}
            >
              <span
                className={styles.ProductTitle}
              >
                <span
                  className={styles.BackToBricks}
                  onClick={() => props.history.push('/bricks')}
                >
                  <FormattedMessage id="bricks.shortTitle" defaultMessage="Bricks" />
                </span> / {brick.name}
              </span>
              <br/>
              <span>{brick.brickIntro ? brick.brickIntro : ''}</span>
            </div>
            <div
              className={styles.ProductSpecs}
            >
              <span
                className={styles.ProductTitle}
              >
                <FormattedMessage id="brick.specs" defaultMessage="Specs" />
              </span>
              <br/>
              <span
                className={styles.ProductCode}
              >
                <FormattedMessage id="brick.code" defaultMessage="Code"/>: {brick.specifications.code ? brick.specifications.code : ''}
              </span>
              <br/>
              <span><b><FormattedMessage id="brick.color" defaultMessage="Color" /></b></span>
              <span>{brick.specifications.color ? brick.specifications.color : ''}</span>
              <br/>
              <span><b><FormattedMessage id="brick.format" defaultMessage="Brick format" /></b></span>
              <span>{brick.specifications.format ? brick.specifications.format : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>   
  )
}

export default Brick;