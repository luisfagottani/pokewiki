import { Link } from 'react-router-dom';
import { pokemonImage } from 'utils/functions';
import style from './PokeBlock.module.scss';

const PokeBlock = ({ label = 'Pokemon' }) => (
  <li className={style.pokeblock}>
    <Link to={`/pokemon/${label}`} className={style.pokeblock__content}>
      <figure className={style.pokeblock__figure}>
        {pokemonImage(label, style.pokeblock__image)}
        <figcaption className={style.pokeblock__caption}>{label}</figcaption>
      </figure>
    </Link>
  </li>
);

export default PokeBlock;
