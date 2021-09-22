import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { RoutePath } from '../routing/Routes';

export default function NavBar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul>
        <li className={styles.banner}>BREAKING BAD QUOTES</li>
        <li className={styles.characters_link}>
          <NavLink activeClassName={styles.active} to={RoutePath.CHARACTERS}>
            CHARACTERS
          </NavLink>
        </li>
        <li className={styles.favorites_link}>
          <NavLink activeClassName={styles.active} to={RoutePath.FAVORITES}>
            FAVORITES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
