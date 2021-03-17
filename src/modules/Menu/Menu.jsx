import { useIntl } from 'react-intl';

import Item from './components/Item';
import menuItens from './data';

import style from './Menu.module.scss';

const Menu = () => {
  const intl = useIntl();
  return (
    <nav className={style.menu}>
      <ul className={style.menu__list}>
        {menuItens.map((item) => (
          <Item
            key={item.labelId}
            label={intl.formatMessage({ id: item?.labelId, defaultMessage: 'Menu Item' })}
            route={item?.route}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
