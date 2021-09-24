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
  const { characters, status } = useSelector((state) => state.charInfo);
  const dispatch = useDispatch();

  const item = characters.filter((item) => item.char_id === +id)[0];

  switch (status) {
    case 'failed':
      return <h1>Error</h1>;
    case 'loading' || 'null':
      return <h1>Loading</h1>;
    case 'success':
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
              <NavLink
                to={generatePath(`${RoutePath.CHARACTER_QUOTES}`, {
                  charName: encodeURIComponent(item.name),
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
