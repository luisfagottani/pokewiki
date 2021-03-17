import style from './Layout.module.scss';

const Layout = ({ children }) => <main className={style.layout}>{children}</main>;

Layout.MainTitle = ({ label = 'Title' }) => <h1 className={style.layout__title}>{label}</h1>;

Layout.Row = ({ children }) => <section className={style.layout__row}>{children}</section>;

Layout.Column = ({ children }) => (
  <div className={style.layout__column}>
    <div className={style.layout__content}>{children}</div>
  </div>
);

export default Layout;
