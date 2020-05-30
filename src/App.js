import React from 'react';
import { Route } from 'react-router-dom';
import Header from './MainScreen/Header';
import Footer from './MainScreen/Footer';
import Home from './MainScreen/MainContents/Home';
import Bricks from './MainScreen/MainContents/Bricks';
import Brick from './MainScreen/MainContents/Brick';
import Machines from './MainScreen/MainContents/Machines';
import AboutUs from './MainScreen/MainContents/AboutUs';
import Contact from './MainScreen/MainContents/Contact';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/bricks'} component={Bricks} />
      <Route exact path={'/bricks/:id'} component={Brick} />
      <Route exact path={'/machines'} component={Machines} />
      <Route exact path={'/aboutus'} component={AboutUs} />
      <Route exact path={'/contact'} component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
