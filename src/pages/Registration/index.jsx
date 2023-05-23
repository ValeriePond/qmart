import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';
import { useState } from 'react';
import axios from 'axios';

export default function Registration() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://api/', inputs);
    console.log(inputs);
  };
  return (
    <div className={styles.wrapper}>
      <section className={styles.enter}>
        <h1>Вход</h1>
        <p>Электронная почта или телефон</p>
        <div className={styles.form}>
          <div className={styles.form_item}>
            <img src="images/user.svg"></img>
            <input type="text" name="email" placeholder="Логин" />
          </div>
          <div className={styles.form_item}>
            <img src="images/Lock_icon.svg"></img>
            <input type="password" name="password" placeholder="Пароль" />
            <img src="images/Eye_slash.svg"></img>
          </div>
          <p className={styles.forgot_pass}>Забыли пароль?</p>
          <button>
            <div>Войти</div>
          </button>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Регистрация</h1>

          <p>Электронная почта или телефон</p>
          <div className={styles.form}>
            <div className={styles.form_item}>
              <img src="images/user.svg"></img>
              <input type="text" placeholder="Имя" name="name" onChange={handleChange} />
            </div>
            <div className={styles.form_item}>
              <img src="images/Message.svg"></img>
              <input type="text" placeholder="Email" name="email" onChange={handleChange} />
            </div>
            <div className={styles.form_item}>
              <img src="images/Lock_icon.svg"></img>
              <input type="text" placeholder="Пароль" name="password" onChange={handleChange} />
              <img src="images/Eye_slash.svg"></img>
            </div>
            <button>
              <div>Регистрация</div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
