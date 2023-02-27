import React from 'react';
import AppContext from '../context';

import styles from './Item_card.module.scss';
export const Item_card = ({ onClose, items = [] }) => {
  const [openId, setOpenId] = React.useState('');

  const toggleDetails = (thingId) => {
    setOpenId(thingId);
  };

  return (
    <div className="overlay">
      {items.map((obj) => (
        <div className={styles.cardWrap} key={obj.id}>
          <img className={styles.removeBtn} onClick={onClose} src="img/delete.svg" alt="img"></img>
          <div className={styles.cardOpen}>
            <div className={styles.imageTags}>
              <img className={styles.imgLeft} src={obj.imageUrl} alt="item"></img>
            </div>

            <div className={styles.cardLeftSide}>
              <h2>{obj.title}</h2>
              <div className={styles.priceCatalog}>
                <h3>{obj.price} KZT</h3>
                <p>за 100 гр</p>
              </div>
              <summary>Подробнее</summary>
              <div>{obj.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
