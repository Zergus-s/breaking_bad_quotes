import React, { Component } from 'react';
import styles from './Quote.module.scss';

function Quote({ item, author }) {
  console.log(author);
  return (
    <div className={styles.quoteWrapper}>
      <div className={styles.quote}>{`"${item}"`}</div>
      <div className={styles.author}>{author.replace('+', ' ')}</div>
      <div className={styles.button}>Button</div>
    </div>
  );
}

export default Quote;
