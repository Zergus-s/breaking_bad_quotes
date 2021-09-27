import React, { useEffect } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RoutePath } from '../../routing/Routes';

import styles from './CharacterInfo.module.scss';
import { fetchCharactersInfo } from '../redux/CharacterInfoSlice';

export default function CharacterInfo(props) {
  const id = props.match.params.charId;
  useEffect(() => {
    dispatch(fetchCharactersInfo(`characters/${id}`));
  }, []);
  const { character, status } = useSelector((state) => state.charInfo);
  const dispatch = useDispatch();

  switch (status) {
    case 'failed':
      return <h1>Error</h1>;
    case 'loading' || null || character === undefined:
      return <h1>Loading</h1>;
    case 'success':
      return (
        <div className={styles.characterWrapperInfo}>
          <h1>Character Info</h1>
          <div className={styles.thumb}>
            <img src={character.img || null} alt={character.name} />
          </div>
          <div className={styles.info}>
            <div>
              <div className={styles.text}>Name: </div>
              {character.name}
            </div>
            <div>
              <div className={styles.text}>Nickname: </div>
              {character.nickname}
            </div>
            <div>
              <div className={styles.text}>Birthday: </div>
              {character.birthday}
            </div>
            <div>
              <div className={styles.text}>Status: </div>
              {character.status}
            </div>
            <div className={styles.link}>
              <NavLink
                to={generatePath(`${RoutePath.CHARACTER_QUOTES}`, {
                  charName: encodeURIComponent(character.name),
                })}
              >
                View Quotes
              </NavLink>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
