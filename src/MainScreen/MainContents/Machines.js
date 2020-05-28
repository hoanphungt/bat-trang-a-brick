import React from 'react';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Machines = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>        
            <FormattedMessage id="topMenu.machines" defaultMessage="Machines" />
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Machines;