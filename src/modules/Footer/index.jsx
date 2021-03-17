import classNames from 'classnames';
import { connect } from 'react-redux';

import { defineLocale, getLocale } from 'redux/ducks/app';

import style from './Footer.module.scss';

const Footer = ({ currentLocale, handleDefineLocale }) => {
  const defineLocaleOnClick = (locale) => {
    handleDefineLocale(locale);
  };
  return (
    <footer className={style.footer}>
      <ul className={style.footer__translations}>
        <li
          onClick={() => defineLocaleOnClick('pt-BR')}
          className={classNames(style.footer__language, {
            [style['footer__language--hide']]: currentLocale === 'pt-BR',
          })}
        >
          PT-BR
        </li>
        <li
          onClick={() => defineLocaleOnClick('EN')}
          className={classNames(style.footer__language, { [style['footer__language--hide']]: currentLocale === 'EN' })}
        >
          EN
        </li>
      </ul>
      <p className={style.footer__madeby}>PokeAPI by Luis Agottani with CRA</p>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  currentLocale: getLocale(state),
});

const mapDispatchToProps = {
  handleDefineLocale: defineLocale,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
