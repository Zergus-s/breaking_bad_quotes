import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CharactersList from '../characters-list/views/CharactersList';
import FavoriteQuotes from '../favorite-quotes/views/FavoriteQuotes';
import CharacterInfo from '../character-info/views/CharacterInfo';
import CharacterQuotes from '../character-quotes/views/CharacterQuotes';

export const RoutePath = {
  CHARACTERS: '/characters',
  CHARACTER: '/characters/:charId',
  CHARACTER_QUOTES: '/characters/:charName/quotes',
  FAVORITES: '/favorites',
};

function Routes() {
  return (
    <Switch>
      <Route path={RoutePath.CHARACTER_QUOTES} component={CharacterQuotes} />
      <Route path={RoutePath.CHARACTER} component={CharacterInfo} />
      <Route path={RoutePath.CHARACTERS} component={CharactersList} />
      <Route path={RoutePath.FAVORITES} component={FavoriteQuotes} />
      <Redirect to={RoutePath.CHARACTERS} />
    </Switch>
  );
}

export default Routes;
