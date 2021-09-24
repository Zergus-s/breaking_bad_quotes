import React from 'react';
import styles from './Pagination.module.scss';

function Pagination({ setPage, currentPage, lastPage }) {
  return (
    <div className={styles.pagination}>
      <button
        style={{ display: `${currentPage < 2 ? 'none' : 'block'}` }}
        onClick={() => setPage(1)}
      >{`<<`}</button>
      <button
        style={{ display: `${currentPage < 2 ? 'none' : 'block'}` }}
        onClick={() => setPage(+currentPage - 1)}
      >{`<`}</button>
      <div className={styles.pageInfo}>
        {currentPage} of {lastPage}
      </div>
      <button
        style={{ display: `${currentPage === lastPage ? 'none' : 'block'}` }}
        onClick={() => setPage(+currentPage + 1)}
      >{`>`}</button>
      <button
        style={{ display: `${currentPage === lastPage ? 'none' : 'block'}` }}
        onClick={() => setPage(lastPage)}
      >{`>>`}</button>
    </div>
  );
}

export default Pagination;
