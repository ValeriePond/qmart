import { Link } from 'react-router-dom';
import styles from './Addresses.module.scss';

export const Addresses = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Сохраненные адреса</h1>
      <section></section>
      <section>
        <p>Добавить адрес доставки</p>
        <div className={styles.form}>
          <div className={styles.form_item}>
            <input type="text" placeholder="Город" />
          </div>
          <div className={styles.form_item}>
            <input type="text" placeholder="Улица" />
          </div>
          <div className={styles.address}>
            <div className={styles.form_item}>
              <input type="text" placeholder="Дом" />
            </div>
            <div className={styles.form_item}>
              <input type="text" placeholder="Квартира" />
            </div>
            <div className={styles.form_item}>
              <input type="text" placeholder="Этаж" />
            </div>
          </div>
          <div className={styles.form_item}>
            <input type="text" placeholder="Дополнительные сведения" />
          </div>
          <button>
            <div>Добавить</div>
          </button>
        </div>
      </section>
    </div>
  );
};
