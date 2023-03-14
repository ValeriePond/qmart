import { Link } from 'react-router-dom';
import { Item_cart } from '../../components/Item_cart';
import styles from './Cart.module.scss';
import AppContext from '../../components/context';

import axios from 'axios';
import React from 'react';

export const Cart = ({ onRemove, items = [] }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  const totalItems = cartItems.reduce((sum, obj) => obj.count + sum, 0);
  const totalWeight = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        {!!items.length ? (
          <div>
            {items.map((obj) => (
              <Item_cart
                id={obj.id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                price={obj.count}
                count={obj.count}
                onRemove={onRemove}
                weight={obj.weight}
                {...obj}
              />
            ))}
          </div>
        ) : (
          <div>
            <img src="./images/salad_1.png"></img>
            <h1>Ваша корзина пуста</h1>
            <hr></hr>
            <Link to="/" className={styles.return_link}>
              <p>Назад к категориям</p>
            </Link>
          </div>
        )}
      </section>
      <section className={styles.total}>
        <h3>Ваш заказ:</h3>
        <hr></hr>
        <div className={styles.total_item}>
          <p>Общий вес заказа:</p>
          <p className={styles.count}>{totalItems} кг</p>
        </div>
        <div className={styles.total_item}>
          <p>Всего товаров:</p>
          <p className={styles.count}>{items.length} шт</p>
        </div>
        <div className={styles.total_item_1}>
          <h3>Итого:</h3>
          <h3 className={styles.count}>{totalPrice} тг</h3>
        </div>
        <Link to="/confirm">
          <button>
            <div>Оформить заказ</div>
          </button>
        </Link>
      </section>
      <section className={styles.step}>
        <h2 className={styles.selected}>1. Корзина</h2>
        <h2>2. Адрес и время доставки</h2>
        <h2>3. Подтверждение</h2>
      </section>
    </div>
  );
};
