import style from './Layout.module.scss';

const Layout = ({ children }) => <main className={style.layout}>{children}</main>;

Layout.MainTitle = ({ label = 'Title' }) => <h1 className={style.layout__title}>{label}</h1>;

export default Layout;
