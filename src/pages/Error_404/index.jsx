import styles from './Error_404.module.scss';

export const Error_404 = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src="images/salad_0.png"></img>
      <h3>404 - страница не найдена</h3>
      <hr></hr>
      <a>На главную</a>
    </div>
  );
};
