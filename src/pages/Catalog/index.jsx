import { Link } from 'react-router-dom';
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
  minusPc,
  plusPc,
  onChangeSort,
  setCount,
  sortType,
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
              <img src="images/arrow.svg"></img>
              <p>Фрукты</p>
            </div>
            <hr></hr>
            <div className={styles.sortItems}>
              {categories.map((category) => (
                <div className={styles.sort}>
                  <p> {category.Category}</p>
                  <p>{category.id}</p>
                </div>
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
              <div>Со скидкой</div>
              <div>Популярное</div>
              <div>Сезонное</div>
            </div>
          </section>
          <section className={styles.items}>
            {items.map((item) => (
              <Item
                key={item.id}
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
                season={item.season}
                hit={item.hit}
                sale={item.sale}
                onCart={(obj) => onAddToCart(obj)}
                onClickItem={() => setItemOpened(true)}
                onShow={(obj) => onShowItem(obj)}
                setCount={setCount}
                count={count}
                minus={minus}
                plus={plus}
                minusPc={minusPc}
                plusPc={plusPc}
                {...item}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
