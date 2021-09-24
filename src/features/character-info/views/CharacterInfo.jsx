import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RoutePath } from '../../routing/Routes';

import styles from './CharacterInfo.module.scss';

export default function CharacterInfo(props) {
  const characters = useSelector((state) => state.characters.characters);
  const id = props.match.params.charId.replace(':charId:', '');
  const item =
    characters.filter((item) => item.char_id === +id)[0] ||
    JSON.parse(localStorage.getItem('character'));
  localStorage.setItem('character', JSON.stringify(item));

  return (
    <div className={styles.characterWrapperInfo}>
      <h1>Character Info</h1>
      <div className={styles.thumb}>
        <img src={item.img} alt={item.name} />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.text}>Name: </div>
          {item.name}
        </div>
        <div>
          <div className={styles.text}>Nickname: </div>
          {item.nickname}
        </div>
        <div>
          <div className={styles.text}>Birthday: </div>
          {item.birthday}
        </div>
        <div>
          <div className={styles.text}>Status: </div>
          {item.status}
        </div>
        <div className={styles.link}>
          <NavLink to={RoutePath.CHARACTER_QUOTES}>View Quotes</NavLink>
        </div>
      </div>
    </div>
  );
}
