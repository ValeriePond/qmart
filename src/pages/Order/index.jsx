import { Link } from 'react-router-dom';
import styles from './Order.module.scss';

export const Order = (props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        <img src="./images/salad_0.png"></img>
        <h1>Ваш заказ передан доставке</h1>
        <hr></hr>
        <Link to="/" className={styles.return_link}>
          <p>На главную</p>
        </Link>
      </section>
      <section className={styles.step}>
        <h2>1. Корзина</h2>
        <h2>2. Адрес и время доставки</h2>
        <h2 className={styles.selected}>3. Подтверждение</h2>
      </section>
    </div>
  );
};
