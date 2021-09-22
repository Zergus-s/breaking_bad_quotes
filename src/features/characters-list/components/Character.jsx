import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../routing/Routes';
import styles from '../views/CharactersList.module.scss';

function Character(item) {
  item = item.item;
  return (
    <div className={styles.character_container}>
      <img className={styles.image} src={item.img} alt={item.name} />
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.nickname}>{item.nickname}</div>
        <button>
          <Link className={styles.link} to={RoutePath.CHARACTER}>
            View info
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Character;
