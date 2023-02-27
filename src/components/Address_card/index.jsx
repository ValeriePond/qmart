import { Link } from 'react-router-dom';
import styles from './Address_card.module.scss';

export const Address_card = (props) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        <h2>Адрес 1</h2>
        <Link to="/">
          <img src="images/trash.svg"></img>
        </Link>
      </section>
      <hr></hr>
      <div className={styles.address}>
        <p>Алматы</p>
        <p>Тлендиева, дом 20, кв. 30</p>
      </div>
    </div>
  );
};
