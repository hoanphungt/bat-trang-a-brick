import React from 'react';
import MainContainer from '../MainContainer';
import brickStyles from './Bricks.module.css';
import homeStyles from './Home.module.css';

import { FormattedMessage } from 'react-intl';

const AboutUs = () => {
  return (
    <MainContainer>
      <div
        className={homeStyles.MainContent}
      >
        <div
          className={brickStyles.Article}
        >
          <div className={brickStyles.Title}>
            <FormattedMessage id="aboutUs.title" defaultMessage="About us" />
          </div>
          <div
            className={brickStyles.Text}
            style={{ whiteSpace: "pre-line" }}
          >
            <FormattedMessage
              id="aboutUs.text"
              values={{ b: text => <b>{text}</b>}}
              defaultMessage={`"Bat Trang ancient bricks play a significant role in contributing to the historical and cultural value of ancient relics. Therefore, the replacement of ancient Bat Trang bricks with other materials is breaking the overall ancient architecture of these relics" - <b>Dr. Hoang Dao Cuong - Director of the Institute of Conservation of Monuments</b>.

              Bat Trang bricks are used to build Thang Long Imperial Citadel and most palaces, temples and pagodas throughout Vietnam. Trained up from the experience accumulated over 500 years of our ancestors, Bat Trang Ancient Bricks Co., Ltd. has inherited, developed and put into each quintessential products of the nation through the talented hands of our restorers.

              With an ingenious combination of ancient styles inherited from hundreds of years together with the modern styles crystallized from the rich history of Western architecture, our company is proud to be the leading manufacturer and supplier of Interior - exterior decoration products of high quality terracotta bricks and ceramic bricks in Vietnam. Products of Bat Trang Ancient Bricks Company are simple, rustic style, use natural materials without chemicals, environmentally friendly, cool in summer - warm in winter, moss free and durable with time.

              Ceramic products of Bat Trang Ancient Bricks Company are proud to be provided to serve not only for the restoration of cultural works, ancient buildings, communal houses, pagodas, ancestral memorial houses and etc but also used in villas, residential houses and are preferred and appreciated by many large investors.

              Typical projects that have used products produced by Bat Trang Ancient Bricks Company are:

              - Major historical sites: Imperial Citadel of Thang Long, Imperial Citadel of Hue, Tomb of Minh Mang, Citadel of Co Loa, Hanoi Temple of Literature, One Pillar Pagoda, etc ...

              - Many pagodas and temples throughout Hanoi: Nhat Tan Pagoda, Perfume Pagoda, Quan Su Pagoda, Ai Mo Pagoda, Quang An Pagoda, Ho Quoc Pagoda, Cau Dong Pagoda, Non Nuoc Pagoda, Trung Kinh Pagoda, Khoan Te Pagoda, Mai Phuc Pagoda, Cot Pagoda, Soc Temple, Linh Duong Pagoda, Linh Quang Pagoda, Dinh Yen Phu, Dinh Quang Ba, Dinh Nhat Tan, Dinh Yen Phu, Dinh Kim Lien, Dinh Chu Van An, Dinh Chem, An Duong Temple Vuong, Ancient Tower of Ly Tran Xuan Soan, etc ...

              - Many ancient temples and pagodas nationwide: Do Pagoda - Bac Ninh, Hung Long Pagoda - Old Ha Tay, Ha Tien Pagoda - Vinh Phuc, Champa Tower - Ninh Thuan, Yen Tu Pagoda - Quang Ninh, Tran Temple - Nam Dinh, Yen Phu Pagoda - Hung Yen, Vinh Nghiem Temple - Bac Giang, Lien Dam Pagoda - Bac Ninh, Ha Tien Temple - Vinh Phuc, Hang Pagoda - Hai Phong, Thay Pagoda - Ha Tay, Kim Pagoda - Nam Dinh, Ban pagoda - Hung Yen, Bai Dinh Tower - Ninh Binh, Old Pagoda of Bai Dinh - Trang An, Dien Khanh Pagoda - Nam Dinh, etc ...

              - Many ancestral memorial houses: Uncle Ho's memorial house - Da Chong - Ba Vi, General Secretary Nguyen Van Linh's memorial house - Hung Yen, great poet Nguyen Du's memorial house - Ha Tinh, Hoang Van Thu's memorial house - Lang Son, etc...

              - The largest urban areas in the North of Vietnam include Ecopark, Me Tri, Ciputra, Vinhomes Riverside, etc...

              - Ancient castles in Italy, miniature world prison buildings in Canada, USA, etc...

              - And a lot of beautiful houses, villas, luxury apartments for rent to foreigners in the West Lake area, other big projects in all parts of the country.

              Currently, Bat Trang Ancient Bricks Co. Ltd. has been supplying tile machines, brick machines, extruders, mills of all kinds, molds and refractories to brick tunnel factories and factories belonging to the system of Viglacera all over the country from Ha Giang, Phu Tho, Lang Son through Thanh Hoa, Nghe An, Ha Tinh, Quang Binh to Da Nang, Phu Yen, Khanh Hoa, Binh Duong, Binh Dinh etc ...

              With the support of a large number of customers from near and far, Bat Trang Ancient Bricks Company is growing. Currently, the company has expanded its production and business network throughout the country as well as continued to expand the field of real estate, luxury apartments, etc.

              Bat Trang Ancient Bricks Co. Ltd. is looking forward to preserving the ancient products of our ancestors and Bat Trang village to bring the Company's products to a larger number of customers nationwide as well as promote a traditional product of Vietnam to the whole world.

              <b>Founder - Mr. Le Thu Cam</b>`}
            />
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default AboutUs;