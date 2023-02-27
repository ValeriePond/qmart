import { Link } from 'react-router-dom';
import styles from './Item_cart.module.scss';
export const Item_cart = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src="images/cards/apple.jpg"></img>
      <div className={styles.name}>
        <p>кг</p>
        <h3>Яблоки золотое превосходное</h3>
      </div>
      <div className={styles.counter}>
        <button>
          <img src="images/minus.svg"></img>
        </button>
        <div>
          <p>1</p>
        </div>
        <button>
          <img src="images/plus.svg"></img>
        </button>
      </div>
      <div className={styles.price}>
        <p>776</p>
        <p>тг</p>
      </div>
      <Link to="/">
        <img src="images/trash.svg"></img>
      </Link>
    </div>
  );
};
