import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

import style from './PokeBlock.module.scss';

const PokeBlock = ({ label = 'Pokemon', alt = 'Alt image', imgSrc = '' }) => (
  <li className={style.pokeblock}>
    <a href={'123'} className={style.pokeblock__content}>
      <figure className={style.pokeblock__figure}>
        {imgSrc ? (
          <img src={imgSrc} alt={alt} className={style.pokeblock__image} />
        ) : (
          <PokeballIcon className={style.pokeblock__image} />
        )}
        <figcaption className={style.pokeblock__caption}>{label}</figcaption>
      </figure>
    </a>
  </li>
);

export default PokeBlock;
