import Menu from 'modules/Menu';
import { Logo } from './components';

import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
