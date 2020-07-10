import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
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
import { IntlProviderWrapper } from './IntlContext';

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <IntlProviderWrapper>
      <div className={styles.App}>
        <Header
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <Route exact path={'/:lang'} component={Home} />
        <Route exact path={'/'} render={() => <Redirect to={'/vi'}/>} />
        <Route exact path={'/:lang/bricks'} component={Bricks} />
        <Route exact path={'/:lang/bricks/:id'} component={Brick} />
        <Route exact path={'/:lang/machines'} component={Machines} />
        <Route exact path={'/:lang/aboutus'} component={AboutUs} />
        <Route exact path={'/:lang/contact'} component={Contact} />
        <Footer />
        {/* Modal background and mobile menu components */}
        <ModalBackground
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
        <MobileMenu
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
        />
      </div>
    </IntlProviderWrapper>
  );
}

export default App;
