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
            <p>"Gạch cổ Bát Tràng có vai trò không nhỏ trong việc góp phần tạo nên giá trị lịch sử, văn hóa của những di tích cổ. Chính vì vậy, việc thay thế gạch cổ Bát Tràng bằng các loại chất liệu khác đang phá vỡ tổng thể kiến trúc cổ của các di tích này" - <b>TS.KTS Hoàng Đạo Cương - Viện trưởng Viện Bảo tồn Di tích.</b></p>
            <br/>
            <p>Gạch Bát Tràng được sử dụng để xây Hoàng thành Thăng Long và hầu hết cung điện, đình, chùa trên dọc dài dải đất Việt, làm sang trọng hơn những khuôn viện, sân vườn, các gia đình quyền quý.</p>
            <br/>
            <p>Được rèn luyện đi lên từ những kinh nghiệm tích lũy hơn 500 năm của cha ông, Công ty TNHH Gạch cổ Bát Tràng đã kế thừa, phát triển và đưa vào từng sản phẩm tinh hoa của dân tộc qua bàn tay tài hoa của những người khôi phục.</p>
            <br/>
            <p>Với sự kết hợp tài tình giữa phong cách cổ được thừa hưởng từ hàng trăm năm nay và phong cách hiện đại được kết tinh từ bề dày lịch sử kiến trúc phương Tây, Công ty chúng tôi tự hào là đơn vị đi đầu sản xuất các sản phẩm trang trí nội - ngoại thất chất liệu gạch đất nung, gạch gốm cao cấp tại Việt Nam. Sản phẩm của Công ty Gạch cổ Bát Tràng mang phong cách đơn giản, mộc mạc, sử dụng chất liệu tự nhiên không hóa chất, thân thiện với môi trường, mát vào mùa hè - ấm vào mùa đông, không rêu mốc và bền mãi với thời gian.</p>
            <br/>
            <p>Sản phẩm gạch gốm của Công ty Gạch cổ Bát Tràng tự hào được cung cấp phục vụ không những cho việc phục chế các công trình văn hóa, công trình cổ, đình, chùa, nhà thờ tổ, nhà thờ họ, v.v... mà còn được sử dụng trong các biệt thự, nhà dân dụng và được nhiều nhà đầu tư lớn yêu thích lựa chọn và đánh giá cao.</p>
            <br/>
            <p>Những công trình tiêu biểu đã sử dụng sản phẩm do Công ty Gạch cổ Bát Tràng sản xuất như:</p>
            <br/>
            <p>- Các di tích lịch sử lớn: Hoàng thành Thăng Long, Đại Nội Huế, Lăng Minh Mạng, Thành Cổ Loa, Văn Miếu Quốc Tử Gíám, Chùa Một Cột, v.v...;</p>
            <br/>
            <p>- Nhiều ngôi chùa, đình cổ khắp Hà Nội: Chùa Nhật Tân, Chùa Hương, Chùa Quán Sứ, Chùa Ái Mộ, Chùa Quang Ân, chùa Hộ Quốc, Chùa Cầu Đông, Chùa Non Nước, Chùa Trung Kính, chùa Khoan Tế, Chùa Mai Phúc, chùa Cót, Đền Sóc, Chùa Linh Đường, chùa Linh Quang, Đình Yên Phụ, Đình Quảng Bá, Đình Nhật Tân, Đình Yên Phụ, Đình Kim Liên, Đình Chu Văn An, Đình Chèm, Đền thờ An Dương Vương, Tháp cổ thời Lý Trần Xuân Soạn v.v...;</p>
            <br/>
            <p>- Nhiều ngôi chùa, đình, đền cổ khắp cả nước: Đền Đô – Bắc Ninh, Chùa Hưng Long – Hà Tây Cũ, Chùa Hà Tiên - Vĩnh Phúc, Tháp Chàm - Ninh Thuận, Chùa Yên Tử - Quảng Ninh, Đền Trần - Nam Định, Chùa Yên Phú - Hưng Yên, chùa Vĩnh Nghiêm – Bắc Giang, Chùa Liên Đàm – Bắc Ninh, chùa Hà Tiên – Vĩnh Phúc, Chùa Hàng – Hải Phòng, Chùa Thầy – Hà Tây cũ, Chùa Kim – Nam Định, Chùa Bần – Hưng Yên, Tháp Bái Đính Hoa Lư – Ninh Bình, chùa cổ Bái Đính – Tràng An, chùa Diên Khánh – Nam Định, v.v...;</p>
            <br/>
            <p>- Nhiều nhà thờ cổ: Nhà thờ Bác Hồ - Đá Chông - Ba Vì, Nhà thờ Tổng Bí Thư Nguyễn Văn Linh - Hưng Yên, Nhà thờ Đại thi hào Nguyễn Du – Hà Tĩnh, Đền thờ Hoàng văn Thụ - Lạng Sơn, v.v...;</p>
            <br/>
            <p>- Các khu đô thị lớn nhất miền Bắc bao gồm Ecopark, Mễ Trì, Ciputra, Vinhomes Riverside, v.v...;</p>
            <br/>
            <p>- Các lâu đài cổ ở Ý,công trình các nhà tù thế giới thu nhỏ ở Canada, Mỹ, v.v...</p>
            <br/>
            <p>- Và rất nhiều nhà đẹp, biệt thự, căn hộ cao cấp cho người nước ngoài thuê ở khu vực Hồ Tây, những công trình lớn khác trên mọi miền đất nước.</p>
            <br/>
            <p>Hiện nay, Công ty TNHH Gạch cổ Bát Tràng cũng đã và đang cung cấp máy ngói, máy gạch, máy đùn, máy nghiền các loại, khuôn mẫu và vật liệu chịu lửa cho các nhà máy tuynel, các nhà máy thuộc hệ thống của Viglacera trên khắp cả nước từ Hà Giang, Phú Thọ, Lạng Sơn qua Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình đến Đà Nẵng, Phú Yên, Khánh Hòa, Bình Dương, Bình Định v.v..., đều sử dụng sản phẩm do Công ty Gạch cổ Bát Tràng chế tạo và sản xuất.</p>
            <br/>
            <p>Được sự ủng hộ của đông đảo khách hàng gần xa, Công ty Gạch cổ Bát Tràng đang ngày càng lớn mạnh. Hiện nay, Công ty đã mở rộng mạng lưới sản xuất kinh doanh khắp cả nước cũng như tiếp tục mở rộng lĩnh vực kinh doanh bất động sản, căn hộ cao cấp, v.v...</p>
            <br/>
            <p>Công ty TNHH Gạch cổ Bát Tràng rất mong gìn giữ được các sản phẩm cổ của ông cha và làng nghề Bát Tràng để đưa các sản phẩm của Công ty đến với đông đảo khách hàng trên toàn quốc cũng như quảng bá một sản phẩm truyền thống của Việt Nam ra toàn thế giới.</p>
            <br/>
            <p><b>Người sáng lập - Ông Lê Thu Cẩm</b></p>
          </div>
        </div>
      </div>
    </MainContainer>    
  )
}

export default AboutUs;