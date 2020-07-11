import React from 'react';
import { Helmet } from 'react-helmet';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const Machines = () => {
  return (
    <MainContainer>
      <Helmet>
        <title>Gạch cổ Bát Tràng - Sản phẩm cơ khí phục vụ sản xuất gạch ngói</title>
        <meta
          name="description"
          content="Bên cạnh các sản phẩm gạch cổ, công ty TNHH Gạch Cổ Bát Tràng là đơn vị chuyên cung cấp các sản phẩm cơ khí phục vụ sản xuất gạch ngói với kinh nghiệm trên 20 năm.
          Chúng tôi tự hào bằng chính sự sáng tạo của mình đã giúp các doanh nghiệp rút ngắn quá trình sản xuất, tiết kiệm nguyên nhiên liệu, nhân công, nhằm giảm thiểu tối đa chi phí."
        />
      </Helmet>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>        
            <FormattedMessage id="topMenu.machines" defaultMessage="CNC Machines" />
          </div>
          <div
            className={brickStyles.Text}
          >
            <span>
              <FormattedMessage
                id="machines.text1"
                defaultMessage="Coming soon"
              />
            </span>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default Machines;