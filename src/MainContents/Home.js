import React from 'react';
import HomePhoto from '../Components/HomePhoto';
import MainContainer from './MainContainer';
// import styles from './Home.module.css';

const Home = () => {
  return (    
    <MainContainer>
      <HomePhoto />
      <div
        id='introduction'
      >
        Home page
      </div>
    </MainContainer>
  )
}

export default Home;