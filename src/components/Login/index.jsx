import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';
export const Login = ({ opened }) => {
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className={styles.settings}>
          <ul>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
            <li>
              <Link to="/profile/addresses">Мои адреса</Link>
            </li>
            <li>
              <Link to="/favorites">Избранное</Link>
            </li>
          </ul>
        </div>
        <hr></hr>
        <div>
          <Link className={styles.logout}>Выйти</Link>
        </div>
      </div>
    </div>
  );
};
