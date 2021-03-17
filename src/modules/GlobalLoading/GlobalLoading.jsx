import classNames from 'classnames';

import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

import style from './GlobalLoading.module.scss';

const GlobalLoading = () => (
  <div className={classNames(style.loading, style['loading--hide'])}>
    <div className={style.loading__stage}></div>
    <div className={classNames(style.loading__stage, style['loading__stage--bottom'])}></div>
    <PokeballIcon className={style.loading__ball} />
  </div>
);

export default GlobalLoading;
