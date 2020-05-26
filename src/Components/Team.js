import React from 'react';
import styles from './Team.module.css';
import slideshowStyles from './Slideshow.module.css';

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
        className={styles.Team}
      >
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/wim.jpg" alt="Wim"/>
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
          <img src="/images/team/huub.jpg" alt="Huub"/>
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
          <img src="/images/team/philip.jpg" alt="Wim"/>
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
          <img src="/images/team/sep.jpg" alt="Wim"/>
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