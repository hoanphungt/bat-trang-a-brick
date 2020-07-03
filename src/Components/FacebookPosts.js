import React, { useEffect } from 'react';
import styles from './FacebookPosts.module.css';
import slideshowStyles from './Slideshow.module.css';
import homeStyles from './../MainScreen/MainContents/Home.module.css';

const FacebookPosts = () => {

  useEffect(() => {
    if (window.FB) {
      // Re-parse facebook component after each render
      window.FB.XFBML.parse();
    };
  });

  return (
    <div
      className={slideshowStyles.SlideshowContainer}
    >
      <div
        className={slideshowStyles.SlideshowTitle}
      >
        Facebook
      </div>
      <div
        className={homeStyles.Separator}
      />
      <div
        className={styles.FacebookPosts}
      >
        <div
          className="fb-page"
          data-href="https://www.facebook.com/CongtyTNHHGachCoBatTrang/"
          // data-width="auto"
          data-tabs="timeline"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/CongtyTNHHGachCoBatTrang/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/CongtyTNHHGachCoBatTrang/">
              Công ty TNHH Gạch cổ Bát Tràng
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  )
};

export default FacebookPosts;