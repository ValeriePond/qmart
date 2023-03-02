import styles from './Item.module.scss';
import React from 'react';
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
  tags,
  onCart,
  onClickItem,
  onShow,
  onRemoveFavorite,
  onAddToFavorites,
  favorited = false,
  onFavorite,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = {
    id,
    parentId: id,
    title,
    imageUrl,
    price,
    description,
    tags,
    weight,
    rating,
    company,
    category,
    category_type,
  };
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  const onClickCart = () => {
    onCart({ id, title, imageUrl, price, count, weight });
  };

  const [count, setCount] = React.useState(1);
  const plus = () => {
    if (weight === 'кг') {
      setCount(count + 0.5);
    } else {
      setCount(count + 1);
    }
  };

  const minus = () => {
    if (weight === 'кг') {
      setCount(count - 0.5);
    } else {
      setCount(count - 1);
    }
  };

  const onClickMore = () => {
    onShow({
      id,
      title,
      imageUrl,
      price,
      count,
      description,
      weight,
      tags,
      rating,
      count,
      company,
      setCount,
      onClickCart,
      onRemoveFavorite,
      onAddToFavorites,
    });
    onClickItem();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <div className={styles.photoTop}>
          <div className={styles.rating}>
            <img src="images/rating.svg"></img>
            <p>{rating}</p>
          </div>
          <img
            onClick={onClickFavorite}
            className={styles.favorites}
            src={isFavorite ? 'images/favorites2.svg' : 'images/favorites1.svg'}
            alt="Unliked"></img>
        </div>
        <img src={imageUrl} className={styles.mainPhoto}></img>
      </div>
      <div className={styles.name} onClick={onClickMore}>
        <p className={styles.company}>{company}</p>
        <h3 className={styles.title}>{title}</h3>
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
