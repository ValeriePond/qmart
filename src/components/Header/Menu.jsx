import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Menu = (props) => {
  return (
    <div className={styles.menuProfile}>
      <div>
        <Link to="/profile">Общие настройки</Link>
        <Link to="/profile/addresses">Мои адреса</Link>
        <Link to="/favorites">Избранное</Link>
      </div>
      <hr></hr>
      <Link to="/">Выйти</Link>
    </div>
  );
};
