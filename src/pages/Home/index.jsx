import { Slider } from '../../components/Slider';
import { Item_catalog_hover } from '../../components/Item_catalog_hover';
import { MyComponent } from '../../components/MyComponent';
import styles from './Home.module.scss';

export const Home = ({ categories }) => {
  return (
    <div className={styles.wrapper}>
      <Slider />
      <h1>Каталог</h1>
      <section className={styles.catalogHover}>
        {categories.map((item) => (
          <Item_catalog_hover key={item.id} imageUrl={item.imageUrl} category={item.category} />
        ))}
      </section>
      <section className={styles.description}>
        <h1>Всегда свежее. Всегда вовремя.</h1>
        <div>
          <p>
            Такой слоган нашей команды. Вкусная и полезная еда - залог хорошего самочувствия.
            Поэтому мы очень тщательно относимся к выбору поставщиков. Чтобы на вашем столе всегда
            были исключительно качественные продукты.
          </p>
          <p>
            Гарантируем удобную и быструю доставку прямо к вам домой. Вы самостоятельно выбираете
            день и время. И наш курьер привезет ваш заказ.
          </p>
        </div>
      </section>
      <section className={styles.delivery}>
        <p>Доставка осуществляется ежедневно с 14.00 до 23.00</p>
        <p className={styles.price}>
          При заказе на сумму свыше 15 000 тг доставка в указанном квадрате осуществляется бесплатно
        </p>
        <p>В отдаленные районы стоимость доставки расчитывается индивидуально</p>
      </section>
    </div>
  );
};
