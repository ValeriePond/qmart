import styles from './Item.module.scss';

export const Item = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <div className={styles.photoTop}>
          <div className={styles.rating}>
            <img src="images/rating.svg"></img>
            <p>4.8</p>
          </div>
          <img className={styles.favorites} src="images/add_favorites.svg"></img>
        </div>
        <img src="images/cards/apple.jpg" className={styles.mainPhoto}></img>
      </div>
      <div className={styles.name}>
        <p>alma.kz</p>
        <h3>Яблоки Золотое Превосходное</h3>
      </div>
      <div className={styles.total}>
        <div className={styles.price}>
          <p>776</p>
          <p>тг/кг</p>
        </div>
        <div className={styles.counter}>
          <button className={styles.weight}>
            <img src="images/minus.svg" alt="" />
          </button>
          <div className={styles.count}>
            <p>1</p>
          </div>
          <button className={styles.weight}>
            <img src="images/plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <button className={styles.add}>
          <div>В корзину</div>
        </button>
      </div>
    </div>
  );
};
