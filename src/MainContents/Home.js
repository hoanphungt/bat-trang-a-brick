import React from 'react';
import HomePhoto from '../Components/HomePhoto';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div
      className={styles.MainContainer}
    >
      <HomePhoto />
      <div
        id='introduction'
      >
        Home page
      </div>
    </div>
  )
}

export default Home;