import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { RoutePath } from '../routing/Routes';

export default function NavBar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.banner}>BREAKING BAD QUOTES</div>
      <div>
        <NavLink className={styles.navItem} to={RoutePath.CHARACTERS}>
          CHARACTERS
        </NavLink>
        <NavLink className={styles.navItem} to={RoutePath.FAVORITES}>
          FAVORITES
        </NavLink>
      </div>
    </nav>
  );
}
