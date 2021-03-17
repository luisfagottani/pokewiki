import { NavLink } from 'react-router-dom';

import style from './Item.module.scss';

const Item = ({ label = 'Default', route = '/' }) => (
  <NavLink to={route} activeClassName={style.item}>
    <span className={style.item__label}>{label}</span>
  </NavLink>
);

export default Item;
