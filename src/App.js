import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './MainScreen/Header';
import Footer from './MainScreen/Footer';
import Home from './MainScreen/MainContents/Home';
import Bricks from './MainScreen/MainContents/Bricks';
import Brick from './MainScreen/MainContents/Brick';
import Machines from './MainScreen/MainContents/Machines';
import AboutUs from './MainScreen/MainContents/AboutUs';
import Contact from './MainScreen/MainContents/Contact';
import MobileMenu from './Components/MobileMenu';
import ModalBackground from './Components/ModalBackground';
import styles from './App.module.css';

const App = (props) => {
  const { setLang } = props;
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.App}>
      <Header
        setLang={setLang}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/bricks'} component={Bricks} />
      <Route exact path={'/bricks/:id'} component={Brick} />
      <Route exact path={'/machines'} component={Machines} />
      <Route exact path={'/aboutus'} component={AboutUs} />
      <Route exact path={'/contact'} component={Contact} />
      <Footer
        setLang={setLang}
      />
      {/* Modal background and mobile menu components */}
      <ModalBackground
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <MobileMenu
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        setLang={setLang}
      />
    </div>
  );
}

export default App;
