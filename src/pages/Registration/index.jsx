import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';

export const Registration = (props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.enter}>
        <h1>Вход</h1>
        <p>Электронная почта или телефон</p>
        <div className={styles.form}>
          <div className={styles.form_item}>
            <img src="images/user.svg"></img>
            <input type="text" placeholder="Логин" />
          </div>
          <div className={styles.form_item}>
            <img src="images/Lock_icon.svg"></img>
            <input type="password" placeholder="Пароль" />
            <img src="images/Eye_slash.svg"></img>
          </div>
          <p className={styles.forgot_pass}>Забыли пароль?</p>
          <Link to="/profile" className={styles.btn}>
            <button>
              <div>Войти</div>
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h1>Регистрация</h1>
        <p>Электронная почта или телефон</p>
        <div className={styles.form}>
          <div className={styles.form_item}>
            <img src="images/user.svg"></img>
            <input type="text" placeholder="Имя" />
          </div>
          <div className={styles.form_item}>
            <img src="images/Message.svg"></img>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.form_item}>
            <img src="images/Lock_icon.svg"></img>
            <input type="text" placeholder="Пароль" />
            <img src="images/Eye_slash.svg"></img>
          </div>
          <Link to="profile" className={styles.btn}>
            <button>
              <div>Регистрация</div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
