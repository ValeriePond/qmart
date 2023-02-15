import styles from './Footer.module.scss';

export const Footer = (props) => {
  return (
    <div className={styles.wrapper}>
      <footer>
        <div className={styles.leftSide}>
          <div className={styles.website}>
            <a>Qmart.kz</a>
          </div>

          <div>
            <ul>
              <li>
                <a>Каталог</a>
              </li>
              <li>
                <a>О нас</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Контакты</a>
              </li>
            </ul>
          </div>
          <div className={styles.textedArea}>
            <p>+7 777 123 23 23</p>
            <p>qmart@gmail.com</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.media}>
            <img src="images/instagram.svg"></img>
            <img src="images/whatsapp.svg"></img>
          </div>
          <p className={styles.rightTextedArea}> Все права защищены</p>
          <p className={styles.rightTextedArea}> 2023</p>
        </div>
      </footer>
    </div>
  );
};
