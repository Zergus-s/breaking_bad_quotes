import React from 'react';
import styles from './Pagination.module.scss';

function Pagination({ setPage, currentPage, lastPage }) {
  return (
    <div className={styles.pagination}>
      {currentPage < 2 || <button onClick={() => setPage(1)}>{`<<`}</button>}

      {currentPage < 2 || (
        <button onClick={() => setPage(+currentPage - 1)}>{`<`}</button>
      )}

      <div className={styles.pageInfo}>
        {currentPage} of {lastPage}
      </div>

      {currentPage >= lastPage || (
        <button onClick={() => setPage(+currentPage + 1)}>{`>`}</button>
      )}

      {currentPage >= lastPage || (
        <button onClick={() => setPage(lastPage)}>{`>>`}</button>
      )}
    </div>
  );
}

export default Pagination;
