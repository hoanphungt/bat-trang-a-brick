import React, { useState } from 'react';
import styles from './Brick.module.css';
import MainContainer from '../MainContainer';
import homeStyles from './Home.module.css';
import { allBricks } from './../../data/bricks';

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
          {/* Do we need this title?
          <div
            className={styles.ProductTitle}
            style={{ paddingLeft: '1rem' }}
          >
            Gallery
          </div> */}
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
              {photoUrls.map(url => (
                <img
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
                {brick.name}
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
                Specificiations
              </span>
              <br/>
              <span
                className={styles.ProductCode}
              >
                {brick.specifications.code ? brick.specifications.code : ''}
              </span>
              <br/>
              <span><b>Color</b></span>
              <span>{brick.specifications.color ? brick.specifications.color : ''}</span>
              <br/>
              <span><b>Brick format</b></span>
              <span>{brick.specifications.format ? brick.specifications.format : ''}</span>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>   
  )
}

export default Brick;