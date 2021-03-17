import { ReactComponent as PokeballIcon } from 'assets/images/pokeball-icon.svg';

import style from './PokeBlock.module.scss';

const PokeBlock = ({ onClick, label = 'Pokemon', alt = 'Alt image', imgSrc = '' }) => (
  <li className={style.pokeblock}>
    <div tabIndex="0" onClick={onClick} role="button" className={style.pokeblock__content}>
      <figure className={style.pokeblock__figure}>
        {imgSrc ? (
          <img src={imgSrc} alt={alt} className={style.pokeblock__image} />
        ) : (
          <PokeballIcon className={style.pokeblock__image} />
        )}
        <figcaption className={style.pokeblock__caption}>{label}</figcaption>
      </figure>
    </div>
  </li>
);

export default PokeBlock;
