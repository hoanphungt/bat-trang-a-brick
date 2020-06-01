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
          >
            <p>"Gạch cổ Bát Tràng có vai trò không nhỏ trong việc góp phần tạo nên giá trị lịch sử, văn hóa của những di tích cổ. Chính vì vậy, việc thay thế gạch cổ Bát Tràng bằng các loại chất liệu khác đang phá vỡ tổng thể kiến trúc cổ của các di tích này"</p>
            <p><b>Kiến trúc sư Hoàng Đạo Cương - Viện Bảo tồn Di tích.</b></p>
            <br/>
            <p>Gạch Bát Tràng được sử dụng để xây Hoàng thành Thăng Long và hầu hết cung điện, đình, chùa trên dọc dài dải đất Việt, làm sang trọng hơn những khuôn viện, sân vườn, các gia đình quyền quý.</p>
            <br/>
            <p>Được rèn luyện đi lên từ những kinh nghiệm tích lũy hơn 500 năm của làng nghề Bát Tràng, Công ty TNHH Gạch cổ Bát Tràng đã kế thừa, phát triển và đưa vào từng sản phẩm tinh hoa của dân tộc từ bàn tay tài hoa của những nghệ nhân Bát Tràng.</p>
            <br/>
            <p>Với sự kết hợp tài tình giữa phong cách cổ được thừa hưởng từ hàng trăm năm nay và phong cách hiện đại được kết tinh từ bề dày lịch sử kiến trúc phương Tây, Công ty chúng tôi tự hào là đơn vị đi đầu sản xuất sản phẩm trang trí nội - ngoại thất chất liệu gạch, gạch gốm cao cấp. Sản phẩm của Công ty Gạch cổ Bát Tràng mang phong cách đơn giản, mộc mạc, sử dụng chất liệu tự nhiên không hóa chất, thân thiện với môi trường, mát vào mùa hè - ấm vào mùa đông, không rêu mốc và bền mãi với thời gian.</p>
            <br/>
            <p>Sản phẩm gạch gốm của Công ty Gạch cổ Bát Tràng tự hào được cung cấp phục vụ không những cho việc phục chế các công trình văn hóa, công trình cổ, đình, chùa, nhà thờ tổ, nhà thờ họ, v.v... mà còn được sử dụng trong các biệt thự, nhà dân dụng và được nhiều nhà đầu tư lớn yêu thích lựa chọn và đánh giá cao. Những công trình tiêu biểu đã sử dụng sản phẩm do Công ty Gạch cổ Bát Tràng sản xuất như:</p>
            <br/>
            <p>- Hoàng thành Thăng Long, Đại Nội Huế, Thành Cổ Loa, Văn Miếu Quốc Tử Gíám, Chùa Một Cột;</p>
            <p>- Đình Yên Phụ, Chùa Nhật Tân, Chùa Hương, Chùa Quán Sứ, Đền Đô, Đền thờ An Dương Vương, Chùa Ái Mộ, Chùa Hưng Long, Chùa Cầu Đông, Đình Chu Văn An, Chùa Quang Ân, v.v...;</p>
            <p>- Chùa Hà Tiên - Vĩnh Phúc, Tháp Chàm - Ninh Thuận, Chùa Bà - Nha Trang, Chùa Yên Tử - Quảng Ninh, Đền Trần - Nam Định, Chùa Yên Phú - Hưng Yên, v.v...;</p>
            <p>- Nhà thờ Bác Hồ - Đá Chông, Ba Vì, Nhà thờ Tổng Bí Thư Nguyễn Văn Linh - Hưng Yên, v.v...;</p>
            <p>- Các khu đô thị lớn nhất miền Bắc Ecopark, Mễ Trì, Ciputra, v.v...;</p>
            <p>- Các lâu đài cổ ở Ý,công trình các nhà tù thế giới thu nhỏ ở Canada, Mỹ, v.v...</p>
            <p>- Và rất nhiều nhà đẹp, biệt thự, những công trình lớn khác trên khắp mọi miền đất nước.</p>
            <br/>
            <p>Hiện nay, Công ty TNHH Gạch cổ Bát Tràng cũng đã và đang cung cấp máy ngói, máy gạch các loại, khuôn mẫu và vật liệu chịu lửa cho các nhà máy tuynel, các nhà máy thuộc hệ thống của Viglacera trên khắp cả nước từ Hà Giang, Phú Thọ, Lạng Sơn qua Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình đến Đà Nẵng, Phú Yên, Khánh Hòa, Bình Dương, v.v..., đều sử dụng sản phẩm do Công ty Gạch cổ Bát Tràng chế tạo và sản xuất.</p>
            <br/>
            <p>Được sự ủng hộ của đông đảo khách hàng gần xa, Công ty Gạch cổ Bát Tràng đang ngày càng lớn mạnh. Hiện nay, Công ty đã mở rộng mạng lưới sản xuất kinh doanh khắp cả nước cũng như tiếp tục mở rộng lĩnh vực kinh doanh bất động sản, khách sạn cao cấp, v.v...</p>
            <br/>
            <p>Công ty TNHH Gạch cổ Bát Tràng rất mong gìn giữ được các sản phẩm cổ của làng nghề Bát Tràng và đưa các sản phẩm của Công ty đến với đông đảo khách hàng trên toàn quốc cũng như quảng bá một sản phẩm truyền thống của Việt Nam ra toàn thế giới.</p>
            <br/>
            <p><b>Giám đốc - Ông Lê Thu Cẩm</b></p>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default AboutUs;