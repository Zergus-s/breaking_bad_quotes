import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../../routing/Routes';
import styles from './Character.module.scss';

function Character({ item }) {
  return (
    <div className={styles.characterWrapper}>
      <div className={styles.thumb}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.nickname}>{item.nickname}</div>

        <NavLink
          className={styles.link}
          to={RoutePath.CHARACTER + ':' + item.char_id}
        >
          View info
        </NavLink>
      </div>
    </div>
  );
}

export default Character;
