import React from "react";
import { Helmet } from "react-helmet";
import MainContainer from "../MainContainer";
import brickStyles from "./Bricks.module.css";
import homeStyles from "./Home.module.css";
import styles from "./Machines.module.css";

import { FormattedMessage } from "react-intl";

const Machines = () => {
  return (
    <MainContainer>
      <Helmet>
        <title>
          Gạch cổ Bát Tràng - Sản phẩm cơ khí phục vụ sản xuất gạch ngói
        </title>
        <meta
          name="description"
          content="Bên cạnh các sản phẩm gạch cổ, công ty TNHH Gạch Cổ Bát Tràng là đơn vị chuyên cung cấp các sản phẩm cơ khí phục vụ sản xuất gạch ngói với kinh nghiệm trên 20 năm.
          Chúng tôi tự hào bằng chính sự sáng tạo của mình đã giúp các doanh nghiệp rút ngắn quá trình sản xuất, tiết kiệm nguyên nhiên liệu, nhân công, nhằm giảm thiểu tối đa chi phí."
        />
      </Helmet>
      <div className={homeStyles.MainContent}>
        <div className={brickStyles.Article}>
          <div className={brickStyles.Title}>
            <FormattedMessage
              id="topMenu.machines"
              defaultMessage="CNC Machines"
            />
          </div>
          <div className={brickStyles.Text}>
            <p>
              Bên cạnh các sản phẩm gạch cổ, công ty TNHH Gạch Cổ Bát Tràng là
              đơn vị chuyên cung cấp các sản phẩm cơ khí phục vụ sản xuất gạch
              ngói với kinh nghiệm trên 20 năm. Chúng tôi tự hào bằng chính sự
              sáng tạo của mình đã giúp các doanh nghiệp rút ngắn quá trình sản
              xuất, tiết kiệm nguyên nhiên liệu, nhân công, nhằm giảm thiểu tối
              đa chi phí. Các sản phẩm tiêu biểu được chúng tôi cung ứng bao
              gồm:
            </p>
            <br />
            <p>
              <b>Các loại máy cơ khí phục vụ sản xuất gạch ngói:</b>
            </p>
            <br />
            <ol className={styles.Machines}>
              <li>
                Máy ngói 6 mặt cắt bavia tự động bao gồm cả khuôn ngói, bàn vỗ
                Ganet và băng tải ra sản phẩm
              </li>
              <video controls>
                <source src="/videos/machine-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <br />
              <video controls>
                <source src="/videos/machine-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <li>
                Máy ép ngói 5 mặt bao gồm cả khuôn ngói, bàn vỗ Ganet và băng
                tải ra sản phẩm
              </li>
              <li>Máy dập ngói mũi hài 2 viên tự động</li>
              <video controls>
                <source src="/videos/machine-3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <li>Máy luyện đùn chân không 300</li>
              <li>Máy dập ngói thủ công</li>
              <li>Máy ép thủy lực song động</li>
              <li>Máy đùn thô EG2</li>
            </ol>
            <br />
            <p>
              <b>
                Các loại khuôn mẫu, hộp dao theo yêu cầu của khách hàng như:
              </b>
            </p>
            <p>
              Khuôn ngói 22, khuôn ngói hài cổ, khuôn ngói vẩy cá, khuôn ngói
              mũi hài, khuôn ngói bò, khuôn ngói hài ri, khuôn ngói nóc 380,
              khuôn ngói hài đại, khuôn ngói hài 270, khuôn ngói rìa, khuôn ngói
              ống, khuôn tạo hình gạch kê chân, khuôn gạch 300, khuôn tạo hình
              gạch 7 viên, khuôn gạch samot ...
            </p>
            <br />
            <p>
              <b>Các chi tiết cơ khí đơn lẻ:</b>
            </p>
            <p>
              Vành dẫn hướng sao, bánh răng, vòng bi, trục buly bánh đà, quả
              đào, bộ lót khuôn, trục con lăn, bạc đồng, quạt hút, van hút, băng
              tải thu cấp liệu, vanh đè bavia ...
            </p>
            <br />
            <p>
              Với phương châm “đồng hành cùng phát triển”, chúng tôi cam kết
              chuyển giao toàn bộ công nghệ sản xuất cùng với việc cung ứng sản
              phẩm. Hãy liên hệ ngay với chúng tôi để nhận được sản phẩm chất
              lượng với giá cả hợp lý nhất.
            </p>
            {/* <br/>
            <p><b>Một số hình ảnh khuôn mẫu gạch ngói:</b></p> */}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Machines;
