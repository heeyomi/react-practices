import React from 'react';
import logo from './assets/images/logo.png';
import styles from './assets/css/App.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          React Week 과제 입니다.
        </p>
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
