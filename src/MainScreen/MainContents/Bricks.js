import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer";
import styles from "./Bricks.module.css";
import homeStyles from "./Home.module.css";
import { allBricks } from "./../../data/bricks";

import { FormattedMessage } from "react-intl";

const Bricks = () => {
  // import all bricks from the brick data file
  const bricks = Object.values(allBricks);

  // useState to keep track of selected brick type
  const [brickType, setBrickType] = useState(null);

  // filter sorted bricks based on selected brick type
  const sortedBricks = brickType
    ? bricks.filter((brick) => brick.type && brick.type.includes(brickType))
    : bricks;

  return (
    <MainContainer>
      <Helmet>
        <title>
          Gạch cổ Bát Tràng - Các loại sản phẩm gạch trang trí, xây dựng và lát
          nền
        </title>
        <meta
          name="description"
          content="Công ty TNHH Gạch Cổ Bát Tràng sản xuất gạch đất sét tự nhiên, chất lượng cao, thân thiện với môi trường.
          Gạch cổ Bát Tràng là sản phẩm bền vững, trường tồn theo thời gian cùng lịch sử và thời đại.
          Nhà sáng lập, ông Lê Thu Cẩm là người duy nhất của làng Bát Tràng còn phục hồi các loại sản phẩm từ đời Lý, Trần, Lê, v,v…
          tất cả các loại đất nung làm thủ công các cụ ngày xưa truyền lại.
          Các sản phẩm có thể được sử dụng để làm gạch trang trí, xây dựng, lát nền và nhiều mục đích khác cho các công trình cổ và hiện đại."
        />
      </Helmet>
      <div className={homeStyles.MainContent}>
        <div className={styles.Article}>
          <div className={styles.Title}>
            <FormattedMessage id="bricks.title" defaultMessage="Bricks" />
          </div>
          <div className={styles.Text}>
            <FormattedMessage
              id="bricks.para1"
              defaultMessage="Bat Trang Ancient Bricks Co., Ltd produces natural, high quality and environmentally friendly clay bricks.
              Bat Trang ancient bricks are sustainable products, lasting over time making history and memories through their use."
            />
            <br />
            <br />
            <FormattedMessage
              id="bricks.para2"
              defaultMessage="Our products always ensure the integrity of the whole product, so your works will always be cool in the summer and warm in the winter,
              with thin and light tiles but good compressive strength, tough but not brittle like those which burn with gas or tunnel kilns. Products with red, yellow
              tones, etc. are all colors of earth and fire, the color of bricks will last forever with no discoloration or moss and can overcome many severe weather
              conditions without any maintenance, as evidenced by the bricks excavated in the relics of Thang Long Imperial Citadel. Our products are not flammable.
              Another advantage of our products is their flexibility. The layout of a building is always diverse, with unique design ideas, we always create a product
              that suits your work, meeting the requirements both during the construction process and throughout the life of the building."
            />
            <br />
            <br />
            <FormattedMessage
              id="bricks.para3"
              defaultMessage="The founder, Mr. Le Thu Cam was the only person in Bat Trang village who restored all kinds of products from the Ly,
              Tran, Le eras, etc., all types of earthenware by hand-made old tools. We always uphold and enhance the traditional values. "
            />
            <br />
            <br />
            <FormattedMessage
              id="bricks.para4"
              defaultMessage="Bat Trang Ancient Brick Co., Ltd also provides wall and floor tiles with various colors and sizes.
              In addition, we also accept orders customized to the needs and wants of our customers."
            />
          </div>
        </div>
        <div className={styles.ProductsContainer}>
          <div className={styles.ProductFilter}>
            <button onClick={() => setBrickType(null)}>
              <FormattedMessage
                id="bricks.allAssortments"
                defaultMessage="All assortments"
              />
            </button>
            <button onClick={() => setBrickType(1)}>
              <FormattedMessage
                id="bricks.bricksType"
                defaultMessage="Bricks"
              />
            </button>
            <button onClick={() => setBrickType(2)}>
              <FormattedMessage
                id="bricks.wallTilesType"
                defaultMessage="Wall Tiles"
              />
            </button>
            <button onClick={() => setBrickType(3)}>
              <FormattedMessage
                id="bricks.floorTilesType"
                defaultMessage="Floor Tiles"
              />
            </button>
            <button onClick={() => setBrickType(4)}>
              <FormattedMessage id="bricks.decorType" defaultMessage="Decor" />
            </button>
          </div>
          <div className={homeStyles.Separator} />

          <div className={styles.ProductList}>
            {sortedBricks.map((brick) => (
              <Link
                to={`/bricks/${brick.id}`}
                className={styles.ProductWrapper}
                key={brick.id}
              >
                <div
                  className={styles.Product}
                  style={{
                    backgroundImage: `url(${brick.urls.brickUrl})`,
                  }}
                />
                <div className={styles.ProductOverlay}>
                  <div
                    className={`${styles.ProductLayer} ${styles.ProductOnHover}`}
                  />
                  <div
                    className={`${styles.ProductLayer} ${styles.ProductName}`}
                  >
                    {brick.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Bricks;
