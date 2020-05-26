import React from 'react';
import { Route } from 'react-router-dom';
import Header from './MainScreen/Header';
import Footer from './MainScreen/Footer';
import Home from './MainScreen/MainContents/Home';
import Bricks from './MainScreen/MainContents/Bricks';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/bricks'} component={Bricks} />
      <Footer />
    </div>
  );
}

export default App;
