import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Menu } from './Menu';
export const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.leftSide}>
          <Link to="/">
            <a className={styles.header__pic} to="/">
              <img src="images/logo.svg" className={styles.logo__pic} alt=""></img>
            </a>
          </Link>
          <div className={styles.menu}>
            <ul className={styles.headerLinkAll}>
              <li className={styles.headerLink}>
                <Link to="/catalog">
                  <div>Каталог</div>
                </Link>
              </li>
              <li className={styles.headerLink}>
                <Link to="/about">
                  <div>О нас</div>
                </Link>
              </li>
              <li className={styles.headerLink}>
                <Link to="/contacts">
                  <div>Контакты</div>
                </Link>
              </li>
              <li className={styles.headerLink}>
                <Link to="/faq">
                  <div>FAQ</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.loginButtons}>
            <Link to="/cart">
              <img class={styles.icons__header} src="images/cart.svg"></img>
            </Link>
            <a onClick={props.onClickProfile}>
              <img class={styles.icons__header} src="images/user.svg"></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
