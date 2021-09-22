import React from 'react';
import { NavLink } from 'react-router-dom';

import { RoutePath } from '../../routing/Routes';

export default function CharacterInfo() {
  return (
    <div>
      Character info
      <NavLink to={RoutePath.CHARACTER_QUOTES}>CharacterQuotes</NavLink>
    </div>
  );
}
