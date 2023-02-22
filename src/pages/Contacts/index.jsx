import styles from './Contacts.module.scss';

export const Contacts = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Контакты</h1>
      <div className={styles.box}>
        <section className={styles.feedbackForm}>
          <div className={styles.image}>
            <img src="images/form.jpeg"></img>
          </div>

          <div>
            <div className={styles.feedBack}>
              <h2>Свяжитесь с нами</h2>

              <div className={styles.mainForm}>
                <input placeholder="*Имя" type="text"></input>
                <input placeholder="*Email" type="text" />
                <input className={styles.message} placeholder="*Ваше сообщение" type="text" />
              </div>
              <div className={styles.button}>
                <button>
                  <div>Отправить</div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contacts}>
          <h3>Телефоны</h3>
          <p>+7 777 000 11 22</p>
          <p>+7 777 000 11 33</p>
          <h3>Почта</h3>
          <p>qmart@gmail.com</p>
        </section>
      </div>
    </div>
  );
};
