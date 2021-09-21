import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CharacterInfo() {
  return (
    <div>
      Character info{' '}
      <NavLink to="/characters/:charName/quotes">CharacterQuotes</NavLink>
    </div>
  );
}
