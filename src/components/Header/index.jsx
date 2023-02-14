//import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
export const Header = (props) => {
  return (
    <header>
      <a to="/">
        <p className="header-pic" href="">
          <svg src="images/logo2.png" className="logo__pic" alt=""></svg>
        </p>
      </a>
      <div className="menu">
        <ul className="headerLinkAll">
          <li className="headerLink">
            <a to="/">Каталог</a>
          </li>
          <li className="headerLink">
            <a to="/">О нас</a>
          </li>
          <li className="headerLink">
            <a to="/">Контакты</a>
          </li>
          <li className="headerLink">
            <a to="/">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="search">
        <svg src="search.svg"></svg>
        <input></input>
        <svg></svg>
      </div>
      <div>
        <a>
          <svg class="icons_header" src="images/cart.svg"></svg>
        </a>
        <a>
          <svg class="icons_header" src="images/user.svg"></svg>
        </a>
      </div>
    </header>
  );
};
