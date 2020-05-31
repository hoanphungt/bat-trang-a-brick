import React from 'react';
import styles from './ModalBackground.module.css';

const ModalBackground = (props) => {
  return (
    <div
      className={`
        ${styles.ModalBackground}
        ${props.mobileMenu ? styles.VisibleModalBackground : ''}
      `}
    />
  )
}

export default ModalBackground;