import React from 'react';
import { useSelector } from 'react-redux';
import Character from '../components/Character';
import styles from './CharactersList.module.scss';

export default function CharactersList() {
  const { characters } = useSelector((state) => state.characters);
  return (
    <div className={styles.character_list}>
      <h2>Characters</h2>
      {characters.map((item) => {
        return <Character item={item} key={item.id + item.name} />;
      })}
    </div>
  );
}
