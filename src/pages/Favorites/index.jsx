import { Link } from 'react-router-dom';
import styles from './Favorites.module.scss';

export const Favorites = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src="images/salad_0.png"></img>
      <h3>Вы еще ничего не добавили</h3>
      <hr></hr>
      <Link to="/">На главную</Link>
    </div>
  );
};
