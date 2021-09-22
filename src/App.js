import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.scss';
import { fetchCaracters } from './features/characters-list/redux/CharactersSlice';
import NavBar from './features/navbar/NavBar';
import Routes from './features/routing/Routes';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCaracters());

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Routes />
      </main>
    </div>
  );
}

export default App;
