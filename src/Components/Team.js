import React from 'react';
import styles from './Team.module.css';
import slideshowStyles from './Slideshow.module.css';
import homeStyles from './../MainScreen/MainContents/Home.module.css';

const Team = () => {
  return (
    <div
      className={styles.TeamContainer}
    >
      <div
        className={slideshowStyles.SlideshowTitle}
      >
        Team members
      </div>
      <div
        className={homeStyles.Separator}
      />
      <div
        className={styles.Team}
      >
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/cam-le.jpg" alt="Mr. Cam"/>
          <div
            className={styles.Name}
          >
            Le Thu Cam
          </div>
          <div
            className={styles.Position}
          >
            Chairman
          </div>
        </div>
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/thuy-nguyen.jpg" alt="Mrs. Thuy"/>
          <div
            className={styles.Name}
          >
            Nguyen Thu Thuy
          </div>
          <div
            className={styles.Position}
          >
            Director
          </div>
        </div>
      </div>
      <div
        className={styles.Team}
      >
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/van-le-2.jpg" alt="Ms. Van"/>
          <div
            className={styles.Name}
          >
            Le Cam Van
          </div>
          <div
            className={styles.Position}
          >
            Manager
          </div>
        </div>
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/van-le.jpg" alt="Hau"/>
          <div
            className={styles.Name}
          >
            Nguyen Hau
          </div>
          <div
            className={styles.Position}
          >
            Accountant
          </div>
        </div>
      </div>
    </div>
  )
};

export default Team;