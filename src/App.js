import React from 'react';
import { Route } from 'react-router-dom';
import Header from './MainContents/Header';
import Footer from './MainContents/Footer';
import Home from './MainContents/Home';
import Bricks from './MainContents/Bricks';
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
