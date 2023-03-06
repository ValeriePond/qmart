import React from 'react';
import { Link } from 'react-router-dom';

//import '../../index.scss'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './Catalog.module.scss';

import { Item } from '../../components/Item';

export const Catalog = ({
  categories,
  items,
  onAddToCart,
  setItemOpened,
  onShowItem,
  count,
  minus,
  plus,
  onChangeSort,
  setCount,
  sortType,
  onClickCategory,
  onAddToFavorite,
  setTag1,
  setTag2,
  setTag3,
  activeState1,
  activeState2,
  activeState3,
  price,
  setPrice,
  Range,
}) => {
  /*const categoriesSection = categories.category;*/

  const sorting = [
    { name: 'названию ↑', sortP: 'title' },
    { name: 'названию ↓', sortP: '-title' },
    { name: 'цене ↑', sortP: 'price' },
    { name: 'цене ↓', sortP: '-price' },
  ];

  return (
    <div className={styles.wrapper}>
      <h1>Каталог</h1>
      <div className={styles.main}>
        <section className={styles.filters}>
          <div className={styles.categories}>
            <div className={styles.categoriesWay}>
              <p className={styles.category}>Категории</p>
            </div>
            <hr></hr>
            <div className={styles.sortItems}>
              {categories.map((category, i) => (
                <Link to={'/catalog' + category.categoryUrl}>
                  <a
                    key={i}
                    className={styles.sort}
                    //onClick={() => onClickCategory(category.category)}
                  >
                    <p>{category.category}</p>
                    <p>{category.id}</p>
                  </a>
                </Link>
              ))}
            </div>
            <div>
              <hr></hr>
              <Link to="/">Назад к категориям</Link>
            </div>
          </div>
          <div className={styles.price}>
            <div>
              <p>Цена</p>
              <hr></hr>
            </div>
            <div className="range">
              <Range
                marks={{
                  1: `1`,
                  100000: `100`,
                }}
                min={1}
                max={100000}
                defaultValue={[1, 100000]}
                tipFormatter={(value) => `$${value}`}
                tipProps={{
                  placement: 'top',
                  visible: true,
                }}
                value={price}
                onChange={(price) => setPrice(price)}
              />
            </div>
            <div className={styles.priceFilter}>
              <input placeholder="0"></input>
              <input placeholder="20 000"></input>
            </div>
            <div>
              <hr></hr>
              <a>Сбросить</a>
            </div>
          </div>
        </section>
        <div className={styles.itemList}>
          <section className={styles.tags}>
            <div className={styles.mainTags}>
              <select>
                {sorting.map((obj, i) => (
                  <option key={i} onClick={() => onChangeSort(obj)}>
                    {obj.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.tag_name}>
              <div onClick={setTag1} className={`${activeState1 ? 'active' : ''}`}>
                Со скидкой
              </div>
              <div onClick={setTag2} className={`${activeState2 ? 'active' : ''}`}>
                Популярное
              </div>
              <div onClick={setTag3} className={`${activeState3 ? 'active' : ''}`}>
                Сезонное
              </div>
            </div>
          </section>
          <section className={styles.items}>
            {items.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                company={item.company}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                category_type={item.category_type}
                rating={item.rating}
                weight={item.weight}
                onCart={(obj) => onAddToCart(obj)}
                onClickItem={() => setItemOpened(true)}
                onShow={(obj) => onShowItem(obj)}
                setCount={setCount}
                count={count}
                minus={minus}
                plus={plus}
                onFavorite={(obj) => onAddToFavorite(obj)}
                {...item}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
