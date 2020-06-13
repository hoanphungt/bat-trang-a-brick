import React from 'react';
import styles from './FacebookPosts.module.css';
import slideshowStyles from './Slideshow.module.css';
import homeStyles from './../MainScreen/MainContents/Home.module.css';

import { FormattedMessage } from 'react-intl';

const FacebookPosts = () => {
  return (
    <div
      className={slideshowStyles.SlideshowContainer}
    >
      <div
        className={slideshowStyles.SlideshowTitle}
      >
        <FormattedMessage id="facebook.facebook" defaultMessage="Facebook"/>
      </div>
      <div
        className={homeStyles.Separator}
      />
      <div
        className={styles.FacebookPosts}
      >
        <div
          className="fb-post"
          data-href="https://www.facebook.com/CongtyTNHHGachCoBatTrang/posts/597497043760479"
          data-show-text="true"
        />
        <div
          className="fb-post"
          data-href="https://www.facebook.com/CongtyTNHHGachCoBatTrang/posts/597496843760499"
          data-show-text="true"
        />
      </div>
    </div>
  )
};

export default FacebookPosts;