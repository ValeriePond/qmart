import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';

export const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Персональные данные</h1>
      <div className={styles.data}>
        <div>
          <p>Контактные данные</p>
          <section>
            <div>
              <div className={styles.profile_item}>
                <span>Имя</span>
                <input placeholder="Валерия" type="text"></input>
              </div>
              <div className={styles.profile_item}>
                <span>Телефон</span>
                <input placeholder="+7-777-006-20-75" type="text"></input>
              </div>
              <div className={styles.profile_item}>
                <span>Почта</span>
                <input placeholder="190103203@stu.sdu.edu.kz" type="text"></input>
              </div>
            </div>
            <Link to="/profile" className={styles.btn}>
              <button>
                <div>Сохранить</div>
              </button>
            </Link>
          </section>
        </div>
        <div>
          <p>Изменить пароль</p>
          <section>
            <div>
              <div className={styles.profile_item}>
                <span>Текущий пароль</span>
                <input placeholder="Введите текущий пароль" type="parole"></input>
              </div>
              <div className={styles.profile_item}>
                <span>Новый пароль</span>
                <input placeholder="Введите новый пароль" type="parole"></input>
              </div>
              <div className={styles.profile_item}>
                <span>Подтверждение пароль</span>
                <input placeholder="Повторите пароль" type="parole"></input>
              </div>
            </div>
            <Link to="/profile" className={styles.btn}>
              <button>
                <div>Сохранить</div>
              </button>
            </Link>
          </section>
        </div>
      </div>
      <section className={styles.section_delete}>
        <Link>
          <button>
            <div>Удалить аккаунт</div>
          </button>
        </Link>
      </section>
    </div>
  );
};
