import React from 'react';
import AppContext from '../context';

import styles from './Confirmation.module.scss';
export const Card = ({ onClose, items = [] }) => {
  const [openId, setOpenId] = React.useState('');

  const toggleDetails = (thingId) => {
    setOpenId(thingId);
  };

  return (
    <div className="overlay">
      {items.map((obj) => (
        <div className={styles.cardWrap} key={obj.id}>
          <img
            className={'cu-p ' + styles.removeBtn}
            onClick={onClose}
            src="img/delete.svg"
            alt="img"></img>
          <h3>Подтвердите ваш заказ</h3>
          <div className={styles.cardOpen}>
            <Cart_item />
          </div>
        </div>
      ))}
    </div>
  );
};
