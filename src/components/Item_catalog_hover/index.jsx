import { Link } from 'react-router-dom';
import styles from './Item_catalog_hover.module.scss';

export const Item_catalog_hover = ({ id, category, imageUrl }) => {
  return (
    <Link>
      {
        <div className={styles.card_home}>
          <img src={imageUrl}></img>
          <div className={styles.text}>{category}</div>
        </div>
      }
    </Link>
  );
};
