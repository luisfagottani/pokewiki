import classNames from 'classnames';
import style from './Layout.module.scss';

const Layout = ({ children }) => <main className={style.layout}>{children}</main>;

Layout.MainTitle = ({ label = 'Title' }) => <h1 className={style.layout__title}>{label}</h1>;

Layout.Row = ({ children }) => <section className={style.layout__row}>{children}</section>;

Layout.Column = ({ children, type }) => (
  <div className={classNames(style.layout__column, { [style[`layout__column--${type}`]]: type })}>
    <div className={style.layout__content}>{children}</div>
  </div>
);

export default Layout;
