import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { allBricks } from "./../data/bricks";
import styles from "./Slideshow.module.css";
import homeStyles from "./../MainScreen/MainContents/Home.module.css";

import { FormattedMessage } from "react-intl";

const Slideshow = ({ setWidth }) => {
  // List of all popular products
  const popularProducts = Object.values(allBricks).filter(
    (brick) => brick.popular,
  );

  // Use react hooks to keep selected product id in react state
  const [productId, setProductId] = useState(0);

  // Helper function to change product
  const changeProduct = (bool) => {
    if (bool && productId < popularProducts.length - 1) {
      setProductId(productId + 1);
    } else if (!bool && productId > 0) {
      setProductId(productId - 1);
    } else if (bool) {
      setProductId(0);
    } else {
      // bool === false
      setProductId(popularProducts.length - 1);
    }
  };

  // useEffect and setInterval to automatically change products in the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (productId < popularProducts.length - 1) {
        setProductId(productId + 1);
      } else {
        setProductId(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [productId, popularProducts]);

  // Variable to keep the currently selected product
  const selectedProduct = popularProducts.find((_, i) => i === productId);

  return (
    <div className={styles.SlideshowContainer}>
      <div className={styles.SlideshowBar}>
        <div className={styles.SlideshowTitle}>
          <Link to={`/bricks`}>
            <FormattedMessage
              id="home.popularProducts"
              defaultMessage="Popular products"
            />
          </Link>
        </div>
        <div className={styles.SlideshowButtons}>
          <div
            className={styles.SlideshowButton}
            onClick={() => changeProduct(false)}
          >
            {"<"}
          </div>
          <div
            className={styles.SlideshowButton}
            onClick={() => changeProduct(true)}
          >
            {">"}
          </div>
        </div>
      </div>
      <div className={homeStyles.Separator} />
      <div className={styles.Slideshow}>
        <Link to={`/bricks/${selectedProduct.id}`}>
          <img
            className={styles.SlideshowPhoto}
            src={selectedProduct.urls.brickUrl}
            alt="brick"
            onLoad={(e) => setWidth(e.currentTarget.clientWidth)}
          />
        </Link>
      </div>
    </div>
  );
};

export default Slideshow;
