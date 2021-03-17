import { useHistory } from 'react-router';
import { ReactComponent as PokemonLogo } from 'assets/images/pokemon-logo.svg';

import style from './Logo.module.scss';

const Logo = () => {
  let history = useHistory();

  return <PokemonLogo onClick={() => history.push('/')} className={style.logo} />;
};

export default Logo;
