import React from 'react';
import styles from './Quote.module.scss';

function Quote({ item, author, button, onClick }) {
  return (
    <div className={styles.quoteWrapper}>
      <div className={styles.quote}>{`"${item}"`}</div>
      <div className={styles.author}>{author}</div>
      <div onClick={onClick} className={styles.button}>
        {button}
      </div>
    </div>
  );
}

export default Quote;
