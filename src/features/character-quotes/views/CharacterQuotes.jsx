import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacterQuotes } from '../redux/CharacterQuoteSlice';
import styles from './CharacterQuotes.module.scss';
import Quote from '../components/Quote';

function CharacterQuotes(props) {
  const author = props.match.params.charName.replace(' ', '+');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacterQuotes(`quote?author=${author}`));
  }, []);
  const { quotes, status } = useSelector((state) => state.quotes);

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
          {quotes.map((item) => (
            <Quote key={item.quote_id} item={item.quote} author={author} />
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default CharacterQuotes;
