import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const modalNode = document.querySelector('#modal');
function Modal({ isOpen, headerText, bodyText, onConfirm, onCancel }) {
  if (!isOpen) return null;
  const backdropClickHandler = (e) => {
    if (e.target.id === 'modalBackdrop') onCancel();
  };
  return ReactDOM.createPortal(
    <div
      id="modalBackdrop"
      className={styles.backDrop}
      onClick={backdropClickHandler}
    >
      <div className={styles.modal}>
        <div className={styles.header}>{headerText}</div>
        <div className={styles.body}>{bodyText}</div>
        <div className={styles.footer}>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>,
    modalNode
  );
}

export default Modal;
