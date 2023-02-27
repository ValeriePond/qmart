import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
import { Item } from '../../components/Item';

export const Search = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>Результаты поиска</h1>
      <p>Ваш поиск по запросу “Яблоко” дал 37 результатов </p>
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
              <div className={styles.sort}>
                <p>Бахчевые</p>
                <p>1</p>
              </div>
              <div className={styles.sort}>
                <p>Цитрусовые</p>
                <p>1</p>
              </div>
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
                <option>По алфавиту</option>
                <option>По цене вниз</option>
                <option>По цене вверх</option>
              </select>
            </div>
            <div className={styles.tag_name}>
              <div>Со скидкой</div>
              <div>Популярное</div>
              <div>Сезонное</div>
            </div>
          </section>
          <section className={styles.items}>
            <Item />
            <Item />
            <Item />
            <Item />
          </section>
        </div>
      </div>
    </div>
  );
};
