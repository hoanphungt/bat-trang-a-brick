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
              <p
                className={styles.ProductTitle}
              >
                <FormattedMessage id="brick.specs" defaultMessage="Specs" />
              </p>
              <br/>
              {brick.specifications.code ? (
                <div
                  className={styles.ProductCode}
                >
                  <p><b><FormattedMessage id="brick.code" defaultMessage="Code"/></b></p>
                  <p>{brick.specifications.code}</p>
                  <br/>
                </div>
              ) : null}

              {brick.specifications.color ? (
                <div>
                  <p><b><FormattedMessage id="brick.color" defaultMessage="Color" /></b></p>
                  <p>{brick.specifications.color}</p>
                  <br/>
                </div>
              ) : null}

              {brick.specifications.format ? (
                <div>
                  <p><b><FormattedMessage id="brick.format" defaultMessage="Brick format" /></b></p>
                  <p>{brick.specifications.format}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </MainContainer>   
  )
}

export default Brick;