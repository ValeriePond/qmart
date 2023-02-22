import { Link } from 'react-router-dom';
import styles from './Item_catalog_hover.module.scss';

export const Item_catalog_hover = (props) => {
  return (
    <Link>
      <div className={styles.card_home}>
        <img src="images/cards/1.jpeg"></img>
        <div className={styles.text}>Продукты</div>
      </div>
    </Link>
  );
};
