import styles from './Item.module.scss';

export const Item = ({
  id,
  title,
  imageUrl,
  price,
  description,
  company,
  category,
  category_type,
  rating,
  weight,
  season,
  hit,
  sale,
  onCart,
  onClickItem,
  onShow,
  count,
  setCount,
  plus,
  minus,
  plusPc,
  minusPc,
}) => {
  const onClickCart = () => {
    onCart({ id, title, imageUrl, price, count });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <div className={styles.photoTop}>
          <div className={styles.rating}>
            <img src="images/rating.svg"></img>
            <p>{rating}</p>
          </div>
          <img className={styles.favorites} src="images/add_favorites.svg"></img>
        </div>
        <img src={imageUrl} className={styles.mainPhoto}></img>
      </div>
      <div className={styles.name}>
        <p>{company}</p>
        <h3>{title}</h3>
      </div>
      <div className={styles.total}>
        <div className={styles.price}>
          <p>{price}</p>
          <p>тг/{weight}</p>
        </div>
        <div className={styles.counter}>
          <button className={styles.weight} onClick={minus}>
            <img src="images/minus.svg" alt="" />
          </button>
          <div className={styles.count}>
            <p>{count}</p>
          </div>
          <button className={styles.weight} onClick={plus}>
            <img src="images/plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div>
        <button className={styles.add} onClick={onClickCart}>
          <div>В корзину</div>
        </button>
      </div>
    </div>
  );
};
