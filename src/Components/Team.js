import React from 'react';
import styles from './Team.module.css';
import slideshowStyles from './Slideshow.module.css';
import homeStyles from './../MainScreen/MainContents/Home.module.css';

import { FormattedMessage } from 'react-intl';

const Team = () => {
  return (
    <div
      className={styles.TeamContainer}
    >
      <div
        className={slideshowStyles.SlideshowTitle}
      >
        <FormattedMessage id="team.teamMembers" defaultMessage="Team members"/>
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
            <FormattedMessage id="team.chairman-name" defaultMessage="Le Thu Cam"/>
          </div>
          <div
            className={styles.Position}
          >
            <FormattedMessage id="team.chairman" defaultMessage="Chairman"/>
          </div>
        </div>
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/thuy-nguyen.jpg" alt="Mrs. Thuy"/>
          <div
            className={styles.Name}
          >
            <FormattedMessage id="team.director-name" defaultMessage="Nguyen Thu Thuy"/>
          </div>
          <div
            className={styles.Position}
          >
            <FormattedMessage id="team.director" defaultMessage="Director"/>
          </div>
        </div>
      </div>
      <div
        className={styles.Team}
      >
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/van-le-2.jpg" alt="Mr. Thuan"/>
          <div
            className={styles.Name}
          >
            <FormattedMessage id="team.manager-name" defaultMessage="Nguyen Van Thuan"/>
          </div>
          <div
            className={styles.Position}
          >
            <FormattedMessage id="team.manager" defaultMessage="Manager"/>
          </div>
        </div>
        <div
          className={styles.TeamMember}
        >
          <img src="/images/team/van-le.jpg" alt="Hau"/>
          <div
            className={styles.Name}
          >
            <FormattedMessage id="team.accountant-name" defaultMessage="Nguyen Thi Hau"/>
          </div>
          <div
            className={styles.Position}
          >
            <FormattedMessage id="team.accountant" defaultMessage="Accountant"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Team;