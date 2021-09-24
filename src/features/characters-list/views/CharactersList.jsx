import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import Pagination from '../../pagination/Pagination';

import Character from '../components/Character';
import { fetchCharacters } from '../redux/CharactersSlice';

import styles from './CharactersList.module.scss';

const ITEMS_PER_PAGE = 10;

export default function CharactersList() {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get('page');

  useEffect(() => {
    if (!currentPage) {
      setPage(1);
    }
    dispatch(fetchCharacters());
  }, []);

  const setPage = (newPage) => {
    searchParams.set('page', newPage);
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const getSlicedCharacters = () => {
    const startIndex = (+currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return characters.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  return (
    <div className={styles.characterList}>
      <h2>Characters</h2>
      {getSlicedCharacters().map((item) => {
        return <Character item={item} key={item.id + item.name} />;
      })}
      <Pagination
        currentPage={+currentPage}
        lastPage={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
