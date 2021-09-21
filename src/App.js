import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './features/navbar/NavBar';
import CharactersList from './features/characters-list/views/CharactersList';
import FavoriteQuotes from './features/favorite-quotes/views/FavoriteQuotes';
import CharacterInfo from './features/character-info/views/CharacterInfo';
import CharacterQuotes from './features/character-quotes/views/CharacterQuotes';
function App(props) {
  console.log(props, CharacterQuotes);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Switch>
          <Route
            path="/characters/:charName/quotes"
            component={CharacterQuotes}
          />
          <Route path="/characters/:charld" component={CharacterInfo} />
          <Route path="/characters" component={CharactersList} />
          <Route path="/favorites" component={FavoriteQuotes} />
          <Redirect from="/" to="/characters" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
