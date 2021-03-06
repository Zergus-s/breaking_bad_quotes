import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Quote from '../../shared/components/Quote';
import useModal from '../../shared/hooks/useModal';
import { removeQuote } from '../redux/FavoriteQuoteSlice';

import styles from './FavoriteQuotes.module.scss';

export default function CharacterInfo() {
  const { favQuotes } = useSelector((state) => state.favoriteQuotes);
  const dispatch = useDispatch();
  const { openModal, closeModal, renderModal } = useModal();

  const removeHandler = (item) => {
    console.log('dfgsd');
    dispatch(removeQuote(item));
  };

  return (
    <div className={styles.quotes}>
      <h1>Favorite quotes</h1>
      {!favQuotes.length && <h2>No quotes</h2>}
      {favQuotes &&
        favQuotes.map((item) => (
          <Quote
            key={item.quote_id + item.author}
            item={item.quote}
            author={item.author}
            button={favQuotes.includes(item) ? 'Remove Quote' : 'Add Quote'}
            onClick={() => openModal(item)}
          />
        ))}
      {renderModal(
        'Confirmation',
        'Are you sure you want to delete?',
        removeHandler
      )}
    </div>
  );
}
