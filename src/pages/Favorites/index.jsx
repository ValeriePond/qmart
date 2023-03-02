import { Link } from 'react-router-dom';
import styles from './Favorites.module.scss';
import AppContext from '../../components/context';
import { Item } from '../../components/Item';

import axios from 'axios';
import React from 'react';

export const Favorites = ({ items }) => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  return (
    <div className={styles.wrapper}>
      <h1>Избранное</h1>
      {!!favorites.length ? (
        <div className={styles.wrapperInside}>
          {items.map((item, index) => (
            <Item key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <img src="images/salad_0.png"></img>
          <h3>Вы еще ничего не добавили</h3>
          <hr></hr>
          <Link to="/">На главную</Link>
        </div>
      )}
    </div>
  );
};
