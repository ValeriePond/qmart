import styles from './FAQ.module.scss';

export const FAQ = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1>FAQ</h1>
      <section>
        <h2>Когда осуществляется доставка?</h2>
        <p>
          Доставка осуществляется со вторника по воскресенье с 14.00 до 23.00. При оформлении заказа
          вы самостоятельно выбираете удобный вам день и время.
        </p>
      </section>
    </div>
  );
};
