import { Link } from 'react-router-dom';
import { Item_cart } from '../../components/Item_cart';
import styles from './Cart.module.scss';

export const Cart = (props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        {/*
<img src="./images/salad_1.png"></img>
        <h1>Ваша корзина пуста</h1>
        <hr></hr>
        <Link to="/" className={styles.return_link}>
          <p>Назад к категориям</p>
  </Link>*/}
        <Item_cart />
      </section>
      <section className={styles.total}>
        <h3>Ваш заказ:</h3>
        <hr></hr>
        <div className={styles.total_item}>
          <p>Общий вес заказа:</p>
          <p className={styles.count}>0.00 кг</p>
        </div>
        <div className={styles.total_item}>
          <p>Всего товаров:</p>
          <p className={styles.count}>0 шт</p>
        </div>
        <div className={styles.total_item_1}>
          <h3>Итого:</h3>
          <h3 className={styles.count}>0.00 тг</h3>
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
