import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = (props) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.leftSide}>
          <a className={styles.header__pic} to="/">
            <img src="images/logo.svg" className={styles.logo__pic} alt=""></img>
          </a>
          <div className="menu">
            <ul className="headerLinkAll">
              <li className="headerLink">
                <Link to="/catalog">Каталог</Link>
              </li>
              <li className="headerLink">
                <Link to="/">О нас</Link>
              </li>
              <li className="headerLink">
                <Link to="/contacts">Контакты</Link>
              </li>
              <li className="headerLink">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.search}>
            <img src="images/search.svg"></img>
            <input value="Искать"></input>
          </div>
          <div className={styles.loginButtons}>
            <a class={styles.icons__header}>
              <img src="images/cart.svg"></img>
            </a>
            <a class={styles.icons__header}>
              <img src="images/user.svg"></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
