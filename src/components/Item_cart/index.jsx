import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Item_cart.module.scss';
export const Item_cart = ({ id, title, imageUrl, price, count, weight, onRemove }) => {
  const [count2, setCount] = React.useState(count);
  const plus = () => {
    if (weight === 'кг') {
      setCount(count2 + 0.5);
    } else {
      setCount(count2 + 1);
    }
  };

  const minus = () => {
    if (weight === 'кг') {
      setCount(count2 - 0.5);
    } else {
      setCount(count2 - 1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl}></img>
      <div className={styles.name}>
        <p>{weight}</p>
        <h3>{title}</h3>
      </div>
      <div className={styles.counter}>
        <button onClick={minus}>
          <img src="images/minus.svg"></img>
        </button>
        <div>
          <p>{count2}</p>
        </div>
        <button onClick={plus}>
          <img src="images/plus.svg"></img>
        </button>
      </div>
      <div className={styles.price}>
        <p>{price}</p>
        <p>тг</p>
      </div>
      <a onClick={onRemove}>
        <img src="images/trash.svg"></img>
      </a>
    </div>
  );
};
