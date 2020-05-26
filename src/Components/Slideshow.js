import React, { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';
import homeStyles from './../MainScreen/MainContents/Home.module.css';

const Slideshow = () => {
  // Photos of popular products to show in the slideshow
  const photos = {
    photo1: {
      id: 1,
      url: '/images/bricks/1.jpg'
    },
    photo2: {
      id: 2,
      url: '/images/bricks/2.jpg'
    },
    photo3: {
      id: 3,
      url: '/images/bricks/3.jpg'
    },
    photo4: {
      id: 4,
      url: '/images/bricks/4.jpg'
    },
    photo5: {
      id: 5,
      url: '/images/bricks/5.jpg'
    },
  };

  // Use react hooks to keep selected photo id in react state
  const [photoId, setPhotoId] = useState(1);

  // Helper function to change photos
  const changePhoto = (bool) => {
    const allPhotos = Object.values(photos);
    if (
      bool && photoId <= (allPhotos.length - 1)
    ) {
      setPhotoId(photoId + 1);
    } else if (
      !bool && photoId > 1
    ) {
      setPhotoId(photoId - 1);
    } else if (bool) {
      setPhotoId(1);
    } else { // bool === false
      setPhotoId(5);
    };
  };

  // Helper function to select photo
  const selectPhoto = (photos) => {
    return Object.values(photos).find(photo => photo.id === photoId);
  };

  // useEffect and setInterval to automatically change photo in the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      const allPhotos = Object.values(photos);
      if (photoId <= (allPhotos.length - 1)) {
        setPhotoId(photoId + 1);
      } else {
        setPhotoId(1);
      };
    }, 3000);

    return () => clearInterval(interval);
  }, [photoId, setPhotoId, photos])

  return (
    <div
      className={styles.SlideshowContainer}
    >
      <div
        className={styles.SlideshowBar}
      >
        <div
          className={styles.SlideshowTitle}
        >
          Popular products
        </div>
        <div
          className={styles.SlideshowButtons}
        >
          <div
            className={styles.SlideshowButton}
            onClick={() => changePhoto(false)}
          >
            {'<'}
          </div>
          <div
            className={styles.SlideshowButton}
            onClick={() => changePhoto(true)}
          >
            {'>'}
          </div>
        </div>
      </div>
      <div
          className={homeStyles.Separator}
        />
      <div
        className={styles.Slideshow}
      >
        <img
          className={styles.SlideshowPhoto}
          src={selectPhoto(photos).url}
          alt="brick"
        />
      </div>
    </div>
  )
}

export default Slideshow;