import classNames from 'classnames';
import { connect } from 'react-redux';

import { getGlobalLoading } from 'redux/ducks/app';
import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

import style from './GlobalLoading.module.scss';

const GlobalLoading = ({ appIsLoading }) => (
  <div className={classNames(style.loading, { [style['loading--hide']]: !appIsLoading })}>
    <div className={style.loading__stage}></div>
    <div className={classNames(style.loading__stage, style['loading__stage--bottom'])}></div>
    <PokeballIcon className={style.loading__ball} />
  </div>
);

const mapStateToProps = (state) => ({
  appIsLoading: getGlobalLoading(state),
});

export default connect(mapStateToProps, null)(GlobalLoading);
