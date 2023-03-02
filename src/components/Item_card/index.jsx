import React from 'react';
import AppContext from '../context';

import styles from './Item_card.module.scss';
export const Item_card = ({ onClose, items = [], onCart, onClickCart }) => {
  const [openId, setOpenId] = React.useState('');

  const toggleDetails = (thingId) => {
    setOpenId(thingId);
  };

  const [count, setCount] = React.useState(1);
  //weight = obj.weight;
  const plus = (weight) => {
    if (weight === 'кг') {
      setCount(count + 0.5);
    } else {
      setCount(count + 1);
    }
  };

  const minus = (weight) => {
    if (weight === 'кг') {
      setCount(count - 0.5);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="overlay">
      {items.map((obj) => (
        <div className={styles.cardWrap} key={obj.id}>
          <img
            className={styles.removeBtn}
            onClick={onClose}
            src="images/close.svg"
            alt="img"></img>
          <div className={styles.cardOpen}>
            <div className={styles.left}>
              <div className={styles.topImg}>
                <div className={styles.rating}>
                  <img src="images/rating.svg"></img>
                  <p>{obj.rating}</p>
                </div>
                <div className={styles.tags}>
                  {obj.tags.map((tag) => (
                    <div className={styles.tag}>{tag}</div>
                  ))}
                </div>
              </div>
              <img className={styles.imgLeft} src={obj.imageUrl} alt="item"></img>
            </div>
            <div className={styles.right}>
              <p className={styles.company}>{obj.company}</p>
              <h2 className={styles.title}>{obj.title}</h2>

              <div className={styles.description}>{obj.description}</div>
              <div className={styles.price}>
                <p>{obj.price}</p>
                <p>тг/{obj.weight}</p>
              </div>
              <div className={styles.total}>
                <div className={styles.counter}>
                  <button className={styles.weight} onClick={minus}>
                    <img src="images/minus.svg" alt="" />
                  </button>
                  <div className={styles.count}>
                    <p>{count}</p>
                  </div>
                  <button className={styles.weight} onClick={plus}>
                    <img src="images/plus.svg" alt="" />
                  </button>
                </div>
                <div className={styles.favorites}>
                  <img src="images/favorites1.svg"></img>
                </div>
              </div>
              <div>
                <button className={styles.add} onClick={onClickCart}>
                  <div>В корзину</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
