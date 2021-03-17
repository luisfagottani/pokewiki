import { ReactComponent as PokemonLogo } from 'assets/images/pokemon-logo.svg';

import style from './Logo.module.scss';

const Logo = () => {
  return <PokemonLogo className={style.logo} />;
};

export default Logo;
