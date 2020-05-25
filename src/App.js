import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
