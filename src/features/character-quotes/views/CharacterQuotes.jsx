import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCharacterQuotes } from '../redux/CharacterQuoteSlice';
import Quote from '../../shared/components/Quote';

import {
  addQuote,
  getFavQuotes,
  removeQuote,
} from '../../favorite-quotes/redux/FavoriteQuoteSlice';

import styles from './CharacterQuotes.module.scss';

function CharacterQuotes(props) {
  useEffect(() => {
    dispatch(fetchCharacterQuotes(`quote?author=${author}`));
    getFavQuotes();
  }, []);
  const {
    quotesList: { quotes, status },
    favoriteQuotes: { favQuotes },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const author = props.match.params.charName.replace(' ', '+');

  switch (status) {
    case 'failed':
      console.error();
      break;
    case 'loading':
      return <h1>Loading</h1>;
    case 'success':
      return (
        <div className={styles.quotes}>
          <h1>Character quotes</h1>
          {!quotes.length && <h2>No quotes</h2>}
          {quotes &&
            quotes.map((item) => (
              <Quote
                key={item.quote_id + item.author}
                item={item.quote}
                author={item.author}
                button={
                  favQuotes.some((quote) => quote.quote_id === item.quote_id)
                    ? 'Remove Quote'
                    : 'Add Quote'
                }
                onClick={() =>
                  favQuotes.some((quote) => quote.quote_id === item.quote_id)
                    ? dispatch(removeQuote(item))
                    : dispatch(addQuote(item))
                }
              />
            ))}
        </div>
      );

    default:
      return null;
  }
}

export default CharacterQuotes;
