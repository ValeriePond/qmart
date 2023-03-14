import { Link } from 'react-router-dom';
import styles from './Confirm.module.scss';
import axios from 'axios';
import React from 'react';
import AppContext from '../../components/context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Confirm = ({ onRemove, items = [] }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const onClickOrder = async () => {
    try {
      const { data } = await axios.post('https://6298d5d6f2decf5bb74cc366.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://6298d5d6f2decf5bb74cc366.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
  };

  const totalPrice = cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  const finalPrice = totalPrice + (totalPrice * 10) / 100;
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.sector}>
          <section>
            <p>Контактные данные</p>
            <div className={styles.form}>
              <div className={styles.form_item}>
                <input type="text" placeholder="Имя" />
              </div>
              <div className={styles.form_item}>
                <input type="text" placeholder="Номер телефона" />
              </div>
            </div>
          </section>
          <section>
            <p>Адрес доставки</p>
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
            </div>
          </section>
          <section>
            <p>Удобный способ оплаты</p>
            <div className={styles.form}>
              <div className={styles.form_item}>
                <select>
                  <option>Картой в приложении</option>
                  <option>Картой курьеру</option>
                  <option>Наличными</option>
                </select>
              </div>
              <div className={styles.form_item}>
                <input type="text" placeholder="Промокод на скидку" />
              </div>
            </div>
          </section>
          <section>
            <p>Выберете удобное время</p>
            <div className={styles.form}>
              <div className={styles.form_item}>
                <input type="date" placeholder="Выбрать дату" />
              </div>
            </div>
            <div className={styles.selector_btn}>
              <div className={styles.selector_btn_select}>14.00-17.00</div>
              <div className={styles.selector_btn_select}>17.00-20.00</div>
              <div className={styles.selector_btn_select}>20.00-23.00</div>
            </div>
          </section>
          <div className={styles.span}>
            *Стоимость доставки 1000 тг. При заказе свыше 20 000 тг доставка бесплатная
          </div>
        </div>
        <div className={styles.sector}>
          <section>
            <p>Чаевые курьеру</p>
            <div className={styles.selector_btn}>
              <div className={styles.selector_btn_select}>0%</div>
              <div className={styles.selector_btn_select}>2%</div>
              <div className={styles.selector_btn_select}>5%</div>
              <div className={styles.selector_btn_select}>10%</div>
            </div>
          </section>
          <section className={styles.total}>
            <h3>Итого:</h3>
            <hr></hr>
            <div className={styles.total_item}>
              <p>Стоимость заказа</p>
              <p className={styles.count}>{totalPrice} тг</p>
            </div>
            <div className={styles.total_item}>
              <p>Чаевые курьеру:</p>
              <p className={styles.count}>10 %</p>
            </div>

            <hr></hr>
            <div className={styles.total_item_1}>
              <h3>К оплате:</h3>
              <h3 className={styles.count}>{finalPrice} тг</h3>
            </div>
            <Link to="/order">
              <button onClick={onClickOrder}>
                <div>Подтвердить</div>
              </button>
            </Link>
          </section>
        </div>
      </div>
      <div className={styles.sector}>
        <section className={styles.step}>
          <h2>1. Корзина</h2>
          <h2 className={styles.selected}>2. Адрес и время доставки</h2>
          <h2>3. Подтверждение</h2>
        </section>
      </div>
    </div>
  );
};
